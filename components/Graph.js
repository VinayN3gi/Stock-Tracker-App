import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { LineGraph } from 'react-native-graph'
import timeseries from '../data/timeseries.json'

const Graph = () => {
  const graphPoints=timeseries.values.map((value)=>(
   {date:new Date(value.datetime),
    value:Number.parseFloat(value.close)}
  ))

  const [price,setPrice]=useState(graphPoints[graphPoints.length-1].value);
  const [date,setDate]=useState(graphPoints[graphPoints.length-1].value);
  const selected=function(points)
  {
    
    setPrice(Number.parseFloat(points.value).toFixed(1));
    setDate(points.date.toDateString())
  }

  return (
    <View>
      <Text className="text-white">{price}</Text>
      <Text className=" text-white">{date}</Text>
      <LineGraph
      className=" w-96  h-80 p-1"
      points={graphPoints}
      animated={true}
      color="#017560"
      gradientFillColors={['"#0175605D"',"#7476df00"]}
      enablePanGesture={true}
      onPointSelected={selected}
      enableIndicator
      enableFadeInMask
      indicatorPulsating
      />
    </View>
  )
}

export default Graph

const styles = StyleSheet.create({})