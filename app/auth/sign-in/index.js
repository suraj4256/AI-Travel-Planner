import { View, Text, StyleSheet, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../../constants/Colors";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './../../../configs/FirebaseConfig'

export default function index() {
  const router = useRouter();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const onSignIn=()=>{
  if(!email&&!password){
    ToastAndroid.show("Enter all the credentials",ToastAndroid.LONG);
  }
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(user){
      router.replace('./mytrip');
      console.log("User successfully signed in");
    }
    // ...

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    if(errorCode=='auth/invalid-email' || 'auth/invalid-credential'){
      ToastAndroid.show('Enter Valid Credentials',ToastAndroid.LONG);
    }
  });
  }
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 80,
        backgroundColor: Colors.White,
        height: "100%",
        width: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
        }}
      >
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          color: Colors.GREY,
          marginTop: 20,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          color: Colors.GREY,
          marginTop: 20,
        }}
      >
        You've been missed !
      </Text>

      {/* Email Entry Section */}

      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          Email
        </Text>
        <TextInput onChangeText={(value)=>setEmail(value)}
          style={styles.input}
          placeholder="Enter Your Email"
        ></TextInput>
      </View>

      {/* Password Entry Section */}

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          Password
        </Text>
        <TextInput onChangeText={(value)=>setPassword(value)}
          style={styles.input}
          placeholder="Enter Your Password"
          secureTextEntry={true}
        ></TextInput>
      </View>

      {/* Sign In Button */}

      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.BLACK,
          borderRadius: 20,
          alignItems: "center",
          marginTop: "60%",
          height:60
        }}
        onPress={onSignIn}
      >
        <Text
          style={{
            color: Colors.White,
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>

      {/* Create Account Button */}

      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.White,
          borderWidth: 1,
          borderRadius: 20,
          alignItems: "center",
          marginTop: "5%",
          height:60
        }}
        onPress={() => {router.replace("auth/sign-up")}}
      >
        <Text
          style={{
            color: Colors.BLACK,
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          Create New Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    padding: 15,
    marginTop: 10,
    borderRadius: 20,
    height: 60,
    borderWidth: 1,
    borderColor: Colors.GREY,
  },
});
