const Stack = createNativeStackNavigator();

import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Connect from "./screens/Connect";

import Login from "./screens/Login";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Account from "./screens/Account";


import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {View, Text, Pressable, TouchableOpacity} from "react-native";
import LogCheck from "./ContextLog";
import UplodImage from "./screens/UplodImage";
import StackNav from "./navgtion/StackNav";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const SplashScreen = () => {
    return <Connect />;
  };
  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 5000);
  }, []);

  return (
    <>
      <LogCheck>
        <NavigationContainer>
          {hideSplashScreen ? (
         <StackNav/>
          ) : (
            <SplashScreen />
          )}
        </NavigationContainer>
      </LogCheck>
    </>
  );
};
export default App;
