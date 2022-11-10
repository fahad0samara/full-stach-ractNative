import {View, Text, TouchableOpacity, Image} from "react-native";
import React, {useState} from "react";
import {useLogIN} from "../ContextLog";
import * as Progress from "react-native-progress";
import {useEffect} from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Setting = () => {
  const {setLog, profile, setLoading} = useLogIN();
  const [loading, setloading] = useState();

  const logout = async () => {
    setloading(true);
    try {
      const response = await axios.get(
        "https://firstauth.azurewebsites.net/auth/sigh-out",
        {
          headers: {
            Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
          },
        }
      );

      await AsyncStorage.removeItem("token");
      setloading(false);
      setLog(false);
      console.log("====================================");
      console.log(response.data);
      console.log("====================================");
    } catch (error) {
      setloading(false);
      console.log("====================================");
      console.log(error.response);
      console.log("====================================");
    }
  };

  // sigh out
  const signOut = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        const response = await axios.get(
          "https://firstauth.azurewebsites.net/auth/sigh-out",
          {
            headers: {
              Authorization: `JWT ${token}`,
            },
          }
        );
        await AsyncStorage.removeItem("token");
        setLog(false);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

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
        onPress={() => logout()}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
