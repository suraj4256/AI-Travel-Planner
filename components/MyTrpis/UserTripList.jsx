import { View, Text, Image } from 'react-native'
import React from 'react'

export default function UserTripList(userTrips) {
console.log("User Trips : ->", userTrips, userTrips[0]?.userEmail)
  return (
    <View>
      <View>
        <Image style={{
          width:'100%',
          height:150,
          objectFit:'cover',
          borderRadius:15,
          marginTop:20 
        }} source={require('./../../assets/images/LocationPic.jpg')}/>
        <View>
            <Text style={{
                color:"black",
                marginTop:10
            }}>{userTrips[0]?.userEmail}</Text>
        </View>
      </View>
    </View>
  )
}