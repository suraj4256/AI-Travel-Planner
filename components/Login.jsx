import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login() {
    const router = useRouter();
  return (
    <View>
      <Image
        style={{
          width: "100%",
          height: 580,
        }}
        source={require("./../assets/images/login.jpeg")}
      ></Image>
      <View style={styles.container}>
        <Text style={{
            fontSize:28,
            fontFamily:'outfit-bold',
            textAlign:'center',
            marginTop:30,
        }}>
            Travel Planner
        </Text>
        <Text style={{
            padding:10,
            fontSize:17,
            fontFamily:'outfit',
            textAlign:'center',
            color:Colors.GREY,

        }}>Discover your next adventure effortlessly. Personalized iteneraries at your fingertips. Travel smarter with Ai-driven insights.</Text>
        <TouchableOpacity style={styles.button}
        onPress={()=>router.push('auth/sign-in')}>
            <Text style={{color:Colors.White,
                alignItems:'center',
                fontSize:20
            }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   container:{
    backgroundColor:Colors.White,
    marginTop:-20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    height:'100%',
    padding:25,
    paddingTop:10,
   },
   button:{
     padding:15,
     backgroundColor:Colors.BLACK,
     borderRadius:99,
     alignItems:'center',
     marginTop:'15%',
     height:60
   }
})

