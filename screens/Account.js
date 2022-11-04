import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as ImagePicker from "expo-image-picker";
import axios from 'axios';
import Ionicons from "@expo/vector-icons/Ionicons";
const Account = () => {
    const [image, setImage] = React.useState({
        url: "",
        public_id:""
    });
    const [uploadImage, setuploadImage] = React.useState("")
    const handleUpload = async () => {
 

          
     
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        console.log(result);

        if (result.cancelled===true) {
          return;
        }
        let base64Image = `data:image/jpg:base46${result.base64}`;
        setuploadImage(base64Image)
        console.log(base64Image)
        const {image} = await axios.post(
          `https://firstauth.azurewebsites.net/auth/upload`,
          {
            image: base64Image,
          }
        );
        console.log(image.data)
        console.log(image, "gggg");
        
    
    
      };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <View>
        {image && image.url ? (
          <Image source={{uri: image.url}} style={{width: 200, height: 200}} />
        ) : uploadImage ? (
          <Image
            source={{uri: uploadImage}}
            style={{width: 200, height: 200}}
          />
        ) : (
          <TouchableOpacity onPress={() => handleUpload()}>
            <Ionicons
              name="camera"
              size={24}
              color="black"
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
        )}

        {image && image.url ? (
          <TouchableOpacity onPress={() => handleUpload()}>
            <Ionicons
              name="camera"
              size={24}
              color="black"
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

export default Account