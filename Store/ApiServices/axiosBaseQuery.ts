import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const ShopifyCredentials={
    "X-Shopify-Access-Token": "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",
    "key":"52a3be7a0c80671179a4a6ca6777b886",
    "store":"app123test"
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

