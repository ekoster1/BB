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
        if (Actions.currentScene == 'login') {
            
            return (
                    <TouchableOpacity onPress={Actions.pop} style={[styles.navBarItem, { paddingLeft: 15, paddingTop: 10, }]}>
                    <Image style={{ width: 25, height: 30 }} resizeMode="contain" source={require('./assets/backicon.png')} />
                    </TouchableOpacity>
                    
                    );
        }

        else if (Actions.currentScene == 'menu') {
            return (
                    <View style={[styles.navBarItem, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
                    
                    <TouchableOpacity onPress={() => Actions.pop()} style={[styles.navBarItem, { paddingLeft: 20, paddingTop:7, paddingRight: 0 }]}>
                    <Image
                    style={{ width: 25, height: 50 }}
                    resizeMode="contain"
                    source={require('./assets/xicon.png')}
                    />
                    </TouchableOpacity>
                    
                    <TouchableOpacity  style={[styles.navBarItem, { paddingLeft: 0, paddingTop: 7, }]}>
                    <Image style={{ width: 25, height: 30 }} resizeMode="contain"  />
                    </TouchableOpacity>
                    
                    
                    </View>
                    );
        }
        else {
            return (
                    
                    
                    <View style={[styles.navBarItem, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
                    
                    <TouchableOpacity onPress={() => Actions.menu()} style={[styles.navBarItem, { paddingLeft: 5, paddingTop:7 }]}>
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
    }
    
    _renderMiddle() {
        return (
                <View style={styles.navBarItem}>
                <Text></Text>
                </View>
                );
    }
    
    _renderRight() {
        if (Actions.currentScene != 'login' && Actions.currentScene != 'profile') {
        return (
                <View style={[styles.navBarItem, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
                <TouchableOpacity onPress={() => Actions.profile()} style={{ paddingRight: 25, paddingTop: 20, }}>
                <Image style={{ width: 35, height: 50 }} resizeMode="contain" source={require('./assets/profileicon.png')} />
                </TouchableOpacity>
                </View>
                );
        }
        else {
            return (
                    <View style={[styles.navBarItem, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
                    <TouchableOpacity onPress={() => (console.log('profile'))} style={{ paddingRight: 25, paddingTop: 20, }}>
                    <Image style={{ width: 35, height: 50 }} resizeMode="contain" />
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
