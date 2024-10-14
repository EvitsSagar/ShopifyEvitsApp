import React from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import ParallaxScrollView from '../../components/ParallaxScrollView';
import { useGetSingleProductQuery } from '../../Store/Redusers/Product/product';
import { selectProductId } from '../../Store/Redusers/Product/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCarousel } from '../../components/ProductCarousel';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { useMutation as mutation, gql } from '@apollo/client';
import { WebView } from 'react-native-webview';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootstackPerms } from '../../navigation/AppRouts';
import { setBuynowProductUrl } from '../../Store/Redusers/BuyProduct/buyNowProduct';
import { CHECKOUT_CREATE,CheckoutCreateVariables,CheckoutCreateResponse } from './type';




export function Product() {
  const navigation = useNavigation<NativeStackNavigationProp<RootstackPerms>>();
  const width = Dimensions.get('window').width;
  const { productid } = useSelector(selectProductId);
  const {
    data,
    isError,
    isLoading,
    isFetching,
  } = useGetSingleProductQuery({ productId: productid });
  const [checkoutCreate, { loading, error, data: dta }] = mutation<CheckoutCreateResponse, CheckoutCreateVariables>(CHECKOUT_CREATE);
  const [activeVarient, setActiveVarient] = React.useState<string>();

  const handleBuyNow = async () => {
    checkoutCreate({
      variables: {
        variantId: `gid://shopify/ProductVariant/${activeVarient}`,
        quantity: 1,
      }
    })
  }

  React.useEffect(()=>{
    if(dta){
      navigation.navigate("buyNow",{data:{url:dta?.checkoutCreate.checkout.webUrl}})
    }
  },[dta])  

  React.useLayoutEffect(() => {
    if (data) {
      setActiveVarient(data?.product.variants[0].id)
    }
  }, [data])

  if (!data?.product.images) return
  return (
    <ParallaxScrollView headerImage={
      <ProductCarousel CarouselData={data?.product.images} />
    }>
      <View>
        <Text>variants</Text>
        <ScrollView horizontal={true}>
          <View style={{ flex: 1, flexDirection: "row", gap: 10, padding: 10 }}>
            {data.product.variants.map((variant, index) => {
              const image = data.product.images.find(Item => Item.id === variant.image_id)
              return (
                <Card onPress={() => setActiveVarient(variant.id)} key={index} style={activeVarient == variant.id ? {
                  backgroundColor: 'beige',
                  borderWidth: 2,
                } : {}}>
                  <Card.Content>
                    <Text>{variant.title}</Text>
                    <Image
                      onLoad={() => true}
                      source={{ uri: image ? image.src : "#" }}
                      style={{ width: 50, height: 50 }}
                      resizeMode='contain'
                    />
                    <Text>{variant.id}</Text>
                  </Card.Content>
                </Card>
              )
            })}
          </View>

        </ScrollView>

      </View>
      <View style={{ gap: 10 }}>
        <Button loading={false} mode="contained" onPress={() => console.log('Pressed')}>
          Add to cart
        </Button>
        <Button loading={loading} mode="contained" onPress={handleBuyNow}>
          Buy Now
        </Button>
      </View>
    </ParallaxScrollView>

  )
}
function useMutation(CHECKOUT_CREATE: any): [any, { loading: any; error: any; data: any; }] {
  throw new Error('Function not implemented.');
}

