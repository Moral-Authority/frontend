/**
 * @generated SignedSource<<b3ef28d582f2d0b9218c012ea0d3f874>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type LeftProfileQuery$variables = {
  userId: string;
};
export type LeftProfileQuery$data = {
  readonly user: {
    readonly _id: string;
    readonly email: string;
  };
};
export type LeftProfileQuery = {
  response: LeftProfileQuery$data;
  variables: LeftProfileQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "userId"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
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
        "name": "email",
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
    "name": "LeftProfileQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LeftProfileQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "377e07757f9c2818e37ae7f9babdf0c6",
    "id": null,
    "metadata": {},
    "name": "LeftProfileQuery",
    "operationKind": "query",
    "text": "query LeftProfileQuery(\n  $userId: String!\n) {\n  user(_id: $userId) {\n    _id\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "5ef7d7a5287e99d10c0f13024775ac28";

export default node;
