import React, {Component} from 'react';
import { Text, View, ScrollView, Header, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';


export default class Menu extends Component {
    render(){
        return (
                
                <View style={styles.container}>
               
                <ScrollView>
                <TouchableOpacity
                style={styles.button}
                onPress={() => Actions.categories()}
                >
                <Text style={styles.categoriesText}>CATEGORIES</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                style={styles.menuButton}
                onPress={() => Actions.SkinType()}
                >
                <Text style={styles.categoriesText}>FACE SHAPE</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                style={styles.menuButton}
                onPress={() => Actions.SkinType()}
                >
                <Text style={styles.categoriesText}>SKIN TYPE</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                style={styles.menuButton}
                onPress={() => Actions.EyeShape()}
                >
                <Text style={styles.categoriesText}>EYE SHAPE</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                style={styles.menuButton}
                onPress={() => Actions.SkinTone()}
                >
                <Text style={styles.categoriesText}>SKIN TONE</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                style={styles.button}
                onPress={() => Actions.profile()}
                >
                <Text style={styles.categoriesText}>PROFILE</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                style={styles.button}
                onPress={() => Actions.login()}
                >
                <Text style={styles.categoriesText}>LOG OUT</Text>
                </TouchableOpacity>
                
                </ScrollView>

                </View>
                
                );
    }
};
