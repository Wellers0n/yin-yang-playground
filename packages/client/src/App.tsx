import React, { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import RelayEnvironment from "./relay/Environment";
import ErrorBoundary from "./ErrorBoundary";
import { hot } from "react-hot-loader";
import Router from "./Router";

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <ErrorBoundary>
        <Suspense fallback={"Loading..."}>
          <Router />
        </Suspense>
      </ErrorBoundary>
    </RelayEnvironmentProvider>
  );
}

export default hot(module)(App);
