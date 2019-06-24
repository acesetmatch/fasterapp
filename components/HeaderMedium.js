import React, { Component } from "react";
import {
  Animated,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { globalStyles } from "../utils/GlobalStyles";
import PropTypes from "prop-types";
import FastImage from "react-native-fast-image";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";
import { NAVBAR_HEIGHT, STATUS_BAR_HEIGHT } from "../constants/Layout";
import {
  parseTimeFromNow,
  getDomainUrl,
  shuffle,
  titleCase,
  convertSourceObjectsToArray,
  isIphoneX
} from "../utils/Helper";

const backIcon = require("../assets/icons/backIcon.png");

export default class HeaderMedium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    };
  }
  render() {
    return (
      <Animated.View
        style={
          this.props.containerStyle ? this.props.containerStyle : styles.header
        }
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 1
          }}
        >
          <TouchableOpacity
            onPress={this.props.goBack}
            style={{
              marginLeft: 5,
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <FastImage
              source={backIcon}
              resizeMode={FastImage.resizeMode.contain}
              style={{}}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>{this.props.title}</Text>
          {this.props.renderHeaderRight()}
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: isIphoneX() ? NAVBAR_HEIGHT + 20 : NAVBAR_HEIGHT,
    paddingTop: isIphoneX() ? STATUS_BAR_HEIGHT + 20 : STATUS_BAR_HEIGHT,
    backgroundColor: "white"
  },
  headerText: {
    fontFamily: Fonts.System600,
    marginRight: 10,
    width: 300,
    textAlign: "center",
    //fontWeight: '500',
    fontSize: 20,
    color: Colors.blackGrey
  }
});
