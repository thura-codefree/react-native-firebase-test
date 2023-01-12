import React, { useRef, useState } from "react";
import Line from "../Components/Line";
import Checkbox from "../Components/Checkbox";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Lottie from "lottie-react-native";
import Styles from "../Styles";
import { Text, StatusBar, ImageBackground, Alert, View } from "react-native";
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

import { auth } from "../config/firebase-config";
import {signInWithEmailAndPassword} from 'firebase/auth'
import Toast from "react-native-root-toast";

const LoginForm = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const login = () => {
    if (email == "" && pass == "") {
      Alert.alert("Please enter email and password");
    } else if (email == "") {
      Alert.alert("Please fill email address");
    } else if (pass == "") {
      Alert.alert("Please fill password");
    } else if (pass.length < 6) {
      Alert.alert("Password must be 6 digit");
    } else {
      // Alert.alert(email + "\n" + pass);

      signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          setEmail("");
          setPass("");
          Toast.show("Login Success", {
            duration: Toast.durations.LONG,
            position: Toast.positions.CENTER,
            backgroundColor: "blue",
            textColor: "white",
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
          });
          navigation.navigate("Home");
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
        <Center w="100%" mt="5" pt="9">
          <View style={Styles.lottieLogo}>
            <Lottie
              source={require("../assets/Lotteis/bee_logo.json")}
              autoPlay
              loop
            />
          </View>
          {/* <Image
            size={120}
            alt="fallback text"
            borderRadius={100}
            source={{
            uri: "https://static.vecteezy.com/system/resources/previews/000/459/845/non_2x/dark-beer-and-hop-background-vector.jpg",
            }}
            source={require("../assets/Lotteis/91044-cheers.json")}
          /> */}
          <Box w="100%" maxW="290">
            <Center>
              <Text>Welcome to</Text>
              <Heading
                style={{
                  fontFamily: "BerkshireSwash",
                  fontSize: 30,
                }}
                className="font-semibold tracking-wide"
              >
                Bee Beer Club
              </Heading>
              <Text>For free beer, please login</Text>
              <Heading
                mt="4"
                p="2"
                color="blue.600"
                fontWeight="bold"
                size="md"
              >
                Hey, hello!{" "}
                <MaterialCommunityIcons
                  className="p-6"
                  name="hand-wave"
                  size={30}
                  color="green"
                />
              </Heading>
            </Center>

            <VStack space={3} mt="5">
              <FormControl>
                <Input
                  value={email}
                  onChangeText={(emails) => setEmail(emails)}
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
                <Input
                  value={pass}
                  onChangeText={(passes) => {
                    setPass(passes);
                  }}
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

              <Center flexDir="row" justifyContent="flex-start">
                <Checkbox color="yellow"></Checkbox>
                <Text className="ml-2">Remember me</Text>
                <Text className="ml-7 text-blue-500">Forgot password?</Text>
              </Center>

              <Button
                // style={{ elevation: 5 }}
                shadow={5}
                borderRadius={50}
                colorScheme="indigo"
                // onPress={() => navigation.navigate("Lottie")}
                onPress={() => {
                  login();
                }}
              >
                <Text className="text-base text-white">Login</Text>
              </Button>
              <Center flexDir="row" justifyItems="center">
                <Text className="mr-5">Don't have an account?</Text>
                <Button
                  className="rounded-lg"
                  onPress={() => navigation.navigate("SignUpScreen")}
                >
                  Register
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
export default LoginForm;
