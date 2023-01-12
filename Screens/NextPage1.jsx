import { Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Styles from "../Styles";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const NextPage1 = ({ navigation }) => {
  const [name, setName] = useState("");
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Ionicons
            style={{ marginRight: 5 }}
            name="logo-reddit"
            size={50}
            color="black"
          />
          <Text className="font-extrabold text-2xl text-orange-600 border-dashed border-2 border-indigo-600">
            Blue Hole
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <FontAwesome
            style={{ marginRight: 15 }}
            name="search"
            size={30}
            color="black"
          />
          <TouchableOpacity onPress={() => navigation.navigate("LoginForm")}>
            <FontAwesome5 name="user-circle" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text className="drop-shadow-lg font-extrabold text-2xl text-orange-600 mx-auto">
        {name}
      </Text>
      <TouchableOpacity
        style={{ elevation: 9 }}
        className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-50 mx-auto"
        onPress={() => {
          name === "Kyaw Thura" ? setName("") : setName("Kyaw Thura");
        }}
      >
        <Text className="font-extrabold text-2xl text-white ">
          Click for Your Name
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ elevation: 9 }}
        className=" bg-slate-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-44 mx-auto"
        onPress={() => navigation.navigate("Home")}
      >
        <Text className="font-extrabold text-2xl text-white text-center ">
          Previous
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default NextPage1;
