import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, Image, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from '../Styles';

export default class EyeShape extends Component {
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <View></View>
          <TouchableOpacity 
            style={styles.facialButton}
            onPress={() => Actions.playlist()}
            >
            <Image source={require('../../assets/hoodedeyes.png')} style={styles.facialImage}/>
            <Text style={styles.text}>Almond Eyes</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.facialButton}
            onPress={() => Actions.HoodedEyes()}
            >
              <Image source={require('../../assets/hoodedeyes.png')} style={styles.facialImage}/>
              <Text style={styles.text}>Hooded Eyes</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.facialButton}
            onPress={() => Actions.MonolidEyes()}
            >
              <Image source={require('../../assets/closeeyes.png')} style={styles.facialImage}/>
              <Text style={styles.text}>Close Eyes</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};
