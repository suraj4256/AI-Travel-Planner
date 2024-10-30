import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { Image } from "react-native-web";
import { CreateTripContext } from "../../context/CreateTripContext";
import { Travel_Generate_Prompt } from "../../constants/Options";
import { useRouter } from "expo-router";
import { chatSession } from "../../configs/GeminiConfig";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../configs/FirebaseConfig";

export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;
  useEffect(() => {
    GenerateTripResults();
  }, []);
  const GenerateTripResults = async () => {
    setLoading(true);
    console.log("Loading state before:", loading);
    if (!tripData) {
      console.error("tripData is undefined or null");
      setLoading(false);
      return; // Prevents further execution if tripData is not defined
    }
    const locationName = tripData?.locationInfo?.name || "Unknown Location";
    const noOfDays = tripData?.dateInfo?.noOfDays || "N/A"; // Default value if undefined
    const traveller =
      tripData?.traveller_info?.traveller || "Unknown Traveller";
    const budgetInfo = tripData?.budgetDetails?.type || "No Budget Info";

    const Final_Prompt = Travel_Generate_Prompt.replace(
      "{location}",
      locationName
    )
      .replace("{totalDays}", noOfDays)
      .replace("{totalNight}", noOfDays - 1) // Assuming total nights are the same as total days
      .replace("{traveller}", traveller)
      .replace("{budgetInfo}", budgetInfo)
      .replace("{totalDays}", noOfDays)
      .replace("{totalNight}", noOfDays - 1);

    console.log("Final Prompt:", Final_Prompt); // Log the final prompt for debugging
    try {
      const result = await chatSession.sendMessage(Final_Prompt);
      const tripResp = result.response.text();
      let cleanedData = tripResp.trim();
  // Remove ```json at the start and ``` at the end
      cleanedData = cleanedData.replace(/^```json\s*/, '').replace(/```$/, '');
      console.log(cleanedData);
  // Parse the cleaned JSON
      const parsed_TripData = JSON.parse(cleanedData);
      console.log(parsed_TripData);
      const docId = (Date.now()).toString();
      const tripRef = collection(db, "UserTrips");
      // setDoc is not giving any response.._result is used for future use if setDoc is provided to give response in any manner.
     await setDoc(doc(tripRef,docId), {
          userEmail: user.email,
          tripData: parsed_TripData
        });
        setLoading(false);
        console.log("Loading state after:", loading); // Still won't reflect the updated state immediately
        router.replace("(tabs)/mytrip");
    } catch (error) {
      console.log(chatSession);
      console.error("Error in chatSession.sendMessage:", error);
    } 
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 90,
        backgroundColor: Colors.White,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          textAlign: "center",
        }}
      >
        Please Wait...
      </Text>
    </View>
  );
}
