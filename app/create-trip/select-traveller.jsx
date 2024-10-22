import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';

export default function SelectTraveller() {
    const navigation = useNavigation();
    useEffect(()=>{
      navigation.setOptions({
        headerShown:true,
        headerTransparent:true,
        headerTitle:'Select Traveller'
      })
    },[])
  return (
    <View style={{
        padding:25,
        paddingTop:80,
        backgroundColor:Colors.White,
        height:'100%'
    }}>
      <Text 
      style={{
        fontSize:35,
        fontFamily:'outfit-bold',
        marginTop:20
      }}
      >Who is Travelling</Text>
      <View style={{
        marginTop:20,
      }}>
        <Text
        style={{
            fontSize:23,
            fontFamily:'outfit-bold'
        }}
        >
            Choose your Travellers
        </Text>
      </View>
    </View>
  )
}