import React from 'react';
import { Image, StyleSheet, Text, View, Alert, Button, TouchableNativeFeedback, TextInput } from 'react-native';

import LogoPrimary from '../svg.js'

import styles from '../Styles/Style';

export default class Splash extends React.Component {
    render() {
      return <View style = {styles.container}>
        <LogoPrimary/>
      </View>
    }
  }

