/**
 * @generated SignedSource<<03003ff4d0eeda80020a38d913d1e124>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CompanyCertifications = "Bcorp" | "ClimateNeutral" | "CrueltyFree" | "FairTradeCertified" | "LeapingBunny" | "Other" | "PlasticBankPartner" | "SafeAndFairLabor" | "rePurposeGlobalPartner" | "%future added value";
export type CompanyEnum = "Amazon" | "Ebay" | "Etsy" | "Other" | "Shopify" | "Woocommerce" | "%future added value";
export type GiveBackPrograms = "Charitable" | "GetOneGiveOne" | "OTHER" | "OnePercentForThePlanet" | "PlantsATree" | "%future added value";
export type MaterialsAndIngredients = "GOTSCertified" | "Handmade" | "LowImpactDyesOrInks" | "MadeInAmerica" | "OEKOTEX" | "OTHER" | "Organic" | "OrganicContent" | "ParabenFree" | "PhthalateFree" | "PlasticFree" | "RecycledContent" | "RecycledPETFabric" | "RecycledPlastic" | "SulfateFree" | "SustainablyHarvestedRubber" | "SustainablyHarvestedWood" | "USDACertifiedOrganic" | "Vegan" | "%future added value";
export type OwnersAndFounders = "AsianPacificIslanderOwned" | "BlackOwned" | "IndigenousOwned" | "LGBTQPlusOwned" | "MomOwned" | "OTHER" | "WomanOwned" | "%future added value";
export type AddProductRequest = {
  Categorization: CategorizationInput;
  Certifications: AllCertificationsInput;
  Description: string;
  ImageLinks?: ReadonlyArray<string | null> | null;
  PurchaseInfo: PurchaseInfoInput;
  Title: string;
};
export type CategorizationInput = {
  Category?: string | null;
  Department?: string | null;
  Section?: string | null;
  Style?: string | null;
  SubCategory?: string | null;
  SubSection?: string | null;
  Type?: string | null;
};
export type AllCertificationsInput = {
  CompanyCertifications?: CompanyCertifications | null;
  GiveBackPrograms?: GiveBackPrograms | null;
  IfCompanyIsOther?: string | null;
  IfGiveBackProgramsIsOther?: string | null;
  IfMaterialsAndIngredientsIsOther?: string | null;
  IfOwnersAndFoundersIsOther?: string | null;
  MaterialsAndIngredients?: MaterialsAndIngredients | null;
  OwnersAndFounders?: OwnersAndFounders | null;
  ProductCertifications?: ReadonlyArray<string | null> | null;
};
export type PurchaseInfoInput = {
  Company?: CompanyEnum | null;
  IfOtherCompany?: string | null;
  Link: string;
  Price: string;
  Rating?: string | null;
};
export type AddProductMutation$variables = {
  request: AddProductRequest;
};
export type AddProductMutation$data = {
  readonly addProduct: {
    readonly Description: string;
    readonly Section: string | null;
    readonly Subsection: string | null;
    readonly Title: string;
    readonly _id: string;
  };
};
export type AddProductMutation = {
  response: AddProductMutation$data;
  variables: AddProductMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "request"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "request",
        "variableName": "request"
      }
    ],
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "addProduct",
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
        "name": "Title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "Description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "Section",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "Subsection",
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
    "name": "AddProductMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddProductMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "cb782a133ebcca077b69cea285069a8d",
    "id": null,
    "metadata": {},
    "name": "AddProductMutation",
    "operationKind": "mutation",
    "text": "mutation AddProductMutation(\n  $request: AddProductRequest!\n) {\n  addProduct(request: $request) {\n    _id\n    Title\n    Description\n    Section\n    Subsection\n  }\n}\n"
  }
};
})();

(node as any).hash = "93093d0c72d72fefadd2e457545ce921";

export default node;
