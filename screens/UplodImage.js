import React, {useState} from "react";
import {View, StyleSheet, TouchableOpacity, Text, Image} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {StackActions} from "@react-navigation/native";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import * as Progress from "react-native-progress";
import { useLogIN } from "../ContextLog";
const UplodImage = ({ route }) => {
  const {setLog,profile, setProfile} = useLogIN();
  const {token} = route.params;
  const [profileImage, setProfileImage] = useState("");
  const [progress, setProgress] = useState(0);

  const [loading, isLoading] = useState();

  const navigation = useNavigation(false);

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
      isLoading(true);

      const res = await axios.post(
        "https://firstauth.azurewebsites.net/auth/upload",

        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            authorization: `JWT ${token}`,
          },
          onUploadProgress: ({loaded, total}) => {
            console.log(loaded / total);
            setProgress(loaded / total);
          },
        }
      );

      console.log(res.data);
      setProfile(res.data.mango);
      setProfile(res.data.post);
      console.log('====================================');
      console.log(res.data.post);
      console.log('====================================');



      

      isLoading(false);
      setProfileImage("");
      setProgress(0);
      

     
      navigation.dispatch(StackActions.replace("TabNav"));
    } catch (error) {
      console.log(error.data);
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          {
            // set the name
          }
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            welcome
     
          </Text>

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
          {profileImage ? (
            <TouchableOpacity
              onPress={uploadProfileImage}
              style={[
                styles.skip,
                {
                  backgroundColor: "#2e64e5",
                  marginTop: 20,
                  marginLeft: 20,
                  width: "100%",
                  alignItems: "center",
                },
              ]}
            >
              <Text>
                {loading ? (
                  <Progress.CircleSnail
                    color={["red", "green", "blue"]}
                    size={30}
                    thickness={5}
                    progress={progress}
                  />
                ) : (
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    Upload
                  </Text>
                )}
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
   
    backgroundColor: "#ccbee3",
    
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
