import React, {Component} from 'react';
import { Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';

export default class CategoriesPage extends Component {
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text style={styles.categoriesText}>CATEGORIES</Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.FaceShape()}
            >
              <Text style={styles.categoriesText}>FACE SHAPE</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.SkinType()}
            >
              <Text style={styles.categoriesText}>SKIN TYPE</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.EyeShape()}
            >
              <Text style={styles.categoriesText}>EYE SHAPE</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => Actions.SkinTone()}
            >
              <Text style={styles.categoriesText}>SKIN TONE</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};

