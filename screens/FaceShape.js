import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';

export default class FaceShape extends Component {
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <View></View>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.HeartFace()}
            >
              <Text style={styles.text}>Heart-shaped Face</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.OvalFace()}
            >
              <Text style={styles.text}>Oval-shaped Face</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.RoundFace()}
            >
              <Text style={styles.text}>Round-shaped Face</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};

