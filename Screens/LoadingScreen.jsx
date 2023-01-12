import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { auth } from "../config/firebase-config";

const LodingScreen = ({ navigation }) => {
  const [showLoading, setShowLoading] = useState(true);
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log(user.email);
      setShowLoading(false);
      // navigation.navigate("Home");
      navigation.reset({ index: 0, routes: [{ name: "Home" }] });
    } else {
      console.log("No User");
      setShowLoading(false);
      // navigation.navigate("LoginForm");
      navigation.reset({ index: 0, routes: [{ name: "LoginForm" }] });
    }
  });
  return (
    <View className="bg-red-200 flex-1 justify-center items-center">
      <ActivityIndicator animating={showLoading} size={80} color="#00ff00" />
      <Text className="text-base">Loding...</Text>
    </View>
  );
};

export default LodingScreen;

const Styles = StyleSheet.create({});
