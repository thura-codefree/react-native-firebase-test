import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Toast from "react-native-root-toast";
import { auth, db } from "../config/firebase-config";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

const Profile = ({ navigation }) => {
  // const userCollection = collection(db, "users");
  // const docRef = doc(db, "users", "thurasoft@gmail.com");
  const docRef = doc(db, "users", "Rov6xwN0MxlPdZ85VZMx");

  // WITH ASYNC AWAIT AND MAP FUNCTION (ARRAY OUTPUT ALL COLLOCTION DATA)
  // const fetchData = async () => {
  //   const data = await getDocs(userCollection);
  //   const userData = data.docs.map((doc) => doc.data());
  //   console.log(userData[1].name);
  // };

  // WITH FOREACH LOOP (OBJECT OUTPUT ALL COLLOCTION DATA)
  // const fetchData = () => {
  //   getDocs(userCollection).then((get) => {
  //     get.forEach((document) => {
  //       console.log(document.data());
  //     });
  //   });
  // };
  // GET A DOCUMENT IN COLLOCTIN (OBJECT OUTPUT ALL DOCUMENT DATA )
  const fetchData = () => {
    getDoc(docRef).then((doc) => {
      console.log(doc.id);
      console.log(doc.data().name);
    });
  };

  return (
    <View style={style.bg} className="bg-blue-700 flex-1 items-center">
      <Text className="pt-10 pb-10 text-white uppercase text-xl">Profile</Text>
      <View
        style={style.profileBox}
        className="bg-white relative p-4 w-3/4 rounded-xl z-10 flex items-center justify-center"
      >
        <AntDesign style={style.editIcon} name="edit" size={28} color="black" />
        <Image
          className="h-20 w-20 rounded-full mt-4"
          source={{
            uri: "https://source.boomplaymusic.com/group10/M00/02/15/62bc977c001e4a4e928d49db39ce8288_464_464.jpg",
          }}
        />
        <Text className="text-xl">Kyaw Thura</Text>
        <Text className="text-gray text-sm">{auth.currentUser.email}</Text>
      </View>

      <View className="bg-white w-full flex-1 -mt-14 justify-center  pl-14">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mt-20 mb-20">
            <View className="flex-row align-center items-center pb-4">
              <FontAwesome name="user-circle-o" size={24} color="blue" />
              <Text className="ml-8 text-lg">Kyaw Thura</Text>
            </View>
            <View className="flex-row align-center items-center ">
              <FontAwesome name="phone-square" size={24} color="blue" />
              <Text className="ml-8 text-lg">09-456 99 456 5</Text>
            </View>
            <View className="flex-row align-center items-center pt-4">
              <FontAwesome name="transgender-alt" size={24} color="blue" />
              <Text className="ml-8 text-lg">Female</Text>
            </View>
            <View className="flex-row align-center items-center pt-4">
              <FontAwesome name="home" size={24} color="blue" />
              <Text className="ml-8 text-lg">Yangon</Text>
            </View>
            <View className="flex-row align-center items-center pt-4">
              <FontAwesome name="birthday-cake" size={24} color="blue" />
              <Text className="ml-8 text-lg">30.11.2004</Text>
            </View>
            <View className="flex-row align-center items-center pt-4">
              <MaterialIcons name="work" size={24} color="blue" />
              <Text className="ml-8 text-lg">Developer</Text>
            </View>
            <View className="flex-row align-center items-center pt-4">
              <FontAwesome name="university" size={24} color="blue" />
              <Text className="ml-8 text-lg">Yangon West University</Text>
            </View>
            <View className="flex-row align-center items-center pt-4">
              <FontAwesome name="heart" size={24} color="blue" />
              <Text className="ml-8 text-lg">Single</Text>
            </View>
            <View className="flex-row align-center items-center pt-4">
              <MaterialIcons name="logout" size={24} color="blue" />
              <TouchableOpacity
                onPress={() => {
                  auth.signOut().then(() => {
                    Toast.show("Signout Success", {
                      duration: Toast.durations.SHORT,
                      position: Toast.positions.CENTER,
                      backgroundColor: "blue",
                      textColor: "white",
                      shadow: true,
                      animation: true,
                      hideOnPress: true,
                      delay: 0,
                    });
                  });
                  navigation.navigate("LoginForm");
                }}
              >
                <Text className="ml-8 text-lg">Sign Out</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  fetchData();
                }}
              >
                <Text className="ml-8 text-lg">Fetch Data</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;

const style = StyleSheet.create({
  bg: {
    marginTop: StatusBar.currentHeight,
  },
  profileBox: {
    elevation: 5,
  },
  editIcon: {
    position: "absolute",
    right: 20,
    top: 5,
  },
});
