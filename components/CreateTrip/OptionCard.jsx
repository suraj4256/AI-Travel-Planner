import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function OptionCard({option,selectedParameter}) {
  return (
    <View style={[{
        backgroundColor:Colors.LIGHT_GRAY,
        padding:25,
        borderRadius:15,
    },selectedParameter==option&&{borderWidth:2},option?.type&&{alignItems:'center'}]}>
        <View>
            <Text style={{
                fontSize:20,
                fontFamily:'outfit-bold',
                color:Colors.BLACK
            }}>
               {option?.traveller}{option?.type}
            </Text>
            <Text style={{
                fontSize:17,
                fontFamily:'outfit',
                color:Colors.GREY,

            }}>
               {option?.description}
            </Text>
        </View>

    </View>
  )
}