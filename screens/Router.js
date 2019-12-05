import React, { Component } from 'react';
import { View} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';

import Playlist from './Playlist';
import WatchVideo from './Video';
import CategoriesPage from './Categories';
import LoginPage from './LoginPage';
import Home from './Home';
import EyeShape from './EyeShape';
import FaceShape from './FaceShape';
import SkinType from './SkinType';
import SkinTone from './SkinTone';

const App = () => (
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
)

export default App;
/**  <Scene key="" component={} title=""/>   */
