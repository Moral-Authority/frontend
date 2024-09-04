import { gql } from '@apollo/client';

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
  query GetAllProductsBySubDepartment($department: String!, $subDepartment: String!) {
    getAllProductsBySubDepartment(department: $department, subDepartment: $subDepartment) {
      _id
      Title
      Description
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



export const GET_PRODUCT_BY_ID = gql`
  query GetProductByID($id: String!, $department: String!) {
    getProductByID(id: $id, department: $department) {
      _id
      Title
      Description
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
      PurchaseInfo{
        Price
      }
      ImageLinks
      }
    }
  }
`;

export const GET_SUB_DEPARTMENT_FILTERS = gql`
  query GetSubDepartmentFilters($input: String!) {
    getSubDepartmentFilters(input: $input) {
      Colors {
        Title
        Value
      }
      Sizes
      Companies
      CompanyCertifications
      ProductCertifications
    }
  }
`;
