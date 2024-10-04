import React from 'react';
import { View,Text } from 'react-native';
import ParallaxScrollView from '../../components/ParallaxScrollView';
import { useGetSingleProductQuery } from '../../Store/Redusers/Product/product';
import { selectProductId } from '../../Store/Redusers/Product/productSlice';
import { useSelector } from 'react-redux';


export  function Product() {
    const { productid } = useSelector(selectProductId);
      const {
      data,
      isError,
      isLoading,
      isFetching,
    } = useGetSingleProductQuery({ productId:productid });
  return (
    <ParallaxScrollView>
     
    </ParallaxScrollView>
  )
}
