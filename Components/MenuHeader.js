import React from 'react';
import { Image, StyleSheet, Text, Animated, View, Alert, Button, TouchableNativeFeedback, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import LogoPrimary from '../svg.js'

import styles from '../Styles/Style';

export default class MenuHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: props.pages[0]
        }
    }

    render() {
        return <LinearGradient style = {{
            flexDirection: "column",
            marginBottom: -60,
            paddingTop: 10,
            paddingBottom: 40,
            width: "100%",
            height: 130,
            zIndex: 100000
    }} colors = {['#ffff', '#ffff', '#fff0']} start = {{x : 0, y: 0.2}} end = {{x: 0, y: 1}}>
        <Animated.View style = {[{
            width: "200%",
            height: "100%",
            
        }, this.props.transform()]}>
                {this.props.pages.map((page, i) => {
                    let color;
                    
                    if (i === this.props.currentPage){
                        color = 'black'    
                    }else{
                        color = '#cccccc'
                    }
                    
                    return <Text key = {i} style = {{
                        fontSize: 50,
                        color: color,
                        position: "absolute",
                        top: 0,
                        left: ((i) * 220) + 30,
                        fontFamily: "sofia pro medium"
                    }}>{page.page}</Text>
                })}
            </Animated.View>
        </LinearGradient>
    }
} 

