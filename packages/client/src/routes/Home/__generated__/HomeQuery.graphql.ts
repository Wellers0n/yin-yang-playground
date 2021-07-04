/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type HomeQueryVariables = {};
export type HomeQueryResponse = {
    readonly me: {
        readonly id: string;
        readonly name: string | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"UserList_query">;
};
export type HomeQuery = {
    readonly response: HomeQueryResponse;
    readonly variables: HomeQueryVariables;
};



/*
query HomeQuery {
  ...UserList_query
  me {
    id
    name
  }
}

fragment UserList_query on QueryType {
  users {
    _id
    name
    email
    description
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "Users",
  "kind": "LinkedField",
  "name": "me",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeQuery",
    "selections": [
      (v2/*: any*/),
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UserList_query"
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
        "name": "users",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "_id",
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      (v2/*: any*/)
    ]
  },
  "params": {
    "cacheID": "6bc010dcbc269bde2c035c5801e78216",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery {\n  ...UserList_query\n  me {\n    id\n    name\n  }\n}\n\nfragment UserList_query on QueryType {\n  users {\n    _id\n    name\n    email\n    description\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '006d1007f92b6288f8a55c92c001730d';
export default node;
