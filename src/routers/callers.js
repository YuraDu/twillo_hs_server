import express from "express";
import {
  getCallers,
  createCaller,
  updateCaller,
  deleteCaller,
} from "../controllers/callers.js";

const callersRouter = express.Router();

// GET route to fetch all callers
callersRouter.get("/", getCallers);

// POST route to create a new caller
callersRouter.post("/", createCaller);

// PATCH route to update a caller by ID
callersRouter.patch("/:id", updateCaller);

// DELETE route to delete a caller by ID
callersRouter.delete("/:id", deleteCaller);

export default callersRouter;
