import AsyncStorage from '@react-native-async-storage/async-storage';
import { customerAccessToken } from "../pages/Account/type";
import { setcustomerStorageToken,resetCustomerStorageToken } from '../Store/Redusers/storageData/custumerStorageToken';
import { useDispatch } from 'react-redux';

export const storeCustomerToken = async (value:customerAccessToken) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("customer-token", jsonValue);
    } catch (e) {
      console.warn(e)
    }
  };

// export const getStoreData = async (key:string) => {
//     try {
//       const value = await AsyncStorage.getItem(key);
//       console.warn(value)
//       return value
//     } catch (e) {
//       console.warn(e)
//     }
//   };


  export  const getCustomerAccessStoreData = async () => {  
    try {
      const jsonValue = await AsyncStorage.getItem("customer-token");
    } catch (e) {
      return e;
    }
  };


export  const removeStoreValue = async (key:string) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      console.warn(e)
    }
    console.log('Done.')
  }