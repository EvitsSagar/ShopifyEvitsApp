import React from 'react';
import { View } from 'react-native';
import { TextInput, Card, Button } from 'react-native-paper';
import { useMutation } from '@apollo/client';
import { inputLoginVarible,LOGIN_CREATE,loginResponse,customerAccessToken } from './type';
import { storeCustomerToken,getCustomerAccessStoreData,removeStoreValue } from '../../commenfun/function';
import { useDispatch, useSelector } from 'react-redux';
import { customerToken, setcustomerStorageToken } from '../../Store/Redusers/storageData/custumerStorageToken';

interface inputs{
    email:string;
    password:string;
}

interface AuthDetails {
    [key: string]: string;
  }


export default function LoginForm() {
    const dispatch=useDispatch()
    const [inputText, setinputText] = React.useState<inputs>({
        email:"",
        password:""
    });
    const [createLogin, { loading, error, data }] = useMutation<loginResponse, inputLoginVarible>(LOGIN_CREATE);
    const handleInputs=(name: keyof AuthDetails, value: string)=>{
        setinputText({ ...inputText, [name]: value })
    }

    const handleLogin =()=>{
     createLogin({
            variables:inputText
     })
    }  


    React.useEffect(()=>{
    if(data){
      storeCustomerToken(data?.customerAccessTokenCreate.customerAccessToken)
      dispatch(setcustomerStorageToken({
        accessToken:data.customerAccessTokenCreate.customerAccessToken.accessToken,
        expitesAt:data.customerAccessTokenCreate.customerAccessToken.expiresAt,
        isauthenticated:true,
      }))
    }
    },[data])
   



  return (
    <View style={{ padding: 10, flex: 1, justifyContent: 'center' }}>
    <Card style={{ padding: 10 }}>
        <View style={{ gap: 10, backgroundColor: "transparent" }}>
            <TextInput
                value={inputText.email}
                onChangeText={(text) => handleInputs('email', text)}
                id='email'
                label="Email"
                right={<TextInput.Icon icon="account-circle" />}
            />
            <TextInput
                value={inputText.password}
                onChangeText={(text) => handleInputs('password', text)}
                id='password'
                label="Password"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
            />
            <Button loading={loading} icon="login" mode="contained" onPress={handleLogin}>
                Login
            </Button>
        </View>
    </Card>
</View>
  )
}
