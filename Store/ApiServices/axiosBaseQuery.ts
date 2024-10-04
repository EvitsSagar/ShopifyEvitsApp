import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productsRes } from "../Redusers/Product/type.p";


const ShopifyCredentials={
    "X-Shopify-Access-Token": "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",
    "key":"82407133099674c9e297c3c45eebe42f",
    "store":"evitstest"
}

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: `https://${ShopifyCredentials.key}:${ShopifyCredentials["X-Shopify-Access-Token"]}@${ShopifyCredentials.store}.myshopify.com/admin/api/2024-07`,
    headers: {
        'Content-Type': 'application/json',
        "Accept":`application/json`,
        "X-Shopify-Access-Token":ShopifyCredentials["X-Shopify-Access-Token"],
    },
    }),
    endpoints: () => ({}),

});


