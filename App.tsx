import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Store/store';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Product } from './pages/product/product';
import { ApolloProvider } from '@apollo/client';
import { BuyNow } from './pages/checkout/buyNow';
import { Home } from './pages/Home';
import client from './Store/ApiServices/graphBaseApi1';

export type RootstackPerms={
  Home: undefined;
  product: undefined;
  buyNow:{
    data:{
      url:string;
    }
  };
}


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
