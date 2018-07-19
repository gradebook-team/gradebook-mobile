import React from 'react';
import { Image, StyleSheet, Text, View, Alert, Button, TouchableNativeFeedback, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import LogoPrimary from '../svg.js'

import styles from '../Styles/Style';

export default class ClassCard extends React.Component {
    render() {
        return <LinearGradient colors = {this.props.gradient.colors} start = {this.props.gradient.start} end = {this.props.gradient.end} style = {styles.gradeCard}>
            <View style = {{
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <Text style = {{fontSize: 20, color: "white", fontFamily: "sofia pro", flex: 2}} ellipsizeMode = 'tail' numberOfLines = {1}>{this.props.classData.className}</Text>
                <Text style = {{fontSize: 20, color: "white", fontFamily: "sofia pro", flex: 1, textAlign: "right"}}>{this.props.classData.room}</Text>
            </View>

            <Text style = {{fontSize: 15, color: "white", fontFamily: "sofia pro"}}>{this.props.classData.teacher}</Text>
            <Text style = {{fontSize: 50, color: "white", fontFamily: "sofia pro"}}>90.21   A</Text>
        </LinearGradient>
    }
} 