import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
const Login = () => {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  // Log IN
  const login = async () => {
    console.log("log");
    try {
    
      const data = await axios.post("http://10.0.2.2:3001/auth/login", {
        email,
        password,
      });
      console.log('====================================');
      console.log("log1");
      console.log('====================================');
      console.log('====================================');
      console.log(data,"data");
      console.log('====================================');


      
    } catch (error) {
      console.log(error,"error");
      
    }
    
  }







 

  return (
    
    <View style={styles.loginView}>
      <View style={styles.rectangleView} />

      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Image
        style={styles.rectangleIcon1}
        resizeMode="cover"
        source={require("../assets/rectangle-131.png")}
      />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={styles.salutStevenText}>
        <Text style={styles.welcome}>
          welcome
          {"\n"}
        </Text>
        <Text style={styles.Back}>Back</Text>
      </Text>
      {
        // TextInput for email and password
      }

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <TextInput
          style={{
            position: "absolute",
            top: 400,
            paddingLeft: -10,
            left: 30,

            paddingLeft: 40,
            width: 300,
            height: 50,
            borderRadius: 25,
            backgroundColor: "#ccbee3",

            borderStyle: "dashed",
            borderColor: "#ccbee3",
            borderWidth: 2,
            overflow: "hidden",
          }}
          placeholder="Email"
          onChangeText={text => setemail(text)}
          value={email}
          keyboardType="email-address"
        />
        <Ionicons
          name="mail"
          size={26}
          style={{
            position: "absolute",
            top: 410,
            left: 40,
          }}
          color={"#fff"}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 80,
        }}
      >
        <TextInput
          style={{
            position: "absolute",
            top: 400,

            left: 30,

            elevation: 5,
            paddingLeft: 40,
            width: 300,
            height: 50,
            borderRadius: 25,
            backgroundColor: "#ccbee3",

            borderStyle: "dashed",
            borderColor: "#ccbee3",
            borderWidth: 2,
            overflow: "hidden",
          }}
          placeholder="Password"
          onChangeText={text => setpassword(text)}
          value={password}
          secureTextEntry={true}
          autoComplete="password"
        />
        <Ionicons
          name="lock-closed"
          size={26}
          style={{
            position: "absolute",
            top: 410,
            left: 40,
          }}
          color={"#fff"}
        />
      </View>
      <TouchableOpacity
        onPress={login}
        style={{
          position: "absolute",
          shadowColor: "#000",
          shadowOffset: {
            width: 4,
            height: 6,
          },

          shadowOpacity: 6,
          shadowRadius: 2,
          elevation: 8,

          top: 570,

          marginHorizontal: "15%",
          borderRadius: 38,
          backgroundColor: "#ccbee3",
          borderStyle: "solid",
          borderColor: "#fff",
          borderWidth: 2,
          overflow: "hidden",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: 250,
          height: 50,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Log IN
        </Text>
      </TouchableOpacity>
      <View
        style={{
          position: "absolute",
          top: 640,
          marginHorizontal: "25%",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#000",
            fontSize: 15,
          }}
        >
          Don't have an account?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: "#000",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            {" "}
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 45,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    width: 375,
    height: 812,
  },
  emailText: {
    position: "absolute",
    top: 442,
    left: 62,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#ccbee3",
    textAlign: "left",
  },
  motDePasse: {
    position: "absolute",
    top: 540,
    left: 62,
    fontSize: 14,
    fontFamily: "SF Pro Rounded",
    color: "#ccbee3",
    textAlign: "left",
  },
  vectorIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 397,
  },
  rectangleIcon: {
    position: "absolute",
    top: -6,
    left: 232.79,
    width: 492.58,
    height: 485.1,
    display: "none",
  },
  rectangleIcon1: {
    position: "absolute",
    top: 14.86,
    left: 68.1,
    width: 419.69,
    height: 443.09,
  },
  vectorIcon1: {
    position: "absolute",
    height: "2.94%",
    width: "9.17%",
    top: "8.62%",
    right: "76.97%",
    bottom: "88.44%",
    left: "13.87%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  salutText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  Back: {
    margin: 0,
  },
  salutStevenText: {
    position: "absolute",
    top: 155,
    left: 52,
    fontSize: 30,
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    top: 677,
    left: 62,
    borderRadius: 38,
    shadowColor: "#b9abd2",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 270,
    height: 55,
  },
  sinscrireText: {
    position: "absolute",
    top: 694,
    left: 159,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
  },

  lineView1: {
    position: "absolute",
    top: 499.5,
    left: 61.5,
    borderStyle: "solid",
    borderColor: "#ccbee3",
    borderTopWidth: 1,
    width: 271,
    height: 1,
  },
  icons8SignMail1: {
    position: "absolute",
    top: 468,
    left: 62,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  icons8Key1: {
    position: "absolute",
    top: 566,
    left: 60,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default Login;
