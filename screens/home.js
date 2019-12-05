//import React, {Component} from 'react';
//import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';
//
//<Image source={{uri: 'COMP322logo.png'}} style={{width: 40, height: 40}} />
//
//
//const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      backgroundColor: '#CCCCFF',
//      alignItems: 'center',
//      justifyContent: 'center',
//    },
//    button:{
//      margin:20,
//      padding:10,
//      backgroundColor:"#F1E7E5",
//      borderRadius: 10,
//      width: 350,
//      borderColor: "#FEBA95",
//      borderWidth: 2,
//      alignItems: "center",
//      justifyContent: "center",
//                                 },
//                                 }

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
