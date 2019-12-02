import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { WebView } from 'react-native-webview';
import {Actions} from 'react-native-router-flux';
import {styles} from '../Styles';

export default class WatchVideo extends Component<{}> {
  
  playlist(){
    Actions.playlist();
  }

  videos(){
    Actions.videos();
  }

  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <SafeAreaView style={styles.videoSafeArea}>
          {
            <WebView
              source={{ uri: "https://www.youtube.com/embed/"+this.props.video_url}}
              startInLoadingState={true}
            />
          }
      </SafeAreaView>
    );
  }
}
