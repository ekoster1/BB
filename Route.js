/**
 * import React, { Component } from 'react';
import {Platform} from 'react-native';

// import components from react-native-router-flux
import {Router, Stack, Scene} from 'react-native-router-flux';

// import our screens as components
import Home from './screens/Home';
import WatchVideo from './screens/Video';

export default class Routes extends Component<{}> {

  render() {
    return(
      <Router>
          <Stack key="root">
            <Scene key="home" component={Home} title="Hooded Eyes" />
            <Scene key="watchvideo" component={WatchVideo} title="View Video"/>
          </Stack>
      </Router>
      )
  }
}
 */

import React, { Component } from 'react';
import { View, Platform} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';

import Playlist from './Playlist';
import WatchVideo from './Video';
import CategoriesPage from './Categories';
import LoginPage from './LoginPage';
import Home from './Home';
import EyeShape from './categories/EyeShape';
import FaceShape from './categories/FaceShape';
import SkinType from './categories/SkinType';
import SkinTone from './categories/SkinTone';

export default class Routes extends Component {
  render(){
    <Router>
        <Stack key="root">
            <Scene key="home" component={Home} title="Home" initial/>
            <Scene key="categories" component={CategoriesPage} title="Facial Categories"/>
            <Scene key="EyeShape" component={EyeShape} title="Eye Shape"/>
            <Scene key="FaceShape" component={FaceShape} title="Face Shape"/>
            <Scene key="SkinTone" component={SkinTone} title="Skin Tone"/>
            <Scene key="SkinType" component={SkinType} title="Skin Type"/>
            <Scene key="playlist" component={Playlist} title="Playlist"/>
            <Scene key="video" component={WatchVideo} title="Video Player"/>
            <Scene key="login" component={LoginPage} title="Login"/>
        </Stack>
    </Router>
  }
}