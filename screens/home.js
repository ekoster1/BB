import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, ScrollView, Header, TouchableOpacity } from 'react-native';

export default class CategoriesPage extends Component {
  render(){
    return (
      <Image source={{uri: 'COMP322logo.png'}} style={{width: 40, height: 40}} />
    );
  }
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CCCCFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      margin:20,
      padding:10,
      backgroundColor:"#F1E7E5",
      borderRadius: 10,
      width: 350,
      borderColor: "#FEBA95",
      borderWidth: 2,
      alignItems: "center",
      justifyContent: "center"
  }
