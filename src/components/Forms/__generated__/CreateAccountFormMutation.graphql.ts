/**
 * @generated SignedSource<<162fa557b423b51b9b95c00aaaac9aa4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type NewUser = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};
export type CreateAccountFormMutation$variables = {
  input: NewUser;
};
export type CreateAccountFormMutation$data = {
  readonly addUser: {
    readonly _id: string;
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
  };
};
export type CreateAccountFormMutation = {
  response: CreateAccountFormMutation$data;
  variables: CreateAccountFormMutation$variables;
};

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
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "addUser",
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
        "name": "firstName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastName",
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
    "name": "CreateAccountFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateAccountFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7b76e5318069a35c8d7764e3f80064b1",
    "id": null,
    "metadata": {},
    "name": "CreateAccountFormMutation",
    "operationKind": "mutation",
    "text": "mutation CreateAccountFormMutation(\n  $input: NewUser!\n) {\n  addUser(input: $input) {\n    _id\n    firstName\n    lastName\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "e2a4ccfe0dd13debe818dfefb8daa0c1";

export default node;
