import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
// import HomeScreen from "../screens/HomeScreen";
import LinkingConfiguration from "./LinkingConfiguration";
import BodyScreen from "../screens/BodyScreen";
import GenWorkoutsScreen from "../screens/GenWorkoutsScreen";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={BodyScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GenWorkouts"
        component={GenWorkoutsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
