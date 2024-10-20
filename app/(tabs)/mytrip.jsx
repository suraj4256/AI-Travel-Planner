import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import StartNewTripCard from '../../components/MyTrpis/StartNewTripCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MyTrip() {

  const [userTrips,setUserTrips]=useState([]);
  return (
    <View style={{
        padding:25,
        paddingTop:55,
        backgroundColor:Colors.White,
        height:'100%',
    }}>
        <View style={{
           display:'flex',
           flexDirection:'row',
           alignContent:'center',
           justifyContent:'space-between'
        }}>
      <Text
        style={{
            fontFamily:'outfit-bold',
            fontSize:35
        }}
      >My Trip</Text>
      <TouchableOpacity>
      <Ionicons name='add-circle' size={30} color={Colors.BLACK}/>
      </TouchableOpacity>
      </View>
     {userTrips?.length==0?
    <StartNewTripCard/>:null 
    }
    </View>
  )
}