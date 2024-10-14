import { gql } from "@apollo/client";

export interface CheckoutCreateVariables {
    variantId: string; 
    quantity: number;  
  }


export interface getCheckidInputs{
    input:{
      lineItems:CheckoutCreateVariables[]
    }
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


export interface checkoutOuthRes{
    checkoutCustomerAssociateV2: {
        checkout: Checkout;
    };
}

  export const GET_CHECKOUT_ID = gql`
  mutation checkoutCreate($input: CheckoutCreateInput!) {
  checkoutCreate(input: $input) {
    checkout {
      id
    }
    checkoutUserErrors {
      field
      message
    }
  }
}
  `;

export interface CreateCheckoutWithOath{
    checkoutId:string;
    customerAccessToken:string;
}  

export const CHECKOUT_CREATE = gql`
mutation checkoutCustomerAssociateV2($checkoutId: ID!, $customerAccessToken: String!) {
  checkoutCustomerAssociateV2(checkoutId: $checkoutId, customerAccessToken: $customerAccessToken) {
    checkout {
      id
      webUrl
    }
    checkoutUserErrors {
      code
      field
      message
    }
  }
}
`;