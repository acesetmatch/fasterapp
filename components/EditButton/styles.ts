import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  button: {
    width: 225,
    height: 50,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderColor: Colors.darkGrey,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  buttonText: {
    fontFamily: "System"
  }
});

export default styles;
