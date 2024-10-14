import { StatusBar } from 'expo-status-bar';
import { StyleSheet, } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import store from './Store/store';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import client from './Store/ApiServices/graphBaseApi1';
import * as React from 'react';
import { BottemNav } from './navigation/BottemNav';




export default function App() {   
  return (
    <Provider store={store}>
       <ApolloProvider client={client}>
        <PaperProvider>
      <NavigationContainer>
       <BottemNav/>
      </NavigationContainer>
        </PaperProvider>
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
