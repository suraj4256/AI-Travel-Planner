import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Colors } from '../../constants/Colors'
import { useNavigation } from 'expo-router'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {CreateTripContext} from '../../context/CreateTripContext'


export default function SearchPlace() {
    const navigation = useNavigation();
    const {tripData,setTripData} = useContext(CreateTripContext);

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'Search'
        })
    },[]);

    useEffect(()=>{
      console.log(tripData)
    }),[tripData];
  return (
    <View
    style={{
        padding:25,
        paddingTop:90,
        backgroundColor:Colors.White,
        height:'100%'
    }}
    >
      <GooglePlacesAutocomplete
      placeholder='Search Place'
      fetchDetails ={true}
      onPress={(data, details=null ) => {
        console.log(details)
        setTripData({
          locationInfo:{
            name:data.description,
            coordinates:details?.geometry.location,
            url:details?.url
          }
        })
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}
      styles={{
       textInputContainer:{
        borderWidth:1,
        borderRadius:10,
        marginTop:10,
       }
      }}
    />

    </View>
  )
} 