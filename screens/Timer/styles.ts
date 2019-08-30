import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { Screen } from "../../constants/Layout";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContent: {
    height: 50,
    width: Screen.width - 60,
    borderRadius: 30
  },
  button: {
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 45,
    marginLeft: 30,
    marginRight: 30
  },
  circularProgress: {
    marginTop: 20,
    transform: [{ scaleX: -1 }]
  },
  progressChildren: {
    alignItems: "center",
    justifyContent: "center",
    transform: [{ scaleX: -1 }]
  },
  progressSubtitle: {
    fontSize: 15,
    color: Colors.brownGrey
  },
  progressTitle: {
    marginTop: 5,
    fontSize: 22,
    fontWeight: "500"
  },
  text: {
    fontSize: 14
  },
  fastInfoContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  title: {
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 5
  },
  subTitle: {
    color: Colors.darkGrey,
    fontWeight: "600",
    textAlign: "center"
  }
});

export default styles;
