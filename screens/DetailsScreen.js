import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function DetailsScreen() {
  const route=useRoute();
  const item=route.params.item
  const change=Number.parseFloat(item.percent_change).toFixed(1);  
  return (
    <View className="bg-black h-full">
      <View className="flex-row">
    <View className="mb-4 p-1">
    <View className="flex-row">
        <Text className=" font-bold text-xl  text-white">{item.symbol}</Text>
        <View className="justify-center items-center ml-1">
        <AntDesign name="staro" size={18} color="white"/></View>
    </View>
    <View>
        <Text className="text-white text-lg w-80">{item.name}</Text>
    </View>  
    </View>
    <View className="flex-1 mt-3 justify-start items-end w-24 ">
        <Text className= " p-1 text-white">{Number.parseFloat(item.close).toFixed(1)}</Text>
        <Text className="  text-white p-1" style={{color:change > 0 ? "green" : "red"}}>{change > 0 ? "+": ""}{change}%</Text>
    </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({})