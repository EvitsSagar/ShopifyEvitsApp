import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Store/store';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Product } from './pages/product/product';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BuyNow } from './pages/checkout/buyNow';
import { Home } from './pages/Home';

export type RootstackPerms={
  Home: undefined;
  product: undefined;
  buyNow:{
    data:{
      url:string;
    }
  };
}

const client = new ApolloClient({
  uri: 'https://app123test.myshopify.com/api/2024-04/graphql.json',
  cache: new InMemoryCache(),
  headers:{
    "X-Shopify-Storefront-Access-Token":"4f86240112ee04b2c24c28f9e12daa3d"
  }
});

const Stack = createNativeStackNavigator<RootstackPerms>();



export default function App() {
  return (
    <Provider store={store}>
       <ApolloProvider client={client}>
      <NavigationContainer>
        <PaperProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown:false}} 
              />
              <Stack.Screen
                name="product"
                component={Product}
                options={{headerShown:false}} 
              />
              <Stack.Screen
                name="buyNow"
                component={BuyNow}
                options={{headerShown:false}} 
              />
            </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
       </ApolloProvider>
    </Provider>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
