import moment, { Moment } from "moment";
import React from "react";
import { Text, View, Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Button, withTheme } from "react-native-paper";
import Colors from "../../constants/Colors";
import styles from "./styles";
import DeviceStorage, { DEVICE_STORAGE_KEYS } from "../../api/DeviceStorage";
import BackgroundTimer from "react-native-background-timer";
import to from "await-to-js";

interface Props {
  theme: any;
  navigation: any;
}
interface State {
  fill: number;
  timeLeft: any;
  fastDuration: number;
  fastStarted: boolean;
  fastStartDate: moment.Moment;
  fastEndDate: moment.Moment;
  timeElapsed: number;
}

enum ProgramType {
  Circadian_Rhythm,
  Intermittent_16_8,
  Intermittent_18_6,
  Intermittent_20_4,
  Fast_36_Hour
}

type FastSession = {
  startDate: number;
  endDate: number;
  duration: number;
  programType: ProgramType;
  feedback: string;
};

const ENCOURAGEMENT_TEXT = "Get ready to fast";
const TYPE_OF_FAST = "Fast Type";
const FAST_PROGRAM = "16 : 8 Fasting Program";
const START_FAST = "Start Fast";
const END_FAST = "End Fast";
const programTime = 16 * 60 * 60;

class TimerScreen extends React.Component<Props, State> {
  static navigationOptions = {
    header: null
  };

  interval: number = 0;

  state = {
    fill: 100,
    timeLeft: 0,
    fastDuration: 0,
    fastStarted: false,
    fastStartDate: moment(),
    fastEndDate: moment(),
    timeElapsed: 0
  };

  componentDidMount() {
    this._setFastProgram();
    this._getLastSavedFastTime();
  }

  _setFastProgram = () => {
    const hours = 16;
    this.setState({
      fastDuration: hours * 60 * 60
    });
  };

  _retrieveFastTimesFromLocalStorage = async () => {
    const [errStartDate, startDate] = await to(
      DeviceStorage.getItem(DEVICE_STORAGE_KEYS.fastStartDate)
    );

    if (!errStartDate) {
      console.log("Error fetching end date");
    }

    const [errEndDate, endDate] = await to(
      DeviceStorage.getItem(DEVICE_STORAGE_KEYS.fastEndDate)
    );

    if (!errEndDate) {
      console.log("Error fetching end date");
    }

    return { startDate: moment(startDate), endDate: moment(endDate) };
  };

  // TODO: Handle errors?
  _getLastSavedFastTime = async () => {
    const {
      startDate,
      endDate
    } = await this._retrieveFastTimesFromLocalStorage();
    this.setState(
      {
        fastStartDate: moment(startDate) || moment(),
        fastEndDate: moment(endDate) || moment()
      },
      () => {
        if (!startDate || !endDate) return;
        this._runBackgroundTimer(this.state.fastDuration);
      }
    );
  };

  _startCountdownTimer = (totalFastDuration: number) => {
    this._saveFastStartAndEnd(programTime);
    this._runBackgroundTimer(this.state.fastDuration);
  };

  _runBackgroundTimer = (totalFastSeconds: number) => {
    BackgroundTimer.runBackgroundTimer(() => {
      const fastStartDate = this.state.fastStartDate;
      const secondsDiff = moment().diff(fastStartDate, "seconds");
      const percentage =
        ((totalFastSeconds - secondsDiff) / totalFastSeconds) * 100;
      const timeLeft = totalFastSeconds - secondsDiff;
      this.setState({
        timeElapsed: timeLeft,
        fill: percentage,
        fastStarted: true
      });
    }, 1000);
  };

  // TODO: Resolve with promise.all
  _saveFastStartAndEnd = async (programTime: number) => {
    const [errStartDate, startDate] = await to(
      DeviceStorage.saveItem(DEVICE_STORAGE_KEYS.fastStartDate, moment().unix())
    );

    if (errStartDate) {
      return console.log("Error saving value");
    }

    const [errEndDate, endDate] = await to(
      DeviceStorage.saveItem(
        DEVICE_STORAGE_KEYS.fastEndDate,
        moment()
          .add(programTime, "seconds")
          .unix()
      )
    );

    if (errEndDate) {
      return console.log("Error saving value");
    }
  };

