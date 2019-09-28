import moment from "moment";
import { Text, View, AsyncStorage, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { withTheme, Button } from "react-native-elements";
import Colors from "../constants/Colors";
import { Screen } from "../constants/Layout";

interface Props {
  title: string;
  subTitle: string;
  buttonText: string;
}

const SavedFastItem = ({ title, subTitle, buttonText }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subTitle}</Text>
    </View>
  );
};

export default SavedFastItem;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 14
  },
  subtitle: {
    fontSize: 14,
    color: "#979797"
  }
});
