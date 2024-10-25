import { View, Text, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { SelectTravellerList } from "./../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectTraveller() {
  const router = useRouter();

  const navigation = useNavigation();

  const [selectedTraveller, setSelectedTraveller] = useState();

  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Select Traveller",
    });
  }, []);

  // Whenever we press traveller option,selected traveller gets updated and as selected traveller gets updated, trip data of the context api also gets updated with a new obj -> traveller_info.

  useEffect(() => {
    setTripData({ ...tripData, traveller_info: selectedTraveller });
  }, [selectedTraveller]);

  // To check if trip data is getting updated on press
  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 80,
        backgroundColor: Colors.White,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily: "outfit-bold",
          marginTop: 20,
        }}
      >
        Who is Travelling
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 23,
            fontFamily: "outfit-bold",
          }}
        >
          Choose your Travellers
        </Text>
        {/* Flatlist is used to list the travellers option - Flatlist iterates over the array that has been provioided as a data */}
        <FlatList
          data={SelectTravellerList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedTraveller(item);
              }}
              style={{
                marginVertical: 10,
              }}
            >
              <OptionCard selectedParameter={selectedTraveller} option={item} />
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          style={{
            padding: 20,
            borderRadius: 15,
            backgroundColor: Colors.BLACK,
            marginTop: "35%",
            alignItems: "center",
          }}
          onPress={() => {
            if (!selectedTraveller) {
              ToastAndroid.show("Please select traveller", ToastAndroid.LONG);
            } else {
              router.push("/create-trip/travel-dates");
            }
          }}
        >
          <Text
            style={{
              color: Colors.White,
              fontSize: 20,
              fontFamily: "outfit-medium",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
