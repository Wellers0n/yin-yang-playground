import mongoose from "mongoose";

const { Schema } = mongoose;

const User = new Schema({
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
  password: {
    type: String,
    required: "password is requerid",
  },
  organizationIds: {
    type: Array
  }
});

export default mongoose.model("User", User);
