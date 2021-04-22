import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  firstName: String,
  points: Number
});

export default mongoose.model("Course", CourseSchema);
