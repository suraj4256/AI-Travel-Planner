import { View, Text, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { FlatList,TouchableOpacity } from 'react-native-gesture-handler';
import { SelectBudgetTypes } from '../../constants/Budget-options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectBudget() {
const navigation = useNavigation();
const [selectedBudget,setSelectedBudget] = useState();
const {tripData,setTripData} = useContext(CreateTripContext);
const router = useRouter();

useEffect(()=>{
    navigation.setOptions({
        headerShown:true,
        headerTransparent:true,
        headerTitle:'Select Budget'
    })
},[])

useEffect(()=>{
   setTripData({...tripData,
    budgetDetails:selectedBudget
   })
},[selectedBudget])

useEffect(()=>{
    console.log(tripData)
 },[tripData])
 

return (
    <View  style={{
        padding:25,
        paddingTop:90,
        backgroundColor:Colors.White,
        height:'100%'
    }}>
       <Text style={{
        fontSize:40,
        fontFamily:'outfit-bold'
       }}>
        Budget
       </Text>
       <Text style={{
        fontSize:17,
        marginTop:5
       }}>
        Choose Spending Habits for your trips
       </Text>
       <View>
          <FlatList
          data={SelectBudgetTypes}
          renderItem={({item})=>(
            <TouchableOpacity 
            onPress={()=>{setSelectedBudget(item)}}
            style={{
                marginVertical:10,
            }}>
            <OptionCard selectedParameter={selectedBudget} option={item}/>
            </TouchableOpacity>)}  
          />
          <View style={{
            marginTop:'75%',
          }}>
            <TouchableOpacity style={{
               padding:20,
               borderRadius:15,
               backgroundColor:Colors.BLACK,
               alignItems:'center'
           }}
           onPress={()=>{
            if (!selectedBudget) {
                ToastAndroid.show("Please select budget type", ToastAndroid.LONG);
              } else {
                router.push('/create-trip/review-trip');
              }
           }}
           >
            <Text style={{
                color:Colors.White,
                fontSize:20,
                fontFamily:'outfit-medium'
            }}
            >
                Continue
            </Text>
            </TouchableOpacity> 
            </View>
       </View>
    </View>
  )
}