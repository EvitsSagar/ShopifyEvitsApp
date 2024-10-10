import React from 'react';
import LoginForm from './LoginForm';
import { customerToken } from '../../Store/Redusers/storageData/custumerStorageToken';
import { useSelector } from 'react-redux';
import CustmerDetails from './custmerDetails';


export default function Account() {
  const { customerStorageToken } = useSelector(customerToken);
    const token:string =customerStorageToken.accessToken;   
    if(token){
      return( <CustmerDetails/>)
    }else{
      return( <LoginForm/>)
    }
}


