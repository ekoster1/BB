import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
                                 container: {
                                 height: 100,
//                                 Platform.OS === 'ios' ? 64 : 54,
                                 flexDirection: 'row',
                                 paddingTop: 20,
                                 backgroundColor: '#CCCCFF',
                                 },
                                 navBarItem: {
                                 flex: 1,
                                 justifyContent: 'center',
                                 },
                                 });

export default class CustomNavBar extends React.Component {
   
    
    _renderLeft() {
        if (Actions.currentScene != 'login') {
            return (
                    
                    
                    <View style={[styles.navBarItem, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
                    
                    <TouchableOpacity onPress={() => {this.drop()}} style={[styles.navBarItem, { paddingLeft: 5, paddingTop:7 }]}>
                    <Image
                    style={{ width: 50, height: 70 }}
                    resizeMode="contain"
                    source={require('./assets/hamburgericon.png')}
                    />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={Actions.pop} style={[styles.navBarItem, { paddingLeft: 5, paddingTop: 7, }]}>
                    <Image style={{ width: 25, height: 30 }} resizeMode="contain" source={require('./assets/backicon.png')} />
                    </TouchableOpacity>
                    
                    
                    </View>
                    );
        }
        else {
        return (
                <TouchableOpacity onPress={Actions.pop} style={[styles.navBarItem, { paddingLeft: 15, paddingTop: 10, }]}>
                <Image style={{ width: 25, height: 30 }} resizeMode="contain" source={require('./assets/backicon.png')} />
                </TouchableOpacity>
                
                );
        }
    }
    
    _renderMiddle() {
        return (
                <View style={styles.navBarItem}>
                <Text></Text>
                </View>
                );
    }
    
    _renderRight() {
        if (Actions.currentScene != 'login') {
        return (
                <View style={[styles.navBarItem, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
                <TouchableOpacity onPress={() => console.log('Share')} style={{ paddingRight: 25, paddingTop: 20, }}>
                <Image style={{ width: 35, height: 50 }} resizeMode="contain" source={require('./assets/profileicon.png')} />
                </TouchableOpacity>
                </View>
                );
        }
    }
    
    render() {
        
            dinamicStyle = { backgroundColor: '#FFF' };
        
        return (
                <View style={[styles.container, dinamicStyle]}>
                {this._renderLeft()}
                {this._renderMiddle()}
                {this._renderRight()}
                </View>
                );
    }
}
