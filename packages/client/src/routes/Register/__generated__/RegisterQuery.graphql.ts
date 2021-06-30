/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type userRegisterInput = {
    name: string;
    email: string;
    password: string;
    description: string;
    clientMutationId?: string | null;
};
export type RegisterQueryVariables = {
    input: userRegisterInput;
};
export type RegisterQueryResponse = {
    readonly UserRegisterMutation: {
        readonly token: string | null;
        readonly message: string | null;
    } | null;
};
export type RegisterQuery = {
    readonly response: RegisterQueryResponse;
    readonly variables: RegisterQueryVariables;
};



/*
mutation RegisterQuery(
  $input: userRegisterInput!
) {
  UserRegisterMutation(input: $input) {
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
    "concreteType": "userRegisterPayload",
    "kind": "LinkedField",
    "name": "UserRegisterMutation",
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
    "name": "RegisterQuery",
    "selections": (v1/*: any*/),
    "type": "MutationType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RegisterQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c8f13b48f1f37b170bced7bee8971a12",
    "id": null,
    "metadata": {},
    "name": "RegisterQuery",
    "operationKind": "mutation",
    "text": "mutation RegisterQuery(\n  $input: userRegisterInput!\n) {\n  UserRegisterMutation(input: $input) {\n    token\n    message\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f53b379e41020b70852acebae35503c6';
export default node;
