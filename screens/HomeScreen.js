import { FlatList, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/Ionicons';
import top5 from '../data/top5.json'
import StockListItem from '../components/StockListItem';

const HomeScreen = () => {
const stocks=Object.values(top5)
  return (
    <KeyboardAvoidingView behavior='padding' className="rounded-sm">
        <SafeAreaView className='h-full'>
           
            <View className="flex-1"> 
               <FlatList data={stocks} 
               className="mt-4"
               renderItem={({item})=>(<StockListItem stock={item}/>)}/>
                <View style={{backgroundColor:"#36454F"}}className="h-14 bg-gray-900 justify-center rounded-md items-center flex-row">
                    <TouchableOpacity className=" p-4 mr-32">
                    <AntDesign name="home" size={28} color="white"/>
                    </TouchableOpacity>
                    <TouchableOpacity className="p-4" onPress={()=>console.log(stocks)}>
                    <FontAwesome name="list" size={28} color="white"/>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})