import React from 'react'
import { Searchbar } from 'react-native-paper'

export default function SearchBar() {
  return (
    <Searchbar
    iconColor='white'
    placeholderTextColor={"white"}
    inputStyle={{minHeight:0}}
    style={{ height:45,backgroundColor:"#B7B7B7",color:"white",borderWidth:1 }}
    placeholder="Search"
    onChangeText={()=>console.log("work")}
    value={""}
    // mode='view'
  />
  )
}
