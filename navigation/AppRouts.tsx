import { View, Text } from 'react-native'
import React, { ReactElement } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BuyNow } from '../pages/checkout/buyNow';
import { Home } from '../pages/Home';
import { Product } from '../pages/product/product';

export type RootstackPerms={
    Landing: undefined;
    product: undefined;
    buyNow:{
      data:{
        url:string;
      }
    };
  }
  
  
const LaunchStack = createNativeStackNavigator<RootstackPerms>();


export function LaunchRouts():ReactElement{
  return (
    <LaunchStack.Navigator>
    <LaunchStack.Screen
      name="Landing"
      component={Home}
      options={{headerShown:false}} 
    />
    <LaunchStack.Screen
      name="product"
      component={Product}
      options={{headerShown:false}} 
    />
    <LaunchStack.Screen
      name="buyNow"
      component={BuyNow}
      options={{headerShown:false}} 
    />    
  </LaunchStack.Navigator>
  )
}

