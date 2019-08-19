import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "react-navigation-hooks";
import AsyncStorage from "@react-native-community/async-storage";

const AuthLoadingScreen = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    _bootstrapAsync();
  });

  // Fetch the token from storage then navigate to our appropriate place
  const _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    navigate(userToken ? "Home" : "Home");
  };

  // Render any loading content that you like here

  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonsContainer: {
    flexDirection: "row",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  }
});
