import mongoose from "mongoose";

const { Schema } = mongoose;

const Organization = new Schema({
  name: {
    type: String,
    required: "name is requerid",
  },
  description: {
    type: String,
    required: "description is requerid",
  },
  email: {
    type: String,
    required: "email is requerid",
  },
});

export default mongoose.model("Organization", Organization);
