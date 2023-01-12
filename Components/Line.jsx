import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Line = () => {
  return <View style={Styles.line}></View>;
};

export default Line;

const Styles = StyleSheet.create({
  line: {
    width: 80,
    height: 2,
    backgroundColor: "white",
  },
});
