import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Store/store';
import { PaperProvider } from 'react-native-paper';
import { Landing } from './pages/Landing';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Product } from './pages/product/product';

export type RootstackPerms={
  Home: undefined;
  product: undefined;
}


const Stack = createNativeStackNavigator<RootstackPerms>();



export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Landing}
                options={{headerShown:false}} 
              />
              <Stack.Screen
                name="product"
                component={Product}
                options={{headerShown:false}} 
              />
            </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
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
