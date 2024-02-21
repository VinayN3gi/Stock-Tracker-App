import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
const StockListItem = ({stock}) => {

   
  const change=Number.parseFloat(stock.percent_change).toFixed(1);  
  return (
    <View className="flex-row">
    <View className="mb-4 p-1">
    <View className="flex-row">
        <Text className=" font-bold text-xl  text-white">{stock.symbol}</Text>
        <View className="justify-center items-center ml-1">
        <AntDesign name="staro" size={18} color="white"/></View>
    </View>
    <View>
        <Text className="text-white text-lg w-80">{stock.name}</Text>
    </View>  
    </View>
    <View className="flex-1 mt-3 justify-start items-end w-24 ">
        <Text className= " p-1 text-white">{Number.parseFloat(stock.close).toFixed(1)}</Text>
        <Text className="  text-white p-1" style={{color:change > 0 ? "green" : "red"}}>{change > 0 ? "+": ""}{change}%</Text>
    </View>
    </View>
  )
}

export default StockListItem

const styles = StyleSheet.create({})