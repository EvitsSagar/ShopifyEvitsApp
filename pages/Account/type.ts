import { gql } from "@apollo/client";

export interface inputLoginVarible{
    email:string;
    password:string;
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


