import PropTypes from "prop-types";
import React, { useState } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Colors } from "../constants/Colors";
import { globalStyles } from "../utils/GlobalStyles";
import { isIphoneX } from "../utils/Helper";

const searchThinIcon = require("../assets/icons/searchThin.png");

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;

const HeaderLarge = (props) => {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    };
  }

  const [scrollY, setScrollY ] = useState(new Animated.Value(0))

  render() {
    return (
      <Animated.View
        style={[
          styles.header,
          {
            backgroundColor: this.props.backgroundColor
              ? this.props.backgroundColor
              : "white"
          }
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 1
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
            <Text
              style={[
                globalStyles.headerText,
                {
                  color: this.props.titleTextColor
                    ? this.props.titleTextColor
                    : Colors.navyBlacK
                }
              ]}
            >
              {this.props.headerText}
            </Text>
            <View
              style={{
                width: 53,
                height: 1,
                backgroundColor: "white",
                marginLeft: 2,
                marginTop: 3
              }}
            />
          </View>
          {this.props.children ? this.props.children : undefined}
          {this.props.headerOnPress && (
            <TouchableOpacity onPress={() => console.log("Search")}>
              <Image
                style={[styles.patrioTab, { tintColor: Colors.subtitleGrey }]}
                source={this.props.headerIcon}
              />
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>
    );
  }
}

HeaderLarge.propTypes = {
  headerText: PropTypes.string
};

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
    //paddingTop: 50,
    paddingLeft: 15,
    paddingRight: 20,
    paddingBottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    height: isIphoneX() ? 90 : 70,
    backgroundColor: Colors.background
  },
  patrioTab: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT
  }
});
