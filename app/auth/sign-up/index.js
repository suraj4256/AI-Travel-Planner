import { View, Text, StyleSheet, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../constants/Colors'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './../../../configs/FirebaseConfig'

export default function index() {
  const router = useRouter();

  const [fullname, setFullName] = useState("");
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
 
  const onCreateAccount=()=>{
  if(!email&&!fullname&&!password){
    ToastAndroid.show("Enter all the crendentials",ToastAndroid.LONG);
  }
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    router.replace('./mytrip');
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  },
);
  }


  return (
    <View
    style={{
      padding:25,
      paddingTop:80,
      backgroundColor:Colors.White,
      height:"100%",
      width: "100%"
    }}
    >
      <Text style={{
        fontSize:35,
        fontFamily:'outfit-bold'
      }}>
        Create New Account
      </Text>
      <View
      style={{
       marginTop:20
      }}
      >
        <Text style={{
          fontSize:20,
          fontFamily:'outfit-medium'
        }}>
          Full Name
        </Text>
        <TextInput onChangeText={(value)=>setFullName(value)} style={styles.input} placeholder='Enter full name'></TextInput>
      </View>
      {/* Email Section */}
      <View
      style={{
       marginTop:20
      }}
      >
        <Text style={{
          fontSize:20,
          fontFamily:'outfit-medium'
        }}>
          Email
        </Text>
        <TextInput onChangeText={(value)=>setEmail(value)} style={styles.input} placeholder='Enter email'></TextInput>
      </View>

      <View
      style={{
       marginTop:20
      }}
      >
        <Text style={{
          fontSize:20,
          fontFamily:'outfit-medium'
        }}>
         Password
        </Text>
        <TextInput onChangeText={(value)=>setPassword(value)} style={styles.input} placeholder='Enter Password' secureTextEntry={true}></TextInput>
      </View>

      <TouchableOpacity style={{
        padding: 15,
        backgroundColor: Colors.BLACK,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: "center",
        marginTop: "60%",
        height:60
      }} onPress={onCreateAccount}>
        <Text style={{
          alignItems:'center',
          color:Colors.White,
          fontSize:20,
          fontFamily:'outfit-bold'
        }}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        padding: 15,
        backgroundColor: Colors.White,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: "center",
        marginTop: "5%",
        height:60
      }} onPress={()=>router.replace('auth/sign-in')}>
        <Text style={{
          alignItems:'center',
          color:Colors.BLACK,
          fontSize:20,
          fontFamily:'outfit-bold'
        }}>Sign In</Text>
      </TouchableOpacity>
      
    </View>
  )
}
const styles = StyleSheet.create({
  input:{
    padding:15,
    marginTop:10,
    borderRadius: 20,
    height: 60,
    borderWidth: 1,
    borderColor: Colors.GREY,
  },
})
