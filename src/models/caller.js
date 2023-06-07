import mongoose from "mongoose";

const callerSchema = new mongoose.Schema({
  caller: String,
  phoneNumber: String,
  date: String,
});



// Export the Caller model directly
export default mongoose.model("Callers", callerSchema);
