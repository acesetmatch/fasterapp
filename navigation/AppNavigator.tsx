import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import EndFastScreen from "../screens/EndFastScreen/EndFastScreen";
import AuthNavigator from "./AuthNavigator";
import AuthLoadingScreen from "../screens/AuthLoadingScreen/AuthLoadingScreen";

const HomeNavigator = createStackNavigator(
  {
    // For each screen that you can navigate to, create a new entry like this:
    Main: {
      // `ProfileScreen` is a React component that will be the main content of the screen.
      screen: MainTabNavigator,
      // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.
      navigationOptions: ({ navigation }: any) => ({
        title: `Save your Fast`
      })
    },
    EndFast: {
      screen: EndFastScreen
    }
  },
  {
    mode: "modal"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Home: HomeNavigator,
      Auth: AuthNavigator
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
