import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function OptionCard({option,selectedTraveller}) {
  return (
    <View style={[{
        backgroundColor:Colors.LIGHT_GRAY,
        padding:25,
        borderRadius:15,
    },selectedTraveller==option&&{borderWidth:2}]}>
        <View>
            <Text style={{
                fontSize:20,
                fontFamily:'outfit-bold',
                color:Colors.BLACK
            }}>
               {option?.traveller}
            </Text>
            <Text style={{
                fontSize:17,
                fontFamily:'outfit',
                color:Colors.GREY
            }}>
               {option?.description}
            </Text>
        </View>

    </View>
  )
}