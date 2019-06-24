import React, { Component } from 'react';
import { View, StyleSheet, Animated, ImageBackground } from 'react-native';

export default class ImageBackgroundLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.ImageBackground
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.95, 1],
                })
              },
            ],
          },
          this.props.style,
        ]}
      >
      {this.props.children}
      </Animated.ImageBackground>
    );
  }
}