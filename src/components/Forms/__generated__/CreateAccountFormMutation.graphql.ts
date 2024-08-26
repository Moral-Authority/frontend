/**
 * @generated SignedSource<<b858e446cd77026fb74ae555ad835675>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type NewUser = {
  email: string;
  password: string;
};
export type CreateAccountFormMutation$variables = {
  input: NewUser;
};
export type CreateAccountFormMutation$data = {
  readonly addUser: {
    readonly _id: string;
    readonly email: string;
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
    "cacheID": "7b429e02bb0e16fbb908830f7975b1e3",
    "id": null,
    "metadata": {},
    "name": "CreateAccountFormMutation",
    "operationKind": "mutation",
    "text": "mutation CreateAccountFormMutation(\n  $input: NewUser!\n) {\n  addUser(input: $input) {\n    _id\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "f864f402c05dbbb39bdbbaec3223b2af";

export default node;
