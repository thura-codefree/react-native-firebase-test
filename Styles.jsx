import { StyleSheet, StatusBar } from "react-native";
const Styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
    flex: 1,
    flexDirection: "column",
    marginTop: StatusBar.currentHeight,
  },
  lottieView: {
    width: "50%",
    alignSelf: "center",
  },
  lottieLogo: {
    borderRadius: 70,
    backgroundColor: "red",
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "yellow",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    elevation: 10,
  },
  h1: {
    fontSize: 25,
    color: "blue",
    fontWeight: "bold",
  },
  body: {
    flex: 1,
  },
  post: {
    elevation: 5,
    padding: "3%",
    margin: 5,
    backgroundColor: "white",
    borderRadius: 7,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avtorImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: "contain",
  },
  postHeaderText: {
    marginLeft: "5%",
  },
  timeText: {
    color: "gray",
  },
  postText: {
    paddingVertical: "5%",
    fontSize: 16,
  },
  btnStyle: {
    width: 300,
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "green",
  },
  btnStyleText: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
  },
});

export default Styles;
