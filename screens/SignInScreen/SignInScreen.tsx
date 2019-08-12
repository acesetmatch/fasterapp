import moment from "moment";
import { Text, View, AsyncStorage, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { withTheme, Button } from "react-native-elements";
import Colors from "../constants/Colors";
import { Screen } from "../constants/Layout";
import { withAuthenticator, Authenticator } from "aws-amplify-react-native";

interface Props {
  title: string;
  subTitle: string;
  buttonText: string;
}

const signUpConfig = {
  header: "Sign up here",
  hideAllDefaults: true,
  defaultCountryCode: "1",
  signUpFields: [
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 1,
      type: "string"
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 2,
      type: "password"
    },
    // {
    //   label: "PhoneNumber",
    //   key: "phone_number",
    //   required: false,
    //   displayOrder: 3,
    //   type: "string"
    // },
    {
      label: "Custom Attribute",
      key: "custom_attr",
      required: false,
      displayOrder: 4,
      type: "string",
      custom: true
    }
  ]
};

const SignInScreen = ({ title, subTitle, buttonText }: Props) => {
  return (
    <View style={styles.listItem}>
      <Authenticator signUpConfig={signUpConfig} />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  listItem: {}
});
