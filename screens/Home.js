import React, {Component} from 'react';
import { Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from '../Styles';

export default class Home extends Component {
    render (){
        return(
            <View style={styles.container}>
                <Text>Home Page</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => Actions.categories()}>
                    <Text style={styles.text}>See Categories</Text>
                </TouchableOpacity>
            </View>
        );
    }
  };
  
