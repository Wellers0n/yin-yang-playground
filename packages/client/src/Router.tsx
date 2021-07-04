import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRouter from "./components/PrivateRouter";

const Login = React.lazy(() => import("./routes/Login"));
const Register = React.lazy(() => import("./routes/Register"));
const Home = React.lazy(() => import("./routes/Home"));
const Edit = React.lazy(() => import("./routes/Edit"));

const router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading..."}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRouter path="/home" component={Home} />
          <PrivateRouter path="/edit/:id" component={Edit} />
          <Route component={NotFoundScreen} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

const NotFoundScreen = () => {
  return <div>page not found</div>;
};

export default router;