  _getStartAndEndDatesFromLocalStorage = async (): Promise<any> => {
    const [errStartDate, startDate] = await to(
      DeviceStorage.getItem(DEVICE_STORAGE_KEYS.fastStartDate)
    );

    if (errStartDate) {
      return console.log("Error fetching value");
    }

    const [errEndDate, endDate] = await to(
      DeviceStorage.getItem(DEVICE_STORAGE_KEYS.fastEndDate)
    );

    if (errEndDate) {
      return console.log("Error fetching value or is undefined");
    }

    return { startDate, endDate };
  };

  _endFast = async () => {
    const {
      startDate,
      endDate
    } = await this._getStartAndEndDatesFromLocalStorage();

    const fastSessionDetails: FastSession = {
      startDate: moment().unix(),
      endDate: moment().unix(),
      programType: ProgramType.Circadian_Rhythm,
      feedback: "It felt amazing",
      duration: 16000
    };

    this.props.navigation.navigate("EndFast", {
      fastSession: fastSessionDetails
    });

    this.setState({
      fastStarted: false
    });
  };

  _formattedTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${hours}:${minutes}:${formattedSeconds}`;
  };

  render() {
    const { colors } = this.props.theme;
    const {
      fill,
      fastDuration,
      fastStarted,
      timeLeft,
      fastStartDate,
      fastEndDate,
      timeElapsed
    } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.progressSubtitle}>{ENCOURAGEMENT_TEXT}!</Text>
        <Button
          icon="edit"
          mode="outlined"
          color={Colors.Secondary}
          onPress={() => console.log("Pressed")}
          contentStyle={styles.buttonContent}
          style={styles.button}
          theme={this.props.theme}
        >
          {FAST_PROGRAM}
        </Button>
        <AnimatedCircularProgress
          size={200}
          linecap="round"
          width={20}
          rotation={360}
          fill={fill}
          tintColor={Colors.Primary}
          backgroundColor={colors.background}
          style={styles.circularProgress}
        >
          {(fill: any) => (
            <View style={styles.progressChildren}>
              <Text style={styles.progressSubtitle}>
                {timeElapsed > 0
                  ? `Elapsed Time (${Math.floor(fill)}%)`
                  : "Current Goal"}
              </Text>
              <Text style={styles.progressTitle}>
                {timeElapsed > 0
                  ? this._formattedTime(timeElapsed)
                  : `${fastDuration / 60 / 60} hours`}
              </Text>
            </View>
          )}
        </AnimatedCircularProgress>
        {!fastStarted ? (
          <Button
            //color="#8EA2FF"
            mode="contained"
            onPress={() => this._startCountdownTimer(fastDuration)}
            contentStyle={styles.buttonContent}
            style={styles.button}
            theme={this.props.theme}
          >
            {fastStarted ? END_FAST : START_FAST}
          </Button>
        ) : (
          <Button
            color="#fff"
            mode="contained"
            onPress={this._endFast}
            contentStyle={styles.buttonContent}
            style={styles.button}
            theme={{ colors: { text: "#fff" } }}
          >
            {END_FAST}
          </Button>
        )}
        <View
          style={{
            marginTop: 30,
            flexDirection: "row"
          }}
        >
          <View style={styles.fastInfoContainer}>
            <Text style={styles.title}>Started Fasting</Text>
            <Text style={styles.subTitle}>
              {moment(fastStartDate).calendar()}
            </Text>
          </View>
          <View style={styles.fastInfoContainer}>
            <Text style={styles.title}>Fast Ending</Text>
            <Text style={styles.subTitle}>
              {moment(fastEndDate).calendar(fastEndDate)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default withTheme(TimerScreen as any);
