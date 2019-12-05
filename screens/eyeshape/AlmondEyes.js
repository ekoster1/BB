import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';

export default class AlmondEyes extends Component {
  /**Change the navigation here:   */
    static navigationOptions = {
    title: 'Almond Eyes',
  };
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity 
            style={styles.button}
            >
              <Text style={styles.text}>VIDEO</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
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
    justifyContent: "center",
},
text:{
    color:"#6666FC",
    fontSize: 20,
}
});