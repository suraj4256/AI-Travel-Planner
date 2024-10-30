import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'

export default function StartNewTripCard() {
  const router = useRouter();
  return (
    <View
    style={{
      padding:20,
      marginTop:50,
      display:'flex',
      alignItems:'center',
      gap:20
    }}
    >
     <Ionicons  name='location-sharp' size={30} color={Colors.BLACK}></Ionicons>
     <Text
     style={{
      fontSize:25,
      fontFamily:'outfit-medium'
     }}
     >
      No trips planned yet
     </Text>
     <Text
     style={{
      fontSize:20,
      fontFamily:'outfit',
      textAlign:'center',
      color:Colors.GREY
     }}
     >
      Looks like its time to plan a new travel experience! Get Started below
     </Text>
     <TouchableOpacity
     style={{
      padding:10,
      backgroundColor:Colors.BLACK,
      borderRadius:10,
      alignItems: "center",
      paddingHorizontal:30
     }} onPress={()=>router.push('/create-trip/search-place')}
     >
      <Text
      style={{
        color:Colors.White,
        fontFamily:'outfit-medium',
        fontSize:17
      }}
      >
      Start New Trip
      </Text>
     </TouchableOpacity>
    </View>
  )
}