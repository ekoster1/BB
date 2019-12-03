import React, { Component } from 'react';
import { View} from 'react-native';
import {Actions, Router, Scene} from 'react-native-router-flux';

import Playlist from './Playlist';
import WatchVideo from './Video';
import CategoriesPage from './Categories';
import LoginPage from './LoginPage';
import Home from './Home';
import EyeShape from './categories/EyeShape';
import FaceShape from './categories/FaceShape';
import SkinType from './categories/SkinType';
import SkinTone from './categories/SkinTone';

const App = () => (
    <Router>
        <Scene key="root">
            <Scene key="home" component={Home} title="Home" initial/>
            <Scene key="login" component={LoginPage} title="Login"/>
            <Scene key="playlist" component={Playlist} title="Playlist"/>
            <Scene key="video" component={WatchVideo} title="Video Player"/>
            <Scene key="EyeShape" component={EyeShape} title="Eye Shape"/>
            <Scene key="FaceShape" component={FaceShape} title="Face Shape"/>
            <Scene key="SkinTone" component={SkinTone} title="Skin Tone"/>
            <Scene key="SkinType" component={SkinType} title="Skin Type"/>
            <Scene key="categories" component={CategoriesPage} title="Facial Categories"/>
        </Scene>
    </Router>
)

export default App;
/**  <Scene key="" component={} title=""/>   */