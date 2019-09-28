import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet
} from "react-native";

const LoadingButton = ({
  isLoading,
  onPress,
  text,
  textStyle,
  containerStyle
}: any) => {
  if (isLoading) {
    return <ActivityIndicator animating={isLoading} />;
  }

  return (
    <TouchableOpacity style={[styles.container, containerStyle]}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: 50
  },
  textContainer: {
    justifyContent: "center"
  },
  text: {
    color: "#000"
  }
});

export default LoadingButton;
