import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from '../Styles';

export default class SkinTone extends Component {
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <View></View>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.CoolTone()}
            >
              <Text style={styles.text}>Cool Tone</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.NeutralTone()}
            >
              <Text style={styles.text}>Neutral Tone</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.WarmTone()}
            >
              <Text style={styles.text}>Warm Tone</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};

