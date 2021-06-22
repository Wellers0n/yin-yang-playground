import dotenv from "dotenv-safe";
import Koa, { Request, Response } from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import bodyparser from "koa-bodyparser";
import cors from "kcors";
import koaPlayground from "graphql-playground-middleware-koa";
import schema from "./schema";
import { getUser } from "./auth";

const graphqlHTTP = require("koa-graphql");

// init router and koa
const app = new Koa();
const router = new Router();

// init doenv
dotenv.config();

// middlewares
app.use(logger());
app.use(cors());
app.use(json());
app.use(bodyparser());
app.use(router.routes());
app.use(router.allowedMethods());

const graphqlSettingsPerReq = async (req: Request, ctx: Response) => {
  const { user } = await getUser(req.header.authorization);

  return {
    graphiql: true,
    schema,
    rootValue: {
      request: ctx.req,
    },
    context: {
      user,
      req,
    },
  };
};

const graphqlServer = graphqlHTTP(graphqlSettingsPerReq);

router.all("/graphql", graphqlServer);
router.all(
  "/graphiql",
  koaPlayground({
    endpoint: "/graphql",
  })
);

export default app;
