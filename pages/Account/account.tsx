import React from 'react';
import { Text, View } from 'react-native';
import { TextInput, Card, Button } from 'react-native-paper';
import { useMutation } from '@apollo/client';
import { inputLoginVarible,LOGIN_CREATE,loginResponse,customerAccessToken } from './type';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface inputs{
    email:string;
    password:string;
}

interface AuthDetails {
    [key: string]: string;
  }

export default function Account() {
    const [inputText, setinputText] = React.useState<inputs>({
        email:"",
        password:""
    });
    const [createLogin, { loading, error, data, }] = useMutation<loginResponse, inputLoginVarible>(LOGIN_CREATE);
    const handleInputs=(name: keyof AuthDetails, value: string)=>{
        setinputText({ ...inputText, [name]: value })
    }

    const handleLogin =()=>{
        createLogin({
            variables:inputText
          })
    }

    const storeData = async (value:customerAccessToken) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem('my-key', jsonValue);
        } catch (e) {
          // saving error
        }
      };

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('my-key');
          console.warn(value)
          if (value !== null) {
            // value previously stored
          }
        } catch (e) {
          // error reading value
        }
      };
    
    getData()
    
    React.useEffect(()=>{
    if(data){
        console.warn("work")
        storeData(data?.customerAccessTokenCreate.customerAccessToken)
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
