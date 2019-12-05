import React, {Component} from 'react';
import { Text, View, Image, ScrollView, Header, TouchableOpacity, TextInput, secureTextEntry } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';
import Router from './Router'

export default class LoginPage extends Component {
    render(){
        return (
                <View style={styles.container}>
                
                <Image source={require('../assets/COMP322logo.png')} style={styles.loginImage} />
                <Text style={styles.text}>  </Text>
                <Text style={styles.text}>  </Text>
                <Text style={styles.loginText}>  </Text>
                <TextInput style={styles.textInput}
                placeholder="Username" />
                <TextInput style={styles.textInput} placeholder="Password" secureTextEntry = {true}/>
                <TouchableOpacity
                style={styles.loginButton}
                onPress={() => Actions.categories()}
                >
                <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.loginText}> forgot password? </Text>
                </View>
                );
    }
};
