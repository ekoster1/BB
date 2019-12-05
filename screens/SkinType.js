import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';

export default class SkinType extends Component {
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <View></View>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.DrySkin()}
            >
              <Text style={styles.text}>Dry Skin</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.OilySkin()}
            >
              <Text style={styles.text}>Oily Skin</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.ComboSkin()}
            >
              <Text style={styles.text}>Combo Skin</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};

