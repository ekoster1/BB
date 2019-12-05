import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {styles} from './Styles';

const MAX_RESULT = 15;
const PLAYLIST_ID = "PL6sCTSXxmmq-LhBdOA0O_bDm6imZIwJYR";
const API_KEY = "API_KEY_placeholder";

export default class Playlist extends Component<{}> {
  
  playlist(){
    Actions.playlist();
  }

  watchVideo(video_url){
    Actions.watchvideo({video_url: video_url});
  }

  componentWillMount() {
    this.fetchPlaylistData();
  }

  fetchPlaylistData = async () => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULT}&part=snippet%2CcontentDetails&key=${API_KEY}`);
    const json = await response.json();
    this.setState({ videos: json['items']});
    console.log(this.state.videos)
  };

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    }
  }

  render() {
    const videos = this.state.videos;

    return (
      <SafeAreaView style={styles.safeArea}>
            <FlatList
              data={this.state.videos}
              renderItem={
                ({item}) =>
                <TouchableOpacity
                    style={styles.demacate}
                    onPress={() => this.watchVideo(item.contentDetails.videoId)}
                >
                <Text
                  style={styles.item}
                >
                {item.snippet.title}
                </Text>
                </TouchableOpacity>
              }
            />
      </SafeAreaView>
    );
  }
}
