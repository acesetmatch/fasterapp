import moment, { Moment } from "moment";
import React from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Button, withTheme } from "react-native-paper";
import Colors from "../../constants/Colors";
import styles from "./styles";
import DeviceStorage from "../../api/DeviceStorage";
import BackgroundTimer from "react-native-background-timer";

const ENCOURAGEMENT_TEXT = "Get ready to fast";

const TYPE_OF_FAST = "Fast Type";
const FAST_PROGRAM = "16 : 8 Fasting Program";
const START_FAST = "Start Fast";

const END_FAST = "End Fast";

const programTime = 16 * 60 * 60;

interface Props {
  theme: any;
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

  // TODO: Handle errors?
  _getLastSavedFastTime = async () => {
    try {
      const fastStartDate = await DeviceStorage.getItem("fastStart");
      const fastEndDate = await DeviceStorage.getItem("fastEnd");

      if (!fastStartDate || !fastEndDate) return;

      // let timeElapsed = moment().diff(
      //   moment(parseInt(fastStartDate)),
      //   "seconds"
      // );
      console.log(moment(fastStartDate));
      this.setState(
        {
          fastStartDate: moment(fastStartDate),
          fastEndDate: moment(fastEndDate)
        },
        () => {
          this._runBackgroundTimer(this.state.fastDuration);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  _startCountdownTimer = (totalFastDuration: number) => {
    this._saveFastStartAndEnd(programTime);
    this._runBackgroundTimer(this.state.fastDuration);
  };

  // TODO: Resolve with promise.all
  _saveFastStartAndEnd = async (programTime: number) => {
    DeviceStorage.saveItem("fastStart", moment());
    DeviceStorage.saveItem("fastEnd", moment().add(programTime, "seconds"));
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

  _stopCountdownTimer = () => {
    BackgroundTimer.stopBackgroundTimer();
    this._saveFastStartAndEnd(programTime);
    this.props.navigation.navigate("EndFast");
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
            onPress={() => this._stopCountdownTimer()}
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
            <Text style={styles.subTitle}>{fastStartDate.calendar()}</Text>
          </View>
          <View style={styles.fastInfoContainer}>
            <Text style={styles.title}>Fast Ending</Text>
            <Text style={styles.subTitle}>
              {fastEndDate.calendar(fastEndDate)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default withTheme(TimerScreen as any);
