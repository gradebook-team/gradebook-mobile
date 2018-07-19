import React from 'react';
import { Image, StyleSheet, Text, View, Alert, Button, TouchableNativeFeedback, TextInput } from 'react-native';

import styles from '../Styles/Style';

import LogoPrimary from '../svg.js'
import InputField from '../Components/InputField'

export default class GradePage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
      return (
      <View style = {styles.container}>
        <Text>{JSON.stringify(this.props.grades)}</Text>
      </View>
      )
    }
  }
  
  