/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserLoginInput = {
    email: string;
    password: string;
    clientMutationId?: string | null;
};
export type LoginQueryVariables = {
    input: UserLoginInput;
};
export type LoginQueryResponse = {
    readonly UserLoginMutation: {
        readonly token: string | null;
        readonly message: string | null;
    } | null;
};
export type LoginQuery = {
    readonly response: LoginQueryResponse;
    readonly variables: LoginQueryVariables;
};



/*
mutation LoginQuery(
  $input: UserLoginInput!
) {
  UserLoginMutation(input: $input) {
    token
    message
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UserLoginPayload",
    "kind": "LinkedField",
    "name": "UserLoginMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "message",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginQuery",
    "selections": (v1/*: any*/),
    "type": "MutationType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "161a67797d40e182a21774f2e7dc7e6e",
    "id": null,
    "metadata": {},
    "name": "LoginQuery",
    "operationKind": "mutation",
    "text": "mutation LoginQuery(\n  $input: UserLoginInput!\n) {\n  UserLoginMutation(input: $input) {\n    token\n    message\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f7e23f4692d8d61bb8e1bc58b8b37005';
export default node;
