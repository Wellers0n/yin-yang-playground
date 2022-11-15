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
  server.listen(5001, () => {
    console.log(
      `SERVER ON: http://localhost:${5001}/graphql`
    );
  });
})();
