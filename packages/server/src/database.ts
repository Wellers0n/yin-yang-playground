import mongoose from "mongoose";

export default function connectDatabase() {
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    mongoose.connection
      .on("error", (error) => reject(error))
      .on("close", () => console.log("Database connection closed."))
      .once("open", () => resolve(mongoose.connections[0]));

    mongoose.connect(
      "mongodb://localhost:27017/yin-yang",
    );
  });
}
