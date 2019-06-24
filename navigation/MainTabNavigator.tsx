import React from "react";
import { Platform, View } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import SocialScreen from "../screens/SocialScreen";
import TimerScreen from "../screens/TimerScreen/TimerScreen";

const TimerStack = createStackNavigator({
  Timer: TimerScreen
});

TimerStack.navigationOptions = {
  tabBarLabel: "Timer",
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const SocialStack = createStackNavigator({
  Social: SocialScreen
});

SocialStack.navigationOptions = {
  tabBarLabel: "Links",
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SocialScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export default createBottomTabNavigator({
  TimerStack,
  SocialStack,
  SettingsStack
});
