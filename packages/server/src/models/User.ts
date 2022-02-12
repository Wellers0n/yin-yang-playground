import mongoose from "mongoose";
import DataLoader from "dataloader";

const { Schema } = mongoose;

const User = new Schema({
  name: {
    type: String,
    required: "name is requerid",
    index: true,
  },
  description: {
    type: String,
    required: "description is requerid",
  },
  email: {
    type: String,
    required: "email is requerid",
    index: true,
  },
  password: {
    type: String,
    required: "password is requerid",
  },
  organizationIds: {
    type: Array,
    index: true,
  },
});

export default mongoose.model("User", User);
