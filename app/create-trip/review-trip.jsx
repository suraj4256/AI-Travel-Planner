import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import Entypo from '@expo/vector-icons/Entypo';
import { CreateTripContext } from '../../context/CreateTripContext';
import Fontisto from '@expo/vector-icons/Fontisto';
import moment from 'moment';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ReviewTrip() {
    const navigation = useNavigation();
    const {tripData,setTripData} = useContext(CreateTripContext);
    const router = useRouter();
    useEffect(()=>{
       navigation.setOptions({
        headerShown:true,
        headerTransparent:true,
        headerTitle:''
       })
    },[])
  return (
    <View style={{
        padding:25,
        paddingTop:90,
        backgroundColor:Colors.White,
        height:'100%'
    }}>

       <Text style={{
        fontSize:35,
        fontFamily:'outfit-bold'
       }}>
        Review Your Trip
       </Text>
       <Text style={{
                fontSize:17,
                fontFamily:'outfit'
            }}>Before generating your trip, please review your selection</Text>
            {/* Destination name Info */}
        <View style={{
            marginTop:35,
            display:'flex',
            alignContent:'center',
            flexDirection:'row',
            gap:20
        }}>
        <Entypo name="location-pin" size={35} color="black" />
        <View>
            <Text style={{
                fontFamily:'outfit',
                fontSize:20,
                color:Colors.GREY,
            }}>Destination</Text>
            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:20
            }}>{tripData?.locationInfo?.name}</Text>
        </View>
        </View>
        {/* Date Selected Info */}
        <View style={{
            marginTop:25,
            display:'flex',
            alignContent:'center',
            flexDirection:'row',
            gap:20
        }}>
       <Fontisto name="date" size={35} color="black" />
        <View>
            <Text style={{
                fontFamily:'outfit',
                fontSize:20,
                color:Colors.GREY,
            }}>Travel Date</Text>
            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:20,
                paddingRight:10,
            }}>{moment(new Date(tripData?.dateInfo?.startdate)).format('DD MMM')+" To "+moment(new Date(tripData?.dateInfo?.enddate)).format('DD MMM')+"  "}
            ({tripData?.dateInfo?.noOfDays} Days)
            </Text>
        </View>
        
        </View>

        {/* Traveller Info */}

        <View style={{
            marginTop:25,
            display:'flex',
            alignContent:'center',
            flexDirection:'row',
            gap:20
        }}>
       <FontAwesome name="group" size={35} color="black" />
        <View>
            <Text style={{
                fontFamily:'outfit',
                fontSize:20,
                color:Colors.GREY,
            }}>Traveller</Text>
            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:20,
                paddingRight:10,
            }}>{tripData?.traveller_info?.traveller}
            </Text>
        </View>
        
        </View>
         {/* Budget Info */}

         <View style={{
            marginTop:25,
            display:'flex',
            alignContent:'center',
            flexDirection:'row',
            gap:20
        }}>
       <FontAwesome6 name="money-check-dollar" size={35} color="black" />
        <View>
            <Text style={{
                fontFamily:'outfit',
                fontSize:20,
                color:Colors.GREY,
            }}>Budget</Text>
            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:20,
                paddingRight:10,
            }}>{tripData?.budgetDetails?.type}
            </Text>
        </View>
        </View>
        <View style={{
            marginTop:'93%',
        }}>
        <TouchableOpacity style={{
               padding:20,
               borderRadius:15,
               backgroundColor:Colors.BLACK,
               alignItems:'center'
           }}
           onPress={()=>router.replace('/create-trip/generate-trip')}
           >
            <Text style={{
                color:Colors.White,
                fontSize:20,
                fontFamily:'outfit-medium'
            }}
            >
                Build My Trip
            </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}