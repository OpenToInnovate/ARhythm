'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroSound,
  ViroSpatialSound,
  ViroConstants,
} from 'react-viro';

import resolveAssetSource from "resolveAssetSource"; 
ViroSound.preloadSounds({ 
  "song" : resolveAssetSource(require('./res/MrBlueSky/Song.mp3')),
  "sfx1" : resolveAssetSource(require('./res/preview.wav')),
  "sfx2" : resolveAssetSource(require('./res/preview2.wav')),
  "sfx3" : resolveAssetSource(require('./res/ripple.wav')),
  "sfx4" : resolveAssetSource(require('./res/drum_bass.wav'))
});

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  /*
        <ViroSound paused={false}
                  muted={false}
                  source={require('./res/MrBlueSky/Song.mp3')}
                  loop={false}
                  volume={1.0}/>
  */

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
        <ViroSound paused={false} muted={false} source={'song'} loop={false} volume={0.2}/>
      </ViroARScene>

    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldSceneAR;
