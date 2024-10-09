import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const ShopifyCredentials={
    "X-Shopify-Access-Token": "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",
    "key":"52a3be7a0c80671179a4a6ca6777b886",
    "store":"app123test",
    "X-Shopify-Storefront-Access-Token":"4f86240112ee04b2c24c28f9e12daa3d"
}

export const GraphbaseApi1 = createApi({
    reducerPath: 'Graphapi1',
    baseQuery: fetchBaseQuery({ baseUrl: `https://${ShopifyCredentials.store}.myshopify.com/api/2024-04`,
    headers: {
        'Content-Type': 'application/json',
        "Accept":`*/*`,
        "Content-Length":"<calculated when request is sent>",
        "Host":"<calculated when request is sent>",
        "User-Agent":"PostmanRuntime/7.32.3",
        "Accept-Encoding":"gzip, deflate, br",
        "Connection":"keep-alive",
        "X-Shopify-Storefront-Access-Token":ShopifyCredentials["X-Shopify-Storefront-Access-Token"],
    },
    }),
    endpoints: () => ({}),
});






