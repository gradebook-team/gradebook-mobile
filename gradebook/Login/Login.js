import React from 'react';
import { Image, StyleSheet, Text, View, Alert, Button, TouchableNativeFeedback, TextInput } from 'react-native';

import LogoPrimary from '../svg.js'
import InputField from '../Components/InputField'

export default class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    render() {
      return (
      <View style = {styles.container}>
        <LogoPrimary/>
        <InputField style = {{width: 200}} autoCapitalize = 'none' placeholder = 'bsd username' placeholderTextColor = '#ccc' onChangeText = {(text) => {
            this.setState({
                username: text
            })
        }}></InputField>
        <InputField style = {{width: 200, color: "white"}} placeholder = 'bsd password' placeholderTextColor = '#ccc' secureTextEntry = {true} onChangeText = {(text) => {
            this.setState({
                password: text
            })
        }}></InputField>
  
        <TouchableNativeFeedback
            style = {styles.loginButton}
            onPress = {
                () => {
                    this.props.handleLoginCallback(this.state.username, this.state.password);
                }
            }>
          <View style = {{minWidth: 0, minHeight: 0, backgroundColor: '#07e08d', borderRadius: 8, marginTop: 20}}>
            <Text style = {{fontFamily: "sofia pro bold", marginTop: 10, marginRight: 40, marginBottom: 10, marginLeft: 40, color: "white"}}>login</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      )
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
  