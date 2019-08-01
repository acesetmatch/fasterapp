import moment from "moment";
import React, { useState, useEffect } from "react";
import { View, Text, AsyncStorage, StyleSheet } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { withTheme, Button } from "react-native-elements";
import Colors from "../../constants/Colors";
import DeviceStorage from "../../api/DeviceStorage";
import SavedFastItem from "../../components/SavedFastItem";

const DummyText = {
  TOTAL_FASTING: "Total fasting time",
  DURATION: "1 minute",
  FAST_START: "Today, 9:56 pm",
  FAST_END: "Tomorrow: 1:56 pm",
  FEEL: "How did it feel?"
};

enum FastProgram {
  Circadian
}

const EndFastScreen = () => {
  const _closeModal = () => {};

  const _saveFast = () => {
    const fastSession = {
      startDate: moment(),
      endDate: moment(),
      fastDuration: 32,
      program: FastProgram.Circadian,
      details: "I felt good on this fast"
    };
    DeviceStorage.saveItem("fast_session", fastSession).then(() => {
      console.log("saved fast");
    });
  };
  return (
    <View style={styles.mainContainer}>
      <Text>{DummyText.TOTAL_FASTING}</Text>
      <Text>{DummyText.DURATION}</Text>
      <Button title="Share Fast" />
      <SavedFastItem
        title={"Started Fasting"}
        subTitle={DummyText.FAST_START}
        buttonText={"Edit"}
      />
      <SavedFastItem
        title={"Started Fasting"}
        subTitle={DummyText.FAST_START}
        buttonText={"Edit"}
      />
      <View style={styles.buttonsContainer}>
        <Button title={"Cancel Fast"} onPress={_closeModal} />
        <Button title={"Save Fast"} />
      </View>
    </View>
  );
};

export default EndFastScreen;

const styles = StyleSheet.create({
  mainContainer: {
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
