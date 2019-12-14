import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';

export default class SkinTone extends Component {
  render(){
      const goToPale = () => Actions.playlist({id : "PL6sCTSXxmmq9eNoM64UQJSAG62LdYSbsN"})
      const goToDark = () => Actions.playlist({id : "PL6sCTSXxmmq8Equ7ZwyFJz4McQLculiRp"})
      const goToTan = () => Actions.playlist({id : "PL6sCTSXxmmq-aTwosuY8epoQRSYg9ZIAA"})

    return (
      <View style={styles.container}>
        <ScrollView>
          <View></View>
          <TouchableOpacity 
            style={styles.button}
            onPress={goToPale}
            >
              <Text style={styles.text}>Pale/Light</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={goToTan}
            >
              <Text style={styles.text}>Tan</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={goToDark}
            >
              <Text style={styles.text}>Dark</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};

