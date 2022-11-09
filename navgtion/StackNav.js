import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();



import UplodImage from "../screens/UplodImage";
import Login from '../screens/Login';
import Home from '../screens/Home'; 
import Register from '../screens/Register';
import Account from '../screens/Account';
import {useLogIN} from "../ContextLog";
import TabNav from './TabNav';

const StackNav = () => {
 const {log} = useLogIN();
  return log ? (
    <TabNav />
  ) : (
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
        name="UplodImage"
        component={UplodImage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default StackNav;