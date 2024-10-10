import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: 'https://app123test.myshopify.com/api/2024-04/graphql.json', // Your proxy server
});

// Optional: If you need to set headers for the proxy
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-forwarded-for': '/api',
      "X-Shopify-Storefront-Access-Token":"4f86240112ee04b2c24c28f9e12daa3d"
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
