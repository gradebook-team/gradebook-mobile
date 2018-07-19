import React from 'react';
import { Image, StyleSheet, Text, View, Alert, Button, TouchableNativeFeedback, TextInput } from 'react-native';
import LogoPrimary from './svg.js'

import LoginPage from './Login/Login';
import GradePage from './Grades/Grades';
import ClassPage from './Grades/Class';

import api from './Api/Api';

import fetch from 'fetch';

console.log("FETCH LIBRARY");
console.log(fetch);

import { createStackNavigator, } from 'react-navigation'

class LoginPage_ extends React.Component {
  static navigationOptions = {
    header: null
  }

  handleLogin = async (username, password) => {
    try{
      let res = await api.login(username, password);
      
      if (res.json.success){
        Alert.alert("SUCCESSFUL LOGIN!");
        this.props.navigation.navigate("Grades");
      }else{
        Alert.alert("UNSUCCESSFUL LOGIN!");
      }

    }catch (err){
      throw err;
    }
  }
  
  render (){
    return <LoginPage handleLoginCallback = {this.handleLogin} />
  }
}

class GradePage_ extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor (props) {
    super(props);

    this.state = {
      grades: {},
      failed: false
    }
  }
  
  componentWillMount = async () => {
    let res = await api.fetchGrades();

    if (res.json.success) {
      this.setState({
        grades: res.json.grades
      })
    }else{
      this.setState({
        failed: true
      })
    }
  }

  render (){
    return this.state.failed ? <View style = {styles.container}>
      <Text>Failed to load grades!</Text>
    </View> : <GradePage grades = {this.state.grades}/>
  }
}

export default App = createStackNavigator({
  Login: { screen: LoginPage_, title: "Login" },
  Grades: { screen: GradePage_ }
})

/*export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }

    setInterval(() => {
      this.setState({
        loading: false
      })
    }, 10)
  }

  render() {
    let display;
    if (this.state.loading){
      display = <Splash/>
    }else{
      display = <LoginPage/>
    }

    return <View style = {styles.container}>
      {display}
    </View>
  }
}*/

/*
<View style={styles.container}>
        
        <TouchableNativeFeedback
          onPress = {() => {
            Alert.alert("Pressed!");
          }}
          title = "Press me!"
          style = {{
            borderRadius: 8,
            paddingTop: 20,
            paddingBottom: 20
          }}>
            <View style = {{minWidth: 0, minHeight: 0, backgroundColor: '#f09080', borderRadius: 8}}>
              <Text style = {{fontFamily: "sofia pro", marginTop: 10, marginRight: 40, marginBottom: 10, marginLeft: 40}}>Press me t</Text>
            </View>
          </TouchableNativeFeedback>
      </View>*/
    

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
