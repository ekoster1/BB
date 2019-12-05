import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, Image, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';

export default class EyeShape extends Component {
  render(){
      const goToAlmond = () => Actions.playlist({id : "PL6sCTSXxmmq-rgkZJ6D9fxbg4cY8U9N_W"})
      const goToHooded = () => Actions.playlist({id : "PL6sCTSXxmmq-LhBdOA0O_bDm6imZIwJYR"})
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.facialContainer}>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={goToAlmond}
                >
                <Image source={require('../assets/almondeyes.png')} style={styles.facialImage}/>
                <Text style={styles.text}>Almond Eyes</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={goToHooded}
                >
                <Image source={require('../assets/hoodedeyes.png')} style={styles.facialImage}/>
                <Text style={styles.text}>Hooded Eyes</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.facialContainer}>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={() => Actions.MonolidEyes()}
                >
                <Image source={require('../assets/closeeyes.png')} style={styles.facialImage}/>
                <Text style={styles.text}>Close Eyes</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={() => Actions.MonolidEyes()}
                >
                <Image source={require('../assets/closeeyes.png')} style={styles.facialImage}/>
                <Text style={styles.text}>FOURTH</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
};
