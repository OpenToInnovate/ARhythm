/*
* Copyright (C) 2019 Tony G - https://github.com/OpenToInnovate/
* 
* This file may be used under the terms of the GNU General Public License
* version 3 as published by the Free Software Foundation and appearing in
* the file LICENSE.GPL included in the packaging of this file.
* 
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
* 
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroNode,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroConstants,
  ViroSound,
  ViroQuad,
  ViroMaterials,
} from 'react-viro';

var InitialARScene = require('./effects');
var InitialARObjects = require('./3dObjects');
var InitialARSounds = require('./sounds');
var Cube1Ref;

export default class MainGame extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Loading Game..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this._onclicky = this._onclicky.bind(this);
  }

//       <ViroNode>{InitialARSounds.startGBM()}</ViroNode> 
  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroAmbientLight color={"#ff0000"} />
        <ViroDirectionalLight color="#ffffff" direction={[0,-1,-.2]}/>
        <ViroNode ref={Cube1Ref} onClick={this._onclicky} position={[0, 0, -2]} rotation={[10, 45, 0]} scale={[.5, .5, .5]}>{InitialARObjects.getTronCube()}</ViroNode>   
        <ViroNode>{InitialARSounds.playSfx4()}</ViroNode>    
        <ViroNode>{InitialARScene.getSmoke()}</ViroNode> 
      </ViroARScene>
    );
  }

  _onclicky() {
//    <ViroNode>{InitialARSounds.startGBM()}</ViroNode> 
//    InitialARSounds.playSfx1();
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
