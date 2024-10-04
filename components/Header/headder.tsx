import React from 'react';
import { CustomCarousel } from '../Carousel';
import { View } from 'react-native';
import SearchBar from './searchbar';


export default function Headder() {
  return (
    <View style={{ paddingTop:20 }}>
      <SearchBar/>
      <CustomCarousel />      
    </View>
  )
}
