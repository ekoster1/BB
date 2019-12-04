import React, {Component} from 'react';
import { Text, View, Image, ScrollView, Header, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';
import Router from './Router'

export default class Home extends Component {
    render(){
        return (
                <View style={styles.container}>
                    <Image source={require('../assets/COMP322logo.png')} style={styles.image} />
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => Actions.categories()}
                    >
                    <Text style={styles.text}>See Categories</Text>
                    </TouchableOpacity>
                </View>
            );
    }
};
