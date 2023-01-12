import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Styles from "../Styles";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const Home = ({ navigation }) => {
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <FontAwesome5 name="user-circle" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.body}>
          <View style={Styles.post}>
            <View style={Styles.postHeader}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  // source={require("./assets/images/avator.png")}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQOh_K0NeSH57rb3sZMuJ1XjVOgFVa2tRRdg&usqp=CAU",
                  }}
                  style={Styles.avtorImg}
                />
                <View style={Styles.postHeaderText}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Code Ninja
                  </Text>
                  <Text style={Styles.timeText}>3 hour ago</Text>
                </View>
              </View>
              <Entypo name="dots-three-vertical" size={20} color="black" />
            </View>
            <Text style={Styles.postText}>
              မကွေးတိုင်း၊ မြိုင်မြို့နယ်တွင် တွေ့ရှိရသော ပရိုင်းမိတ်များ၏
              မေးရိုးအပိုင်းအစများအရ မြန်မာနိုင်ငံ၏ သမိုင်းကြောင်းသည် လွန်ခဲ့သော
              နှစ်သန်းပေါင်း ၄ဝ က စတင်ခဲ့သည်ဟု ဆိုရမည်ဖြစ်သည်။ ထို့အတူ
              ပုံတောင်နယ်တွင် တွေ့ရသဖြင့် ပုံတောင်ဂျီးယား(Pondaungia)ဟု
              အမည်ပေးထားသော တွေ့ရှိချက်နှင့် မိုးကောင်းရွာအနီးတွင် တွေ့ရှိသဖြင့်
              ... See more
            </Text>
          </View>
          <View style={Styles.post}>
            <View style={Styles.postHeader}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  // source={require("./assets/images/avator.png")}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQOh_K0NeSH57rb3sZMuJ1XjVOgFVa2tRRdg&usqp=CAU",
                  }}
                  style={Styles.avtorImg}
                />
                <View style={Styles.postHeaderText}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Code Ninja
                  </Text>
                  <Text style={Styles.timeText}>3 hour ago</Text>
                </View>
              </View>
              <Entypo name="dots-three-vertical" size={20} color="black" />
            </View>
            <Text style={Styles.postText}>
              မကွေးတိုင်း၊ မြိုင်မြို့နယ်တွင် တွေ့ရှိရသော ပရိုင်းမိတ်များ၏
              မေးရိုးအပိုင်းအစများအရ မြန်မာနိုင်ငံ၏ သမိုင်းကြောင်းသည် လွန်ခဲ့သော
              နှစ်သန်းပေါင်း ၄ဝ က စတင်ခဲ့သည်ဟု ဆိုရမည်ဖြစ်သည်။ ထို့အတူ
              ပုံတောင်နယ်တွင် တွေ့ရသဖြင့် ပုံတောင်ဂျီးယား(Pondaungia)ဟု
              အမည်ပေးထားသော တွေ့ရှိချက်နှင့် မိုးကောင်းရွာအနီးတွင် တွေ့ရှိသဖြင့်
              ... See more
            </Text>
          </View>
          <View style={Styles.post}>
            <View style={Styles.postHeader}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  // source={require("./assets/images/avator.png")}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQOh_K0NeSH57rb3sZMuJ1XjVOgFVa2tRRdg&usqp=CAU",
                  }}
                  style={Styles.avtorImg}
                />
                <View style={Styles.postHeaderText}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Code Ninja
                  </Text>
                  <Text style={Styles.timeText}>3 hour ago</Text>
                </View>
              </View>
              <Entypo name="dots-three-vertical" size={20} color="black" />
            </View>
            <Text style={Styles.postText}>
              မကွေးတိုင်း၊ မြိုင်မြို့နယ်တွင် တွေ့ရှိရသော ပရိုင်းမိတ်များ၏
              မေးရိုးအပိုင်းအစများအရ မြန်မာနိုင်ငံ၏ သမိုင်းကြောင်းသည် လွန်ခဲ့သော
              နှစ်သန်းပေါင်း ၄ဝ က စတင်ခဲ့သည်ဟု ဆိုရမည်ဖြစ်သည်။ ထို့အတူ
              ပုံတောင်နယ်တွင် တွေ့ရသဖြင့် ပုံတောင်ဂျီးယား(Pondaungia)ဟု
              အမည်ပေးထားသော တွေ့ရှိချက်နှင့် မိုးကောင်းရွာအနီးတွင် တွေ့ရှိသဖြင့်
              ... See more
            </Text>
          </View>
          <View style={Styles.post}>
            <View style={Styles.postHeader}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  // source={require("./assets/images/avator.png")}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQOh_K0NeSH57rb3sZMuJ1XjVOgFVa2tRRdg&usqp=CAU",
                  }}
                  style={Styles.avtorImg}
                />
                <View style={Styles.postHeaderText}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Code Ninja
                  </Text>
                  <Text style={Styles.timeText}>3 hour ago</Text>
                </View>
              </View>
              <Entypo name="dots-three-vertical" size={20} color="black" />
            </View>
            <Text style={Styles.postText}>
              မကွေးတိုင်း၊ မြိုင်မြို့နယ်တွင် တွေ့ရှိရသော ပရိုင်းမိတ်များ၏
              မေးရိုးအပိုင်းအစများအရ မြန်မာနိုင်ငံ၏ သမိုင်းကြောင်းသည် လွန်ခဲ့သော
              နှစ်သန်းပေါင်း ၄ဝ က စတင်ခဲ့သည်ဟု ဆိုရမည်ဖြစ်သည်။ ထို့အတူ
              ပုံတောင်နယ်တွင် တွေ့ရသဖြင့် ပုံတောင်ဂျီးယား(Pondaungia)ဟု
              အမည်ပေးထားသော တွေ့ရှိချက်နှင့် မိုးကောင်းရွာအနီးတွင် တွေ့ရှိသဖြင့်
              ... See more
            </Text>
          </View>
          <TouchableOpacity
            style={Styles.btnStyle}
            onPress={() => navigation.navigate("NextPage1")}
          >
            <Text style={Styles.btnStyleText}>Next</Text>
          </TouchableOpacity>
          {/* <Button
            style={Styles.btnStyle}
            title="Next"
            onPress={() => navigation.navigate("NextPage1")}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
