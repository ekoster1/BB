import React, {Component} from 'react';
import { Text, View, Image, ScrollView, Header, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';
import Router from './Router'

export default class LoginPage extends Component {
    render(){
        return (
                <View>
                    <Router/>
                    <Image source={{uri: 'COMP322logo.png'}} style={styles.image} />
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => Actions.home()}
                    >
                    <Text style={styles.text}>See Home</Text>
                    </TouchableOpacity>
                </View>
            );
    }
};
