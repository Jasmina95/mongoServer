import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  yearOfBirth: Number,
  address: String
});

// Use Student string to address StudentSchema pointer
export default mongoose.model("Student", StudentSchema);
