import React, {useState} from "react";
import {View, StyleSheet, TouchableOpacity, Text, Image} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {StackActions} from "@react-navigation/native";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import * as Progress from "react-native-progress";
const UplodImage = ({route}) => {
  const {token} = route.params;
  const [profileImage, setProfileImage] = useState("");
  const [progress, setProgress] = useState(0);

  const [loading, isLoading] = useState();

  const navigation = useNavigation();

  const openImageLibrary = async () => {
    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === "granted") {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      if (!response.cancelled) {
        setProfileImage(response.uri);
      }
    }
  };

  const uploadProfileImage = async () => {
    const formData = new FormData();
    formData.append("image", {
      name: new Date() + "_image",
      uri: profileImage,
      type: "image/jpg",
    });

    try {
      
      const res = await axios.post(
        "https://firstauth.azurewebsites.net/auth/upload",

        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            authorization: `JWT ${token}`,
          },
          onUploadProgress: ({ loaded, total }) => {
            console.log(loaded / total);
            setProgress(loaded / total);


          }

        }
            
            
            
            
            
            
            
            
             
          
        
      );
    
      console.log(res.data);
      navigation.dispatch(StackActions.replace("Home"));
    } catch (error) {
      
      console.log(error.data);
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  return progress  ? (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Progress.Circle
        size={100}
        indeterminate={true}
        color="#745f9a"
        borderWidth={0}
        thickness={
          4 // The thickness of the circle
        }
      />

     
    </View>
  ) : (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={openImageLibrary}
          style={styles.uploadBtnContainer}
        >
          {profileImage ? (
            <Image
              source={{uri: profileImage}}
              style={{width: "100%", height: "100%"}}
            />
          ) : (
            <Text style={styles.uploadBtn}>Upload Profile Image</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.skip}>Skip</Text>
        {profileImage ? (
          <Text
            onPress={uploadProfileImage}
            style={[
              styles.skip,
              {backgroundColor: "red", color: "white", borderRadius: 8},
            ]}
          >
            Upload
          </Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderRadius: 125 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 1,
    overflow: "hidden",
  },
  uploadBtn: {
    textAlign: "center",
    fontSize: 16,
    opacity: 0.3,
    fontWeight: "bold",
  },
  skip: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    opacity: 0.5,
  },
});

export default UplodImage;
