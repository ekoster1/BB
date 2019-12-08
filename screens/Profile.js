import React, {Component} from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';
import Router from './Router'


export default class Profile extends Component {
    render(){
        return (
                <View style={styles.container}>
                
                <Image source={require('../assets/profileicon.png')} style={styles.profileImage} />
                <View style={{
                flexDirection:'column',
                flex:.5,
                paddingTop: 100,
                }}>
              
                <Text style={styles.profileText}>Username: </Text>
                <Text style={styles.profileText}>Password: </Text>
                 <Text style={styles.profileText}></Text>
                 <Text style={styles.profileText}>Eye Shape: </Text>
                 <Text style={styles.profileText}>Face Shape: </Text>
                 <Text style={styles.profileText}>Skin Tone: </Text>
                 <Text style={styles.profileText}>Skin Type: </Text>
                
                <View style={{
//                flexDirection:'column',
//                flex:.5,
                paddingTop: 80,
                }}>
                <TouchableOpacity
                style={styles.homeButton}
                onPress={() => Actions.categories()}
                >
                <Text style={styles.text}>Edit Profile</Text>
                </TouchableOpacity>
                
                </View>
                </View>
                </View>
                );
    }
};
