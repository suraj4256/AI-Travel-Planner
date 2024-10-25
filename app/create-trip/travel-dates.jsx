import { View, Text, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import CalendarPicker from "react-native-calendar-picker"
import { useNavigation, useRouter } from 'expo-router'
import { CreateTripContext } from '../../context/CreateTripContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../../constants/Colors';
import moment from 'moment';



export default function TravelDates() {

    const navigation = useNavigation();
    const [selectedStartDate,setSelectedStartDate]=useState();
    const [selectedEndDate,setSelectedEndDate]=useState();
    const {tripData,setTripData} = useContext(CreateTripContext);
    const router = useRouter();

    useEffect(()=>{
        setTripData({...tripData,
        dateInfo:{
        startdate:startDate,
        enddate:endDate,
        noOfDays: no_of_days+1
        }
    });
    },[selectedStartDate,selectedEndDate]);

    useEffect(()=>{
        console.log(tripData)
    },[tripData])

    useEffect(()=>{
        navigation.setOptions({
          headerShown:true,
          headerTransparent:true,
          headerTitle:'Select Travel Dates'
        })
      },[]);

    onDateChange=(date,type)=>{
        if(type=='START_DATE'){
            setSelectedStartDate(moment(date));
        }else{
            setSelectedEndDate(moment(date));
        }
    }

    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    const endDate = selectedEndDate ? selectedEndDate.toString() : "";
    const no_of_days= moment(selectedEndDate).diff(moment(selectedStartDate),'days');
  return (
    <View style={{
        padding:25,
        paddingTop:90,
        backgroundColor:Colors.White,
        height:'100%'
    }}>
      <CalendarPicker 
      minDate={new Date()}
      onDateChange={onDateChange}
      allowRangeSelection={true}
      maxRangeDuration={5}
      selectedRangeStyle={{
        backgroundColor:Colors.PRIMARY,
      }}
      selectedDayTextStyle={{
        color:Colors.White
      }}
      />
      <View>
      <TouchableOpacity style={{
               padding:20,
               borderRadius:15,
               backgroundColor:Colors.BLACK,
               marginTop:'107%',
               alignItems:'center'
           }}
           onPress={()=>{
            if(!startDate){
                ToastAndroid.show('Please select start and end date',ToastAndroid.LONG);
            }else if(!endDate){
                ToastAndroid.show('Please select end date',ToastAndroid.LONG);
            }
            else{
              router.push('/create-trip/select-budget')
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
  )
}