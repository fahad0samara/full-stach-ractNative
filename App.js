const Stack = createNativeStackNavigator();
import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Connect from "./screens/Connect";
import TigerJewelry from "./screens/TigerJewelry";
import Login from "./screens/Login";
import Home from "./screens/Home";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {View, Text, Pressable, TouchableOpacity} from "react-native";

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
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="TigerJewelry"
              component={TigerJewelry}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Connect"
              component={Connect}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
