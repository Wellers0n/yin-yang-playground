import "@babel/polyfill";
import { createServer } from "http";
import connectDatabase from "./database";
import app from "./app";

(async () => {
  try {
    await connectDatabase();
  } catch (error) {
    console.log("Could not connect to database", { error });
    throw error;
  }
  const server = createServer(app.callback());
  server.listen(5000, () => {
    console.log(
      `SERVER ON: http://localhost:${process.env.PORT || 5000}/grahql`
    );
  });
})();
