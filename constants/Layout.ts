import { Dimensions, Platform } from "react-native";
import { Header } from "react-navigation";

export const Screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height
};

export const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

export const HeaderDim = {
  NAV_BAR_HEIGHT: Header.HEIGHT,
  STATUS_BAR_HEIGHT: Platform.OS === "ios" ? 20 : 0
};
