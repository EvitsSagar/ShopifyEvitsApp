import React, { Key } from 'react';
import { Text, Card, TextInput, Button } from 'react-native-paper';
import { View } from 'react-native';
import { useMutation, useQuery } from '@apollo/client';
import { inputGetCustomerDetils, GET_CUSTOMER_DETAILS, getCustomerDetRes, customer,LOGOUT_PERFORM,logoutResponse } from './type';
import { useSelector } from 'react-redux';
import { customerToken } from '../../Store/Redusers/storageData/custumerStorageToken';
import { removeStoreValue } from '../../commenfun/function';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootstackPerms } from '../../App';
import { storeCustomerToken } from '../../commenfun/function';


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
    const navigation = useNavigation<NativeStackNavigationProp<RootstackPerms>>();
    const { customerStorageToken } = useSelector(customerToken);
    const [performLogout, { loading:logoutLoad, error:logoutErr, data:logoutData }] = useMutation<logoutResponse, inputGetCustomerDetils>(LOGOUT_PERFORM);
    const { loading, error, data,refetch } = useQuery<getCustomerDetRes, inputGetCustomerDetils>(GET_CUSTOMER_DETAILS, {
        variables: {
            customerAccessToken: customerStorageToken.accessToken
        }
    });

    const handleLogout=()=>{
      performLogout({
            variables:{
                customerAccessToken:customerStorageToken.accessToken
            }
        })
      removeStoreValue("customer-token")
      refetch()
      navigation.navigate("Account")
    }
           
    return (
        <View style={{ flex: 1 }}>
            <Card style={{ flex: 0.30, marginTop: 25, backgroundColor: "rgba(35, 4, 213, 0.8)", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "white" }} variant="displaySmall">User Details</Text>
            </Card>
            <View style={{ padding: 10, gap: 10 }}>
                {inputs.map(({ label, icon, key }, index) => {
                    return (
                        <TextInput
                            key={index}
                            value={data?.customer[key as keyof customer] as string}
                            disabled={true}
                            label={label}
                            right={<TextInput.Icon icon={icon} />}
                        />
                    )
                })}
            </View>
            <View style={{flex:1,justifyContent:"flex-end",padding:10}}>
                <Button loading={logoutLoad} icon="logout" mode="contained" onPress={handleLogout}>
                    Logout
                </Button>
            </View>
        </View>
    )
}
