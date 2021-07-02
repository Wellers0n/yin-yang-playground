/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type HomeQueryVariables = {};
export type HomeQueryResponse = {
    readonly user: {
        readonly name: string | null;
        readonly email: string | null;
    } | null;
    readonly users: ReadonlyArray<{
        readonly name: string | null;
        readonly description: string | null;
        readonly email: string | null;
    } | null> | null;
};
export type HomeQuery = {
    readonly response: HomeQueryResponse;
    readonly variables: HomeQueryVariables;
};



/*
query HomeQuery {
  user {
    name
    email
    id
  }
  users {
    name
    description
    email
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Users",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Users",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v2/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "QueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Users",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Users",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v2/*: any*/),
          (v1/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ff632b9b4227eb14c788e31b3c6918b5",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery {\n  user {\n    name\n    email\n    id\n  }\n  users {\n    name\n    description\n    email\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '853209d4e757743b1fd0bef719c484b9';
export default node;
