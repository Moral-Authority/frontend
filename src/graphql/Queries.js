import { gql } from "@apollo/client";

export const GET_USERS_QUERY = gql`
 query Users {
  users {
   id
   name
   createdAt
   age
   address
  }
 }
`;

export const GET_USER_QUERY = gql`
 query User($id: String!) {
  user(_id: $id) {
   _id
   email
   phone
  }
 }
`;

export const GET_ALL_PRODUCTS_BY_SUB_DEPARTMENT = gql`
 query GetAllProductsBySubDepartment(
  $department: String!
  $subDepartment: String!
 ) {
  getAllProductsBySubDepartment(
   department: $department
   subDepartment: $subDepartment
  ) {
   _id
   Title
   Description
   Department
   subDepartment
   PurchaseInfo {
    Price
    Link
   }
   Company {
    _id
    name
   }
   ImageLinks
  }
 }
`;


export const GET_RECENTLY_ADDED_PRODUCTS = gql`
{
  GetRecentlyAddedProducts {
    _id
    Title
    Department
    subDepartment
    PurchaseInfo {
      Price
    }
    Company {
      name
    }
    ImageLinks
  }
}
`;


// query GetAllProductsBySubDepartment($department: String!, $subDepartment: String!, $limit: Int, $offset: Int) {
//   getAllProductsBySubDepartment(department: $department, subDepartment: $subDepartment, limit: $limit, offset: $offset) {
//     _id
//     Title
//     Company {
//       name
//     }
//     PurchaseInfo {
//       Price
//     }
//     ImageLinks
//   }
// }


export const GET_PRODUCT_BY_ID = gql`
 query GetProductByID($id: String!, $department: String!) {
  getProductByID(id: $id, department: $department) {
   _id
   Title
   Description
   Department
   subDepartment
   PurchaseInfo {
    Price
    Link
   }
   Company {
    _id
    name
   }
   ImageLinks
  }
 }
`;

export const GET_FAVORITES_QUERY = gql`
 query GetAllUserFavs($id: String!) {
  getAllUserFavs(id: $id) {
   id
   product {
    _id
    Title
    Department
    PurchaseInfo {
     Price
    }
    ImageLinks
   }
  }
 }
`;

export const GET_SUB_DEPARTMENT_FILTERS = gql`
 query GetSubDepartmentFilters($department: String!, $subDepartment: String!) {
  getSubDepartmentFilters(
   department: $department
   subDepartment: $subDepartment
  ) {
   Price {
    min
    max
   }
   Companies
   CompanyCertifications
   ProductCertifications
  }
 }
`;

export const FILTER_PRODUCTS = gql`
 query GetProductsByFilter(
  $filter: ProductFilterInput
  $department: String!
  $subDepartment: String!
 ) {
  getProductsByFilter(
   filter: $filter
   department: $department
   subDepartment: $subDepartment
  ) {
   _id
   Title
   Description
   Department
   subDepartment
   PurchaseInfo {
    Price
    Link
   }
   Company {
    _id
    name
   }
   ImageLinks
  }
 }
`;


export const SEARCH_PRODUCTS = gql`
  query SearchProducts($input: String!) {
    search(input: $input) {
        _id
        Title
        Company{
        name
        }
        ImageLinks
        Department
        subDepartment
        PurchaseInfo{
          Price
        }
    }
  }
`;