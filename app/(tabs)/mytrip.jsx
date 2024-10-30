import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import StartNewTripCard from '../../components/MyTrpis/StartNewTripCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../configs/FirebaseConfig';
import { ActivityIndicator } from 'react-native';
import UserTripList from '../../components/MyTrpis/UserTripList';
import { useRouter } from 'expo-router';

export default function MyTrip() {

  const [userTrips,setUserTrips]=useState([]);
  const [loading,setLoading] = useState("false");
  const user = auth.currentUser;
  const router = useRouter();
  
  useEffect(()=>{
    GetTrips();
  },[user]);
  
  // Fetching trip data from firestore

  const GetTrips=async()=>{
    setUserTrips([]);
    setLoading("true");
    try {
    const q = query(collection(db, 'UserTrips'), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
      // console.log(doc.id,"==>",doc.data);
      setUserTrips(prevTrips => [...prevTrips, doc.data()]);
      console.log(userTrips);
    });
    } catch (error) {
       console.log("Error in fetching data from firestore",error)  
    }
    setLoading("false");
  }


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
      <TouchableOpacity onPress={()=>{
        router.push('/create-trip/search-place')
      }} >
      <Ionicons name='add-circle' size={30} color={Colors.BLACK}/>
      </TouchableOpacity>
      </View>
      {!userTrips && loading && <ActivityIndicator size={'large'} color={Colors.PRIMARY}/>}
     {userTrips?.length==0?
    <StartNewTripCard/>:<UserTripList userTrips={userTrips}/>
    }
    </View>
  )
}