import React from 'react';
import { Image, StyleSheet, Text, View, Alert, Button, TouchableNativeFeedback, TextInput } from 'react-native';

import styles from '../Styles/Style';


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
