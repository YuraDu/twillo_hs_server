
import Caller from "../models/caller.js";

// Get all callers
export const getCallers = async (req, res) => {
  try {
    const callers = await Caller.find();
    res.status(200).json(callers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create a new caller
export const createCaller = async (req, res) => {
  const caller = req.body;
  const newCaller = new Caller(caller);
  try {
    await newCaller.save();
    res.status(201).json(newCaller);
  } catch (error) {
    console.error({ message: error.message });
    res.status(500).json({ message: "Failed to create caller" });
  }
};

// Update a caller by ID
export const updateCaller = async (req, res) => {
  const { id: _id } = req.params;
  const caller = req.body;
  console.log("🚀 ~ file: callers.js:31 ~ updateCaller ~ caller:", req.body)

  try {
    const updatedCaller = await Caller.findByIdAndUpdate(_id, caller, {
      new: true,
    });

    if (!updatedCaller) {
      return res.status(404).json({ message: "Caller not found" });
    }

    res.status(200).json(updatedCaller);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a caller by ID
export const deleteCaller = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const deletedCaller = await Caller.findByIdAndDelete(_id);

    if (!deletedCaller) {
      return res.status(404).json({ message: "Caller not found" });
    }

    res.status(200).json({ message: "Caller deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
