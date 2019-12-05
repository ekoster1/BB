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
           
            <View style={{
            flexDirection:'column',
            flex:1,
            padding: 8,
            }}>
            
        <ScrollView>
            
          <View style={styles.facialContainer}>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={goToAlmond}
                >
                <Image source={require('../assets/almondeyes.png')} style={styles.facialImage}/>
                <Text style={styles.imageText}>almond eyes</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={goToHooded}
                >
                <Image source={require('../assets/hoodedeyes.png')} style={styles.facialImage}/>
                <Text style={styles.imageText}>hooded eyes</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.facialContainer}>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={() => Actions.MonolidEyes()}
                >
                <Image source={require('../assets/closeeyes.png')} style={styles.facialImage}/>
                <Text style={styles.imageText}>close eyes</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={() => Actions.MonolidEyes()}
                >
                <Image source={require('../assets/upturnedeyes.png')} style={styles.facialImage}/>
                <Text style={styles.imageText}>upturned eyes</Text>
            </TouchableOpacity>
          </View>
            <View style={styles.facialContainer}>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={() => Actions.MonolidEyes()}
                >
                <Image source={require('../assets/wideeyes.png')} style={styles.facialImage}/>
                <Text style={styles.imageText}>wide eyes</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={() => Actions.MonolidEyes()}
                >
                <Image source={require('../assets/downturnedeyes.png')} style={styles.facialImage}/>
                <Text style={styles.imageText}>downturned eyes</Text>
            </TouchableOpacity>
          </View>
                        <View style={styles.facialContainer}>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={() => Actions.MonolidEyes()}
                >
                <Image source={require('../assets/bigeyes.png')} style={styles.facialImage}/>
                <Text style={styles.imageText}>big eyes</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={() => Actions.MonolidEyes()}
                >
                <Image source={require('../assets/smalleyes.png')} style={styles.facialImage}/>
                <Text style={styles.imageText}>small eyes</Text>
            </TouchableOpacity>
          </View>
            <View style={styles.facialContainer}>
            <TouchableOpacity
            style={styles.facialButton}
            onPress={goToAlmond}
            >
            <Image source={require('../assets/almondeyes.png')} style={styles.facialImage}/>
            <Text style={styles.imageText}>monolid eyes</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.facialButton}
            onPress={goToHooded}
            >
            <Image source={require('../assets/hoodedeyes.png')} style={styles.facialImage}/>
            <Text style={styles.imageText}>deep set eyes</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
            </View>
    );
  }
};
