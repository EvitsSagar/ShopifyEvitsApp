import React, { Suspense } from 'react';
import { WebView } from 'react-native-webview';
import { buyNowProductURL } from '../../Store/Redusers/BuyProduct/buyNowProduct';
import { useSelector } from 'react-redux';
import { Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

export type RootStackParamList = {
    buyNow: { data: { url: string } };
  };


export function BuyNow() {
    const { buyNowproductUrl } = useSelector(buyNowProductURL);
    const route=useRoute<RouteProp<RootStackParamList, 'buyNow'>>()
    const { params }=route;
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
        <WebView
         javaScriptEnabled={true}
         domStorageEnabled={true}
         startInLoadingState={true}
         source={{ uri: params.data.url }} style={{ flex: 1 }} />
    </Suspense>
    
  )
}
