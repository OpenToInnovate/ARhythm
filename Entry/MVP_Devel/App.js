/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  WebView,
} from 'react-native';

import {
  ViroARSceneNavigator,
} from 'react-viro';

/* 
// TODO: Figure out how to use the updated webview since the one we're currently using is being depricated
import {
  WebView,
} from 'react-native-webview'; //'react-native-webview-android';
*/

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey:"BC0A8237-6298-4CCB-8B24-6662DC59382F",
}

// Sets the default scene you want for AR and VR
var InitialARScene = require('./js/MainGame'); //HelloWorldSceneAR
//var InitialVRScene = require('./js/HelloWorldScene');

var UNSET = "UNSET";
var VR_NAVIGATOR_TYPE = "VR";
var AR_NAVIGATOR_TYPE = "AR";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType : defaultNavigatorType,
      sharedProps : sharedProps
    }
    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    this._getVRNavigator = this._getVRNavigator.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
    this._exitViro = this._exitViro.bind(this);
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
      if (this.state.navigatorType == UNSET) {
        return this._getExperienceSelector();
      } else if (this.state.navigatorType == VR_NAVIGATOR_TYPE) {
        return this._getVRNavigator();
      } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
        return this._getARNavigator();
      }
  }

  // Presents the user with a choice of an AR or VR experience
  _getExperienceSelector() {
    return (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >

          <TouchableOpacity style={localStyles.buttons} activeOpacity={0.5}
            onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'} >
            <Image source={require('./js/res/LogoMakr_ARhythm.png')} style={localStyles.ImageIconStyle}/>
          </TouchableOpacity>

          <TouchableOpacity style={localStyles.buttons} activeOpacity={0.5}
            onPress={this._getExperienceButtonOnPress(VR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'} >
            <Image source={require('./js/res/LogoMakr_FindCollabs_Dreamt_A3.png')} style={localStyles.ImageIconStyle}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    return (
      <ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}} />
    );
  }
  
  // Returns the ViroSceneNavigator which will start the VR experience
  _getVRNavigator() {
    return (
      <WebView source={{uri: 'http://www.findcollabs.com'}} style={{marginTop: 20}}/>
    );
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType : navigatorType
      })
    }
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType : UNSET
    })
  }
}

var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "white",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "white",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "white",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 16
  },
  buttons : {
    height: 160,
    width: 300,
    paddingTop:1,
    paddingBottom:1,
    marginTop: 1,
    marginBottom: 1,
    backgroundColor:'#ffffff',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  ImageIconStyle: {
    padding: 0,
    margin: 0,
    height: 160,
    width: 300,
    resizeMode: 'stretch',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffffff',
  }
});

module.exports = ViroSample
