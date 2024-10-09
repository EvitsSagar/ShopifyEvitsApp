
import { useGetAllproductQuery } from '../../Store/Redusers/Product/product';
import React, { Suspense } from 'react';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { useDispatch } from 'react-redux';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; 
import { RootstackPerms } from '../../App';
import { useGetSingleProductQuery } from '../../Store/Redusers/Product/product';
import { setProductId } from '../../Store/Redusers/Product/productSlice';


export function AllProduct() {
  const navigation = useNavigation<NativeStackNavigationProp<RootstackPerms>>();
  const dispatch = useDispatch();
  const { data,error,isFetching,isLoading } = useGetAllproductQuery();

  if (isFetching || isLoading) return <Text>Loading....</Text>
  if (!data) return<Text>No data</Text>


  function handleOnpressProduct(id:string){
    dispatch(setProductId(id))
    navigation.navigate("product")
  }

  return (
    <View>
        <Suspense fallback={<Text>Loading....</Text>}>
         <FlatGrid
         scrollEnabled={false}
         itemDimension={130}
         data={data?.products}
        // style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({ item }) => (
          <Card onPress={()=>handleOnpressProduct(item.id)} style={{borderRadius:5,height:250}} >
            <View style={{padding:4}}>
            <Image 
             onLoad={ () => true }
              source={{ uri:item.image?item.image.src:"#"}}
              style={{ width: 150, height: 150 }}
              resizeMode='contain'
            />
            </View>
            <View style={{padding:10}}>
            <Text numberOfLines={2} ellipsizeMode="tail" style={{width:100}}>{item.title}</Text>
            <Text style={{fontSize:12}}>₹{item.variants?item.variants[0].price:""}</Text>
            </View>
          </Card>
        )}
      />
        </Suspense>
    </View> 
  )
}

