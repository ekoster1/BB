import React, {Component} from 'react';
import { Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from '../Styles';

export default class Home extends Component {
  render(){
    return (
      <Image source={{uri: 'COMP322logo.png'}} style={{width: 40, height: 40}} />
      <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.CategoriesPage()}
            >
              <Text style={styles.text}>See Categories</Text>
          </TouchableOpacity>
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