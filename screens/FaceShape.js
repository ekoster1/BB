import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';

export default class FaceShape extends Component {
  render(){
      const goToSquare = () => Actions.playlist({id : "PL6sCTSXxmmq9ZQrJK_NqJ79hQ5rUPWW5s"})
      const goToCircle = () => Actions.playlist({id : "PL6sCTSXxmmq_NZXxek9-wRlKfVjRpfZA_"})
      const goToHeart = () => Actions.playlist({id : "PL6sCTSXxmmq8yzI6G5nPySe4qK_6JYYcv"})
      const goToOval = () => Actions.playlist({id : "PL6sCTSXxmmq9UtNGAjO34d0TmxCbu-Kr5"})
    return (
      <View style={styles.container}>
            <View style={{
            flexDirection:'column',
            flex:1,
            padding: 8,
            }}>
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
            onPress={goToOval}
            >
            <Image source={require('../assets/ovalface.png')} style={styles.faceShapeImage}/>
            <Text style={styles.imageText}>Oval</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.facialButton}
            onPress={goToHeart}
            >
            <Image source={require('../assets/heartface.png')} style={styles.faceShapeImage}/>
            <Text style={styles.imageText}>Heart</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
            </View>
    );
  }
};

