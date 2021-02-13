import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, Image, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';

export default class EyeShape extends Component {
  render(){
      const goToAlmond = () => Actions.playlist({id : "PL6sCTSXxmmq-rgkZJ6D9fxbg4cY8U9N_W"})
      const goToHooded = () => Actions.playlist({id : "PL6sCTSXxmmq-LhBdOA0O_bDm6imZIwJYR"})
      const goToClose = () => Actions.playlist({id : "PL6sCTSXxmmq_on8Sd73hPIidvHWt1BUiq"})
      const goToUpturned = () => Actions.playlist({id : "PL6sCTSXxmmq8jQIJrAw6z0B7cxEWeEyIR"})
      const goToWide = () => Actions.playlist({id : "PL6sCTSXxmmq901X_Dq2BGxxfZdKLRCh-t"})
      
    return (
      <View style={styles.container}>
           
            <View style={{
            flexDirection:'column',
            flex:1,
            padding: 8,
            }}>
            
        <ScrollView>
            <Text style={styles.categoriesText}>Eye Shape</Text>
            <Text style={styles.categoriesText}></Text>
            
          <View style={styles.facialContainer}>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={goToAlmond}
                >
                <Image source={require('../assets/almondeyes.png')} style={styles.facialImage}/>
                <Text style={styles.imageText}>Almond Eyes</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={goToHooded}
                >
                <Image source={require('../assets/hoodedeyes.png')} style={styles.facialImage}/>
                <Text style={styles.imageText}>Hooded Eyes</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.facialContainer}>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={goToClose}
                >
                <Image source={require('../assets/closeeyes.png')} style={styles.facialImage}/>
                <Text style={styles.imageText}>Close Eyes</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={goToUpturned}
                >
                <Image source={require('../assets/upturnedeyes.png')} style={styles.facialImage}/>
                <Text style={styles.imageText}>Upturned Eyes</Text>
            </TouchableOpacity>
          </View>
            <View style={styles.facialContainer}>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={goToWide}
                >
                <Image source={require('../assets/wideeyes.png')} style={styles.facialImage}/>
                <Text style={styles.imageText}>Wide Eyes</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.facialButton}
                onPress={() => Actions.MonolidEyes()}
                >
                <Image source={require('../assets/downturnedeyes.png')} style={styles.facialImage}/>
                <Text style={styles.imageText}>Downturned Eyes</Text>
            </TouchableOpacity>
          </View>

            <View style={styles.facialContainer}>
            <TouchableOpacity
            style={styles.facialButton}
            onPress={goToAlmond}
            >
            <Image source={require('../assets/monolideyes.png')} style={styles.facialImage}/>
            <Text style={styles.imageText}>Monolid Eyes</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.facialButton}
            onPress={goToHooded}
            >
            <Image source={require('../assets/protrudingeyes.png')} style={styles.facialImage}/>
            <Text style={styles.imageText}>Protruding Eyes</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
            </View>
            
    );
  }
};
