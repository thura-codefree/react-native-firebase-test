import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";

const Checkbox = (prop) => {
  const [size, setSize] = useState(20);
  return (
    <TouchableOpacity
      onPress={() => {
        size ? setSize(0) : setSize(20);
      }}
    >
      <Entypo
        style={Styles.checkBox}
        name="check"
        size={size}
        color={prop.color}
      />
    </TouchableOpacity>
  );
};

export default Checkbox;

const Styles = StyleSheet.create({
  checkBox: {
    borderWidth: 1,
    borderColor: "white",
    borderStyle: "solid",
    backgroundColor: "green",
    padding: 5,
    marginLeft: 10,
    borderRadius: 10,
    width: 30,
    height: 30,
  },
});
