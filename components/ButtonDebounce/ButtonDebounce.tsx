import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { Button } from "react-native-elements";
import { Fonts } from "../../constants/Fonts";
import { callOnceInInterval } from "../utilities/helper";


interface State {
  isLoading: boolean;
}

interface Props {
  title: string;
  disabled: boolean;
  buttonContainer: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>
}

const ButtonDebounce = ({title, disabled, textStyle, buttonContainer}: Props) => {
    const onPressDebounce = callOnceInInterval(onPress);
    const style = 
    return (
      <Button
        title={title}
        color={"rgba(255, 255, 255, 1.0)"}
        onPress={onPressDebounce}
        fontFamily={Fonts.Raleway}
        fontWeight={"600"}
        fontSize={fontSize}
        disabled={disabled}
        textStyle={textStyle}
        buttonStyle={buttonContainer}
      />
    );
  }
}
