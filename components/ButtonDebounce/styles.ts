import { StyleSheet } from "react-native";
import { screenWidth } from "../../constants/Layout";

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontFamily: "Helvetica",
    fontSize: 16,
    fontWeight: "bold"
  },
  buttonContainer: {
    backgroundColor: Colors.redPink,
    borderRadius: 10,
    marginTop: 20,
    height: 50,
    width: 0.8 * screenWidth,
    alignSelf: "stretch"
  }
});

export default styles;
