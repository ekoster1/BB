import React, {Component} from 'react';
import { Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from '../Styles';

export default class Home extends Component {
  render(){
    return (
      <Image source={{uri: 'COMP322logo.png'}} style={{width: 40, height: 40}} />
    );
  }
};
  
