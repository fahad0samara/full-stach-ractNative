import {View, Text, TouchableOpacity, Image} from "react-native";
import React, {useState} from "react";
import {useLogIN} from "../ContextLog";
import * as Progress from "react-native-progress";
import { useEffect } from "react";
import axios from "axios";
const Setting = () => {
  const {setLog, profile} = useLogIN();
  const [loading, setloading] = useState();


  

  console.log("====================================");
  console.log(profile, "ggggggggg");
  console.log("====================================");

  // sigh out
  const sighOut = () => {
            // "https://firstauth.azurewebsites.net/auth/signout",
 

  




  useEffect(() => {
    setloading(true);

    setTimeout(() => {
      setloading(false);
    }, 4000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {
        // waite the image loading from sever
      }
      {loading ? (
        <Progress.CircleSnail
          color={["red", "green", "blue"]}
          size={30}
          thickness={5}

       
        />
      ) : (
        <Image
          source={{
            // waite the image loading from sever
            uri: profile.image.url,
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: "#745f9a",
          }}
        />
      )}

      <TouchableOpacity
        style={{
          backgroundColor: "red",
        }}
        onPress={sighOut}
      
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
