import React, {Component} from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';
import Router from './Router'


export default class Home extends Component {
    render(){
        return (
                <View style={styles.container}>
                
                    <Image source={require('../assets/COMP322logo.png')} style={styles.image} />
                    <Text style={styles.text}>  </Text>
                <Text style={styles.text}>  </Text>
                <Text style={styles.homeText}>  </Text>
                    <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => Actions.login()}
                    >
                    <Text style={styles.text}>Log In</Text>
                    </TouchableOpacity>
                <TouchableOpacity
                style={styles.homeButton}
                onPress={() => Actions.categories()}
                >
                <Text style={styles.text}>See Categories</Text>
                </TouchableOpacity>
                
                </View>
            );
    }
};
