import moment from "moment";
import React, { useState, useEffect } from "react";
import { View, Text, AsyncStorage, StyleSheet } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { withTheme, Button } from "react-native-elements";
import Colors from "../../constants/Colors";
import DeviceStorage, { DEVICE_STORAGE_KEYS } from "../../api/DeviceStorage";
import SavedFastItem from "../../components/SavedFastItem";
import { API, graphqlOperation } from "aws-amplify";
import { useNavigation } from "react-navigation-hooks";
import to from "await-to-js";

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

const listUsersQuery = `query {
  listUsers(filter: {
    name: {
      contains:"Bobby"
    }
  }) {
    items {
      id
      name
    }
  }
}`;

const fastDetails = {
  startDate: 1566356604,
  endDate: 1566443004,
  programType: "Circadian",
  feedback: "Tired"
};
const addFast = `mutation createFast($startDate: Int!, $endDate: Int!, $programType: String!, $duration: Float!, $feedback: String!) {
  createFast(input: {
    startDate:$startDate,
    endDate: $endDate,
    programType: $programType,
    duration: $duration,
    feedback:$feedback
  }) {
    id
    programType
    feedback
    duration
    startDate
    endDate
  }
}`;

const EndFastScreen = () => {
  const { navigate, state } = useNavigation();

  useEffect(() => {
    const data = _loadListOfUsers();
  });

  const _loadListOfUsers = async () => {
    const data = await API.graphql(graphqlOperation(listUsersQuery));
    console.log(data);
    return data;
  };

  const _addFastMutation = async (fastDetails: any) => {
    const newFast = await API.graphql(graphqlOperation(addFast, fastDetails));
    return newFast
  };

  const _closeModal = () => {};

  const _saveFast = () => {

    const savedFastSession = state.params.fastSession;

    const newFast = _addFastMutation(savedFastSession);

    if (!newFast) return 

    const [err, startDate] = await to(
      AsyncStorage.multiRemove([DEVICE_STORAGE_KEYS.fastStartDate, DEVICE_STORAGE_KEYS.fastEndDate)
    );
  };

  // TODO: Add later
  // const _deleteFast = () => {
  //   const [err, startDate] = await to(
  //     AsyncStorage.multiRemove([DEVICE_STORAGE_KEYS.fastStartDate, DEVICE_STORAGE_KEYS.fastEndDate)
  //   );
  // };

  return (
    <View style={styles.mainContainer}>
      <Text>{DummyText.TOTAL_FASTING}</Text>
      <Text>{DummyText.DURATION}</Text>
      <Button title="Share Fast" onPress={() => console.log("share fast")} />
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
        <Button title={"Save Fast"} onPress={_saveFast} />
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
