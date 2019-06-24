import { Platform } from "react-native";

export const Fonts = {
  Calibri: "Calibri",
  Quadranta: "Quadranta",
  System: "Open Sans",
  System700: "OpenSans-ExtraBold",
  System600: "OpenSans-Bold",
  System500: "OpenSans-SemiBold",
  System400: "OpenSans-Regular",
  System300: "OpenSans-Light",
  SystemBody: Platform.OS === "ios" ? "Roboto-Regular" : "Roboto-Regular",
  System2: "Avenir",
  Raleway: "Avenir",
  Avenir: "Avenir",
  Lobster: "Lobster-Regular",
  squash: "rgb(245, 166, 35)",
  redPink: "rgb(242,58,74)",
  logoRed: "rgb(204, 47, 66)",
  logoCharcoal: "rgba(74, 74, 74, 1.0)"
};
