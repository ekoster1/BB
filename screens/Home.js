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
                    <Text style={styles.text}>Login</Text>
                    <TextInput style={{height: 40, borderBottomColor: '#6666FC', borderBottomWidth: 1}} 
                        placeholder="Username" onChangeText={text => onChangeText(text)} value={value}/>
                    <TextInput placeholder="Password"/>
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
