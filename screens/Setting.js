import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useLogIN } from '../ContextLog';
import * as Progress from "react-native-progress";
const Setting = () => {
  const { setLog, profile } = useLogIN();
  const [loading,setloading]=useState()
   
  
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>{profile.name}</Text>
      <Text>{profile.email}</Text>
      {
        // waite the image loading from sever
      }



      <Image
        source={{
          // waite the image loading from sever
          uri: profile.image.url
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          borderWidth: 2,
          borderColor: "#745f9a",
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "red",
        }}
        onPress={() => setLog(false)}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Setting