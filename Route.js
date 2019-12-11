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
import {Actions, Router, Scene, Stack, Drawer, SideMenu} from 'react-native-router-flux';
import CardStackStyleInterpolator from 'react-navigation';



import Playlist from './screens/Playlist';
import WatchVideo from './screens/Video';
import CategoriesPage from './screens/Categories';
import LoginPage from './screens/LoginPage';
import Home from './screens/Home';
import EyeShape from './screens/EyeShape';
import FaceShape from './screens/FaceShape';
import SkinType from './screens/SkinType';
import SkinTone from './screens/SkinTone';
import CustomNavBar from './CustomNavBar';
import Profile from './screens/Profile';
import Menu from './screens/Menu';

export default class Routes extends Component {
  render(){
      return(
             <Router
//             navigationBarStyle={{backgroundColor:'#8c8cff'}} tintColor="white"
//             headerRight = {<Icon size={24} color="white" name="user" />}
//             rightButtonIconStyle={{ width: 44, height: 44 }}>
//             rightButtonImage={<Icon name="user"/>}
             >
             
             <Stack key="root" navBar={CustomNavBar} >
                <Scene  key="home" component={Home} hideNavBar={true} title="Home" initial/>
                <Scene key="categories" component={CategoriesPage} title="Categories"/>
                <Scene key="EyeShape" component={EyeShape} title="Eye Shape"/>
                <Scene key="FaceShape" component={FaceShape} title="Face Shape"/>
                <Scene key="SkinTone" component={SkinTone} title="Skin Tone"/>
                <Scene key="SkinType" component={SkinType} title="Skin Type"/>
                <Scene key="playlist" component={Playlist} title="Playlist"/>
                <Scene key="video" component={WatchVideo} title="Video Player"/>
          
             <Scene  key="login" component={LoginPage} title="Login" />
             <Scene key="profile" component={Profile} title="Profile" />
             <Drawer key ="menu" component={Menu} transitionConfig={() => ({screenInterpolator: CardStackStyleInterpolator.forVertical})} title="Menu" />
             
             
             

             
            </Stack>
             
             
        </Router>
      )
  }
}
