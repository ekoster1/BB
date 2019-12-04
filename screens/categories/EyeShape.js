import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from '../Styles';

export default class EyeShape extends Component {
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <View></View>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.Playlist()}
            >
              <Text style={styles.text}>Almond Eyes</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.HoodedEyes()}
            >
              <Text style={styles.text}>Hooded Eyes</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.MonolidEyes()}
            >
              <Text style={styles.text}>Monolid Eyes</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};