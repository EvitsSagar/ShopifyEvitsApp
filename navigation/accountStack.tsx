import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import LoginForm from '../pages/Account/LoginForm';
import CustmerDetails from '../pages/Account/custmerDetails';
import { useSelector } from 'react-redux';
import { customerToken } from '../Store/Redusers/storageData/custumerStorageToken';
import { useNavigation } from '@react-navigation/native';


export type RootstackPerms = {
  login: undefined;
  customerDet: undefined;
};

const AcStack = createNativeStackNavigator<RootstackPerms>();

export default function AccountStack() {
  const { customerStorageToken } = useSelector(customerToken);
  
  // React.useEffect(()=>{
  //   if(token){
  //     navigation.navigate("customerDet")
  //   }
  // },[token])

  return (
    <AcStack.Navigator>
        {customerStorageToken.accessToken===""?
        <AcStack.Screen
          name="login"
          component={LoginForm}
          options={{ headerShown: false }}
        />
       :
        <AcStack.Screen
          name="customerDet"
          component={CustmerDetails}
          options={{ headerShown: false }}
        />
        }
    </AcStack.Navigator>
  );
}