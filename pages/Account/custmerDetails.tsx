import React, { Key } from 'react';
import { Text, Card, TextInput, Button } from 'react-native-paper';
import { View } from 'react-native';
import { useMutation, useQuery } from '@apollo/client';
import { inputGetCustomerDetils, GET_CUSTOMER_DETAILS, getCustomerDetRes, customer,LOGOUT_PERFORM,logoutResponse } from './type';
import { useDispatch, useSelector } from 'react-redux';
import { customerToken, resetCustomerStorageToken } from '../../Store/Redusers/storageData/custumerStorageToken';
import { removeStoreValue } from '../../commenfun/function';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootstackPerms } from '../../navigation/accountStack';
import { storeCustomerToken } from '../../commenfun/function';


interface inputs{
        displayName:string;
        email:string;
        firstName:string;
        lastName:string;
        phone:string;
}

const inputs = [
    {
        label: "Email",
        icon: "email",
        key: "email"
    },
    {
        label: "First Name",
        icon: "account-arrow-left",
        key: "firstName"
    },
    {
        label: "Last Name",
        icon: "account-arrow-right",
        key: "lastName"
    },
    {
        label: "Phone",
        icon: "card-account-phone",
        key: "phone"
    }
]


export default function CustmerDetails() {
    const dispatch=useDispatch()
    const [ Input,setInput ]=React.useState<inputs>({
        displayName:"",
        email:"",
        firstName:"",
        lastName:"",
        phone:""
    });
    const { accessToken } = useSelector(customerToken);
    
    if(!accessToken) return;

    const [performLogout, { loading:logoutLoad, error:logoutErr, data:logoutData }] = useMutation<logoutResponse, inputGetCustomerDetils>(LOGOUT_PERFORM);
    const { loading, error, data,refetch } = useQuery<getCustomerDetRes, inputGetCustomerDetils>(GET_CUSTOMER_DETAILS, {
        variables: {
            customerAccessToken: accessToken
        }
    });
    
    React.useLayoutEffect(()=>{
       refetch()
    },[])

    React.useEffect(()=>{
     if(data?.customer){
        setInput({
            displayName:data.customer.displayName?data.customer.displayName:"",
            email:data.customer.email?data.customer.email:"",
            firstName:data.customer.firstName?data.customer.firstName:"",
            lastName:data.customer.lastName?data.customer.lastName:"",
            phone:data.customer.phone?data.customer.phone:""
        })
     }
    },[data?.customer])
    

    const handleLogout=()=>{
      performLogout({
            variables:{
                customerAccessToken:accessToken
            }
        })
      removeStoreValue("customer-token")
      refetch()
      dispatch(resetCustomerStorageToken())
    }

    return (
        <View style={{ flex: 1 }}>
            <Card style={{ flex: 0.30, marginTop: 25, backgroundColor: "rgba(35, 4, 213, 0.8)", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "white" }} variant="displaySmall">User Details</Text>
            </Card>
            <View style={{ padding: 10, gap: 10 }}>
                {inputs.map(({ label, icon, key }, index) => {
                    const value=Input[key as keyof inputs]
                    return (
                        <TextInput
                            key={index}
                            value={value!==null?value:""}
                            disabled={true}
                            label={label}
                            right={<TextInput.Icon icon={icon} />}
                        />
                    )
                })}
            </View>
            <View style={{flex:1,padding:10}}>
                <Button loading={logoutLoad} icon="logout" mode="contained" onPress={handleLogout}>
                    Logout
                </Button>
            </View>
        </View>
    )
}
