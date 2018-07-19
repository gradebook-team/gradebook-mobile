import React from 'react';
import { Image, StyleSheet, Text, View, Alert, Button, TouchableNativeFeedback, TextInput } from 'react-native';

export default class InputField extends React.Component {
  render() {
    let style;
    style = styles.inputField;

    for (var k in Object.keys(this.props.style)){
      style[k] = this.props.style[k];
    }

    return <TextInput {...this.props}
    underlineColorAndroid = 'transparent' style = {style} placeholder = {this.props.placeholder} secureTextEntry = {this.props.secureTextEntry} cursorColor = 'white'></TextInput>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  absoluteContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
    top: 0,
    left: 0
  },
  inputField: {
    borderRadius: 6,
    backgroundColor: "#527aff",
    width: 200,
    color: "white",
    fontFamily: "sofia pro medium",
    paddingLeft: 20,
    marginTop: 20
  },
  loginButton: {
    marginTop: 20,
    borderRadius: 8,
    paddingTop: 20,
    paddingBottom: 20
  }
});
