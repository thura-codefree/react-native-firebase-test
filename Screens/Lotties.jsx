import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react-native";
import LoginForm from "./LoginScreen";
import Styles from "../Styles";

const Lotties = ({ navigation }) => {
  // const [openLogin, setOpenLogin] = useState(false);
  // useEffect(() => {
  //   setInterval(() => {
  //     setOpenLogin(true);
  //   }, 5000);
  //   openLogin && navigation.navigate(LoginForm);
  // });
  return (
    <View style={Styles.container} className="bg-red-700">
      <Lottie
        style={Styles.lottieView}
        className="mt-10"
        source={require("../assets/Lotteis/2023.json")}
        autoPlay
        loop
      />
      <Lottie
        style={Styles.lottieView}
        className="mt-10"
        source={require("../assets/Lotteis/91044-cheers.json")}
        autoPlay
        loop
      />
    </View>
  );
};

export default Lotties;

const styles = StyleSheet.create({});
