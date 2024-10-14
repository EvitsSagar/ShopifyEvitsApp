import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer,useNavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-paper/src/components/Icon'
import { LaunchRouts } from './AppRouts';
import AccountStack from './accountStack';
import { getCustomerAccessStoreData } from '../commenfun/function';
import { useDispatch, useSelector } from 'react-redux';
import { customerToken, setcustomerStorageToken,resetCustomerStorageToken } from '../Store/Redusers/storageData/custumerStorageToken';



const Tab = createBottomTabNavigator();


const ProfileScreen = () => (
  <View style={styles.container}>
    <Text>Profile Screen</Text>
  </View>
);

export const BottemNav = () => {
  const { isauthenticated,accessToken,expitesAt }=useSelector(customerToken)
  const dispatch=useDispatch()

  React.useLayoutEffect(()=>{
    getCustomerAccessStoreData().then((value) => {
      if(value){
        dispatch(setcustomerStorageToken({
            accessToken:value.accessToken,
            expitesAt:value.expiresAt,
            isauthenticated:true,
          }
        ))
      }else if(!value){
        dispatch(resetCustomerStorageToken())
      }
  })
  },[accessToken])

  // const AuthGurd=React.useMemo(function checkToken(){
  //   getCustomerAccessStoreData().then((value) => {
  //     if(value){
  //       dispatch(setcustomerStorageToken({
  //           accessToken:value.accessToken,
  //           expitesAt:value.expiresAt,
  //           isauthenticated:true,
  //         }
  //       ))
  //     }else if(!value){
  //       dispatch(resetCustomerStorageToken())
  //     }
  // })
  // },[accessToken]);


  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: '#fff', 
            borderTopWidth: 0, 
            elevation: 5,
            position: 'absolute', 
            height: 60, 
            borderRadius: 20, 
            margin: 10, 
            // display: route.name === 'Profile' ? 'none' : 'flex',
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-account' : 'home-alert';
            } else if (route.name === 'Account') {
              iconName = focused ? 'account-circle' : 'account-circle-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            }

            return <Icon source={iconName as string} size={size+5} color={color} />;
          },
          tabBarActiveTintColor: '#6200ee',
          tabBarInactiveTintColor: '#b0b0b0', 
        })}
      >
        <Tab.Screen  name="Home" component={LaunchRouts} options={{headerShown:false}} />
        <Tab.Screen name="Account" component={AccountStack} />
        <Tab.Screen name="Cart" component={ProfileScreen} />
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });