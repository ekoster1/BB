import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';

export default class SkinType extends Component {
  render(){
      const goToDry = () => Actions.playlist({id : "PL6sCTSXxmmq_D7f2gH-bIJAiMDeEPrT4J"})
      const goToOily = () => Actions.playlist({id : "PL6sCTSXxmmq9AOiRZAVwcfEH33l14XCEb"})
      const goToCombo = () => Actions.playlist({id : "PL6sCTSXxmmq8SouFOjD6a3CsEI-W9uTIe"})
    return (
      <View style={styles.container}>
        <ScrollView>
            <Text style={styles.categoriesText}>Skin Type</Text>
  
          <View></View>
          <TouchableOpacity 
            style={styles.button}
            onPress={goToDry}
            >
              <Text style={styles.text}>Dry Skin</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={goToOily}
            >
              <Text style={styles.text}>Oily Skin</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={goToCombo}
            >
              <Text style={styles.text}>Combination Skin</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};

