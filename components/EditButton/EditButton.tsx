import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const FAST_TYPE = "16:8 INTERMITTENT";
const EDIT_ICON = require("../../assets/images/editIcon.png");

const EditButton = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => console.log("on edit")}
    >
      <Text style={styles.buttonText}>{FAST_TYPE}</Text>
      <Image source={EDIT_ICON} />
    </TouchableOpacity>
  );
};

export default EditButton;
