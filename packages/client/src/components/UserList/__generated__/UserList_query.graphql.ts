/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserList_query = {
    readonly users: ReadonlyArray<{
        readonly _id: string | null;
        readonly name: string | null;
        readonly email: string | null;
        readonly description: string | null;
    } | null> | null;
    readonly " $refType": "UserList_query";
};
export type UserList_query$data = UserList_query;
export type UserList_query$key = {
    readonly " $data"?: UserList_query$data;
    readonly " $fragmentRefs": FragmentRefs<"UserList_query">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserList_query",
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "QueryType",
  "abstractKey": null
};
(node as any).hash = '86f2bfd7eba2183e0d7e111ee9b84360';
export default node;
