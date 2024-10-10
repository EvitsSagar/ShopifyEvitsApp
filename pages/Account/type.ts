import { gql } from "@apollo/client";

export interface inputLoginVarible{
    email:string;
    password:string;
}

export interface inputGetCustomerDetils{
  customerAccessToken:string;
}

export interface customer{
  displayName:string;
  email:string;
  firstName:string;
  lastName:string;
  phone:string|null;
}

export interface getCustomerDetRes{
  customer:customer
}

export interface customerAccessToken{
    accessToken:string;
    expiresAt:string;
}

export interface loginResponse{
    customerAccessTokenCreate: {
        customerAccessToken: customerAccessToken;
        userErrors:[];
    };
}


export interface logoutResponse{
  customerAccessTokenDelete:string;
  userErrors:[];
}


export const LOGIN_CREATE = gql`mutation customerAccessTokenCreate($email: String!, $password: String!){
    customerAccessTokenCreate(input: {
      email: $email,
      password: $password
    }) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      userErrors {
        field
        message
      }
    }
  }`;


export const GET_CUSTOMER_DETAILS= gql`query getCustomer($customerAccessToken: String!) {
  customer(customerAccessToken: $customerAccessToken) {
    email
    displayName
    firstName
    lastName
    phone
  }
}
`



export const LOGOUT_PERFORM=gql`mutation customerAccessTokenDelete($customerAccessToken: String!) {
  customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
    deletedAccessToken
    userErrors {
      field
      message
    }
  }
}
`