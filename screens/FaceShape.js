import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';

export default class FaceShape extends Component {
  render(){
      const goToSquare = () => Actions.playlist({id : "PL6sCTSXxmmq-rgkZJ6D9fxbg4cY8U9N_W"})
      const goToCircle = () => Actions.playlist({id : "PL6sCTSXxmmq-rgkZJ6D9fxbg4cY8U9N_W"})
    return (
      <View style={styles.container}>
        <ScrollView>
            <Text style={styles.categoriesText}>Face Shape</Text>
           <Text style={styles.categoriesText}></Text>
            <View style={styles.facialContainer}>
            <TouchableOpacity
            style={styles.facialButton}
            onPress={goToSquare}
            >
            <Image source={require('../assets/squareface.png')} style={styles.faceShapeImage}/>
            <Text style={styles.imageText}>Square</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.facialButton}
            onPress={goToCircle}
            >
            <Image source={require('../assets/circleface.png')} style={styles.faceShapeImage}/>
            <Text style={styles.imageText}>Circle</Text>
            </TouchableOpacity>
            </View>
            
            <View style={styles.facialContainer}>
            <TouchableOpacity
            style={styles.facialButton}
            onPress={goToSquare}
            >
            <Image source={require('../assets/ovalface.png')} style={styles.faceShapeImage}/>
            <Text style={styles.imageText}>Oval</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.facialButton}
            onPress={goToCircle}
            >
            <Image source={require('../assets/heartface.png')} style={styles.faceShapeImage}/>
            <Text style={styles.imageText}>Heart</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
    );
  }
};

