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

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const SplashScreen = () => {
    return <Connect />;
  };
  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <LogCheck>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
              />

              <Stack.Screen
                name="Connect"
                component={Connect}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="UplodImage"
                component={UplodImage}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Account"
                component={Account}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          ) : (
            <SplashScreen />
          )}
        </NavigationContainer>
      </LogCheck>
    </>
  );
};
export default App;
