import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";

interface Props {
  name: any;
  focused: boolean;
}

export default class TabBarIcon extends React.Component<Props> {
  render() {
    return (
      <Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={
          this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
        }
      />
    );
  }
}
