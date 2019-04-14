'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroNode,
  ViroAmbientLight,
  ViroDirectionalLight,
  Viro3DObject,
  ViroConstants,
} from 'react-viro';

var InitialARScene = require('./effects');

export default class MainGame extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Loading Game..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroAmbientLight color={"#aaaaaa"} />
        <ViroDirectionalLight color="#ffffff" direction={[0,-1,-.2]}/>
          <ViroNode position={[0, 0, -2]} scale={[.5, .5, .5]}>
            <Viro3DObject
              source={require('./res/assets/object_cube.vrx')}
              resources={[require('./res/assets/cube_diffuse.png'),
                          require('./res/assets/cube_specular.png')]}
              type="VRX"
              />
        </ViroNode>
        <ViroNode>{InitialARScene.getSmoke()}</ViroNode>        
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      //
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 15,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = MainGame;
