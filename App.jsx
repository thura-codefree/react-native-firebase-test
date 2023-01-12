import { LogBox } from "react-native";
LogBox.ignoreLogs(["EventEmitter.removeListener"]);
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "./Screens/LoadingScreen";
import LoginForm from "./Screens/LoginScreen.jsx";
import Profile from "./Screens/Profile";
import Home from "./Screens/Home.jsx";
import NextPage1 from "./Screens/NextPage1.jsx";
import SignUpScreen from "./Screens/SignUpScreen.jsx";
import Lotties from "./Screens/Lotties.jsx";
import { useFonts } from "expo-font";
import { RootSiblingParent } from "react-native-root-siblings";

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    BerkshireSwash: require("./assets/fonts/BerkshireSwash-Regular.ttf"),
  });
  if (!fontsLoaded) return null;
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoadingScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Home"
            options={{ title: "New Feed" }}
            component={Home}
          />
          <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="NextPage1" component={NextPage1} />
          <Stack.Screen name="LoginForm" component={LoginForm} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="Lotties" component={Lotties} />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
};
export default App;
