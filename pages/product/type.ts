import { gql } from "@apollo/client";

export interface CheckoutCreateVariables {
    variantId: string; 
    quantity: number;  
  }




export interface LineItemNode {
    title: string;
    quantity: number;
  }
  
  
export interface LineItemEdge {
    node: LineItemNode;
  }
  
  
export interface Checkout {
    id: string;
    webUrl: string;
    lineItems: {
      edges: LineItemEdge[];
    };
  }
  
  
export interface CheckoutCreateResponse {
    checkoutCreate: {
      checkout: Checkout;
    };
  }


export const CHECKOUT_CREATE = gql`
mutation checkoutCreate($variantId: ID!, $quantity: Int!) {
  checkoutCreate(input: {
    lineItems: [
      {
        variantId: $variantId,
        quantity: $quantity
      }
    ]
  }) {
    checkout {
      id
      webUrl
      lineItems(first: 5) {
        edges {
          node {
            title
            quantity
          }
        }
      }
    }
  }
}
`;