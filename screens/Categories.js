import React, {Component} from 'react';
import { Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';

export default class CategoriesPage extends Component {
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.FaceShape()}
            >
              <Text style={styles.text}>Face Shape</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.SkinTone()}
            >
              <Text style={styles.text}>Skin Tone</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.EyeShape()}
            >
              <Text style={styles.text}>Eye Shape</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.SkinTone()}
            >
              <Text style={styles.text}>Skin Tone</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};

