import React from 'react';
import { Image, PanResponder, Animated, Switch, ViewPagerAndroid, StyleSheet, Text, View, ScrollView, Alert, Button, Slider, TouchableNativeFeedback, TextInput } from 'react-native';

import styles from '../Styles/Style';

import LogoPrimary from '../svg.js'
import InputField from '../Components/InputField'
import ClassCard from '../Components/ClassCard'
import MenuHeader from '../Components/MenuHeader'

export default class GradePage extends React.Component {
    constructor(props){
        super(props);

        this.gradients = [
            {
                colors: ['#ffc782', '#ff9472'],
                start: {x: 0.5, y : 0},
                end: {x: 0.7, y: 1}
            },
            {
                colors: ['#17cea2', '#17adce'],
                start: {x: 0.2, y : 0.95},
                end: {x: 0.9, y: 0.1}
            },
            {
                colors: ['#8433aa', '#4223aa'],
                start: {x: 0.1, y : 0.1},
                end: {x: 1, y: 1}
            },
            {
                colors: ['#3346aa', '#3395aa'],
                start: {x: 0.2, y : 0.2},
                end: {x: 0.9, y: 0.2}
            },
            {
                colors: ['#f78ca0', '#f9748f', '#fd868c', '#fe9a8b'],
                start: {x: 0.2, y : 0.2},
                end: {x: 0.9, y: 0.2}
            },
            {
                colors: ['#17cea2', '#17adce'],
                start: {x: 0.2, y : 0.95},
                end: {x: 0.9, y: 0.1}
            }
        ] 

        this.state = {
            touchDownX: 0,
            relX: 0,
            pageProgress: new Animated.Value(0),
            page: 0,
        }

        this._val = 0;
        this.onSwipe = Animated.event([{
            nativeEvent: {
                offset: {
                    x: this.state.pageProgress
                }
            }
        }])
    }

    handleTransform = () => {
        return {
            transform: [
                {
                    translateX: this.state.pageProgress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -220]
                    })
                }
            ]
        }
    }

    render() {
      return (
      <View style = {{flex: 1, flexDirection: "column"}}>
           <View style = {{paddingTop: 20, backgroundColor: "white", alignItems: "center"}}>
                <LogoPrimary/>
            </View>

           <MenuHeader pages = {
                    [
                        {
                            "page" : "Grades",
                        },
                        {
                            "page" : "Profile"
                        }
                    ]
                } currentPage = {this.state.page} transform = {this.handleTransform}/>

        <ViewPagerAndroid style = {{
            width: "100%",
            height: "100%",
            flex: 1
        }} onPageScroll = {(event) => {
            let offset = event.nativeEvent.offset;
            this.state.pageProgress.setValue(event.nativeEvent.position + offset)
        }} onPageSelected = {(event) => {
            this.setState({
                page: event.nativeEvent.position
            })
        }}>

            <View style = {styles.containerNoCenter} key = '1'>
               
                <View style = {{
                    width: "100%",
                    height: "100%",
                    flexDirection: "row",
                    marginLeft: this.state.pageProgress._value
                }}>
                    <ScrollView style = {{flex: 1, flexDirection: "column"}} contentContainerStyle = {{alignItems: "center", paddingVertical: 30}}>
                        {this.props.classes.map((class_, i) => {
                            return <ClassCard key = {"class-" + i} classData = {class_} gradient = {this.gradients[i]}/>
                        })}
                    </ScrollView>
                
                </View>
                
            </View>

            <View style = {styles.containerLeft} key = '2'>
                <View style = {{marginTop: 30, padding: 30, width: "90%"}} id = "notifications">
                    <Text style = {{fontSize: 30, fontFamily: "sofia pro", marginBottom: 0, color: "black"}}>Notifications</Text>
                    <Text style = {{fontSize: 13, fontFamily: "sofia pro", marginBottom: 15, color: "#ccc"}}>Get notifications for recent assignments or if certain grades drop below a certain percentage.</Text>

                    <View style = {{flexDirection: "row", marginBottom: 10}}>
                        <Switch />
                        <Text style = {{fontSize: 20, fontFamily: "sofia pro",color: "black"}}>Enable notifications by email</Text>
                    </View>

                    <View style = {{flexDirection: "row", marginBottom: 10}}>
                        <Switch />
                        <Text style = {{fontSize: 20, fontFamily: "sofia pro",color: "black"}}>Enable notifications by SMS</Text>
                    </View>

                    <Slider style = {{width: "100%"}} minimumValue = {0} maximumValue = {100}/>
                    
                    <View style = {{flexDirection: "row", marginBottom: 10}}>
                        <Text style = {{fontSize: 20, fontFamily: "sofia pro",color: "black"}}>Grade alert threshold</Text>
                    </View>

                </View>

                
                
            </View>

             <View style = {styles.containerNoCenter} key = '3'>
                <View style = {{marginTop: 20}}>
                    <LogoPrimary/>
                </View>

                
                
            </View>
        </ViewPagerAndroid>
    </View>
      )
    }
  }
  
  