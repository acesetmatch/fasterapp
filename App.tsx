/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const theme = {
  //...DefaultTheme,
  roundness: 20,
  colors: {
    primary: "#8EA2FF",
    accent: "#f1c40f",
    background: "#F8F8F8",
    text: "#fff"
  },
  fonts: {
    regular: "System",
    medium: "System"
  }
};

interface Props {}

export default class App extends Component<Props> {
  render() {
    return (
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
