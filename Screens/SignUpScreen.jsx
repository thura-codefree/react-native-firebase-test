import React, { useState } from "react";
import Checkbox from "../Components/Checkbox";
import Line from "../Components/Line";
import Lottie from "lottie-react-native";
import Styles from "../Styles";
import { Text, StatusBar, ImageBackground, View, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { auth } from "../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
  Image,
  Icon,
  Pressable,
} from "native-base";

const SignUpScreen = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [emailR, setEmailR] = useState("");
  const [passR, setPassR] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const signup = () => {
    if (emailR == "") {
      Alert.alert("Please enter email or phone");
    } else if (passR == "") {
      Alert.alert("Please enter password");
    } else if (confirmPass == "") {
      Alert.alert("Please enter confirm pass");
    } else if (passR !== confirmPass) {
      Alert.alert("Do not match pas swords");
    } else if (passR.length < 6 || confirmPass.length < 6) {
      Alert.alert("Password must be 6 digit");
    } else {
      createUserWithEmailAndPassword(auth, emailR, passR)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user.email);
          Alert.alert(
            "Account Created Successfully " +
              "\n" +
              "Welcome" +
              "\n" +
              user.email +
              "\n" +
              "Please Login first"
          );
          navigation.navigate("LoginForm");
        })
        .catch((error) => alert(error));
    }
  };
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/originals/2c/cf/a2/2ccfa221ea3e4f392f65b2b2feb855d5.jpg",
        }}
        style={{ marginTop: StatusBar.currentHeight, flex: 1 }}
      >
        <Center w="100%" mt="10" pt="6">
          <View style={Styles.lottieLogo}>
            <Lottie
              source={require("../assets/Lotteis/bee_logo.json")}
              autoPlay
              loop
            />
          </View>
          <Box w="100%" maxW="290">
            <Center>
              <Text>Welcome to</Text>
              <Heading
                style={{
                  fontFamily: "BerkshireSwash",
                  fontSize: 30,
                }}
                className="font-semibold text-indigo-900 tracking-wide"
              >
                <Text className="text-yellow">Bee</Text> Beer Club
              </Heading>
              <Heading
                mt="1"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="bold"
                size="md"
              >
                Sign up to continue!
              </Heading>
            </Center>

            <VStack space={3} mt="5">
              <FormControl>
                {/* <FormControl.Label>
                <Text className="text-base text-blue-600">Email</Text>
              </FormControl.Label> */}
                <Input
                  onChangeText={(emaiR) => setEmailR(emaiR)}
                  className="text-base"
                  borderRadius={50}
                  shadow={3}
                  bgColor={"white"}
                  px="3"
                  w={{
                    base: "100%",
                    md: "25%",
                  }}
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="person" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  placeholder="Email or Phone No"
                />
              </FormControl>
              <FormControl>
                {/* <FormControl.Label>
                <Text className="text-base text-blue-600">Password</Text>
              </FormControl.Label> */}
                <Input
                  onChangeText={(pasR) => setPassR(pasR)}
                  className="text-base"
                  px={3}
                  shadow={3}
                  bgColor={"white"}
                  w={{
                    base: "100%",
                    md: "25%",
                  }}
                  borderRadius={50}
                  type={show ? "text" : "password"}
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon
                        as={
                          <MaterialIcons
                            name={show ? "visibility" : "visibility-off"}
                          />
                        }
                        size={5}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="lock-outline" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  placeholder="Password"
                />
              </FormControl>
              <FormControl>
                {/* <FormControl.Label>
                <Text className="text-base text-blue-600">
                  Confirm Password
                </Text>
              </FormControl.Label> */}
                <Input
                  onChangeText={(confirmP) => setConfirmPass(confirmP)}
                  shadow={3}
                  bgColor={"white"}
                  className="text-base"
                  borderRadius={50}
                  px={3}
                  w={{
                    base: "100%",
                    md: "25%",
                  }}
                  type={show ? "text" : "password"}
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon
                        as={
                          <MaterialIcons
                            name={show ? "visibility" : "visibility-off"}
                          />
                        }
                        size={5}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                  InputLeftElement={
                    <Icon
                      as={<MaterialCommunityIcons name="lock-check-outline" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  placeholder="Confirm Password"
                />
              </FormControl>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Checkbox color="white"></Checkbox>
                <Text className="ml-3 text-sm">
                  I accept the terms & conditions
                </Text>
              </View>

              <Button
                shadow={5}
                borderRadius={50}
                colorScheme="indigo"
                // onPress={() => navigation.navigate("Home")}
                onPress={() => signup()}
              >
                <Text className="text-base text-white">Sign up</Text>
              </Button>
              <Center flexDir="row" justifyItems="center">
                <Text className="mr-5">Already have an account?</Text>
                <Button
                  className="rounded-lg"
                  onPress={() => navigation.navigate("LoginForm")}
                >
                  Login
                </Button>
              </Center>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Line className="mr-4" />
                <Text>Or continue with</Text>
                <Line className="ml-4" />

                {/* <Checkbox
                  color="red"
                  style={{ backgroundColor: "blue" }}
                ></Checkbox>
                <Text>Remember Me</Text> */}
              </View>
              <Center
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <Button bgColor="white" shadow={5}>
                  <MaterialCommunityIcons
                    name="google"
                    size={30}
                    color="black"
                  />
                </Button>
                <Button bgColor="white" shadow={5}>
                  <MaterialCommunityIcons
                    name="apple"
                    size={30}
                    color="black"
                  />
                </Button>
                <Button bgColor="white" shadow={5}>
                  <MaterialCommunityIcons
                    name="facebook"
                    size={30}
                    color="black"
                  />
                </Button>
              </Center>
            </VStack>
          </Box>
        </Center>
      </ImageBackground>
    </NativeBaseProvider>
  );
};
export default SignUpScreen;
