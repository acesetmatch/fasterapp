import moment from "moment";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  AsyncStorage,
  StyleSheet,
  Alert,
  TextInput
} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { withTheme, Button } from "react-native-elements";
import Colors from "../../constants/Colors";
import DeviceStorage, { DEVICE_STORAGE_KEYS } from "../../api/DeviceStorage";
import SavedFastItem from "../../components/SavedFastItem";
import { API, graphqlOperation } from "aws-amplify";
import { useNavigation } from "react-navigation-hooks";
import to from "await-to-js";
import LoadingButton from "../../components/LoadingButton";

const DummyText = {
  TOTAL_FASTING: "Total fasting time",
  FAST_PROGRAM: "16:8 Intermittent",
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
  const { navigate, state, goBack } = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const savedFastSession = state.params.fastSession;

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
    return newFast;
  };

  const _saveFast = async () => {
    setIsLoading(true);

    const newFast = _addFastMutation(savedFastSession);

    if (!newFast) return;

    const [err] = await to(
      AsyncStorage.multiRemove([
        DEVICE_STORAGE_KEYS.fastStartDate,
        DEVICE_STORAGE_KEYS.fastEndDate
      ])
    );
    if (err) return Alert.alert("Error saving fast");

    state.params.stopTimer();

    setIsLoading(false);

    goBack();
  };

  // TODO: Add later
  const _deleteFast = async () => {
    const [err, startDate] = await to(
      AsyncStorage.multiRemove([
        DEVICE_STORAGE_KEYS.fastStartDate,
        DEVICE_STORAGE_KEYS.fastEndDate
      ])
    );

    if (err) return console.log("Could not save fast");

    goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <Text>Congrats on finishing your fast!</Text>
      <View style={styles.fastHighlightsContainer}>
        <Text>{DummyText.DURATION}</Text>
        <View>
          <Text>{DummyText.TOTAL_FASTING}</Text>
          <Text>{DummyText.DURATION}</Text>
        </View>
      </View>
      <Button title="Share Fast" onPress={() => console.log("share fast")} />
      <View style={styles.analyticsContainer}>
        <SavedFastItem
          title={"Started Fasting"}
          subTitle={DummyText.FAST_START}
          buttonText={"Edit"}
        />
        <View style={{ height: 50, width: 1.0 }} />
        <SavedFastItem
          title={"Started Fasting"}
          subTitle={DummyText.FAST_START}
          buttonText={"Edit"}
        />
      </View>
      <Text style={{ marginTop: 20 }}>Feedback:</Text>
      <TextInput
        style={{
          marginTop: 15,
          height: 127,
          borderColor: "gray",
          borderWidth: 1
        }}
        onChangeText={text => setFeedbackText(text)}
        value={feedbackText}
      />
      <View style={styles.buttonsContainer}>
        <LoadingButton onPress={_deleteFast} text={"Delete Fast"} />
        <LoadingButton
          isLoading={isLoading}
          onPress={_saveFast}
          text={"Delete Fast"}
        />
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
    paddingLeft: 25,
    paddingRight: 25
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 50,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  },
  analyticsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  fastHighlightsContainer: {
    marginTop: 25,
    height: 135,
    justifyContent: "center"
  }
});
