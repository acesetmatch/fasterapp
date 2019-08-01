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
    <View style={styles.listItem}>
      <View>
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
      <Button title={buttonText} />
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
  listItem: {}
});
