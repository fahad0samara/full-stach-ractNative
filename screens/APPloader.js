import {View, Text, StyleSheet} from "react-native";
import React from 'react'
import LottieView from 'lottie-react-native';
const APPloader = () => {
    return (
      <View style={[StyleSheet.absoluteFillObject, styles.container]}>
        <LottieView source={require("../assets/loaderA.json")} autoPlay loop />
       
      </View>
    );
}

  
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.9)',
    zIndex: 1
    
        

    }

})

export default APPloader