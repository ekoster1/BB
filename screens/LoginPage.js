import React, {Component} from 'react';
import { Text, View, Image, ScrollView, Header, TouchableOpacity, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';
import Router from './Router'

export default class LoginPage extends Component {
    render(){
        return (
                <View style={styles.container}>
                
                <Image source={require('../assets/COMP322logo.png')} style={styles.loginImage} />
                <Text style={styles.text}>  </Text>
                <Text style={styles.loginText}> Sign In </Text>
                <TextInput style={styles.textInput}
                placeholder="Username" />
                <TextInput style={styles.textInput} placeholder="Password"/>
                <TouchableOpacity
                style={styles.homeButton}
                onPress={() => Actions.categories()}
                >
                <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                </View>
                );
    }
};
