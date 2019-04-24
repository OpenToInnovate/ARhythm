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
 //       <ViroCamera position={[0, 0, 0]} rotation={[0, 0, 0]} active={true}/>
import {
  ViroARScene,
  ViroNode,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroConstants,
  ViroCamera,
  Viro360Image,
  ViroText,
  ViroSound,
  ViroQuad,
  ViroMaterials,
} from 'react-viro';

import GameObjects from './3dObjects';

var InitialARScene = require('./effects');
var InitialARSounds = require('./sounds');

export default class MainGame extends Component {

  constructor(props) {
    super(props);
    this.state = { trackingComplete: false };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);

  }

  render() {
    if (this.state.trackingComplete) {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroAmbientLight color={"#ff0000"} />
        <ViroDirectionalLight color="#ffffff" direction={[0,-1,-.2]}/>
        <GameObjects position={[0,0,-30]} delay={0} soundfile={require('./res/music/ripple.wav')}/>
        <GameObjects position={[5,6,-30]} delay={500} soundfile={require('./res/music/ripple.wav')}/>
        <GameObjects position={[2,1,-30]} delay={1000} soundfile={require('./res/music/ripple.wav')}/>         
        <GameObjects position={[-5,2,-30]} delay={2000} soundfile={require('./res/music/ripple.wav')}/>
        <GameObjects position={[4,4,-30]} delay={1200} soundfile={require('./res/music/ripple.wav')}/>
        <GameObjects position={[1,-4,-30]} delay={800}soundfile={require('./res/music/ripple.wav')}/>       
        <ViroNode>{InitialARScene.getSmoke()}</ViroNode>
        <ViroNode>{InitialARSounds.startBGM()}</ViroNode> 
      </ViroARScene>
    );
    } else {
      return (
        <ViroARScene onTrackingUpdated={this._onInitialized} >
          <ViroText text="Calibrating..." width={2} height={2} position={[0, 0, -2]} style={styles.genericTextStyle} />
        </ViroARScene>
      );
    }
  }

  /*
  getSmoke
  getSnow
  getBubbles
  getFireWorks
  */

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({ trackingComplete: true });
      //
    } else if (state == ViroConstants.TRACKING_NONE) {
      // TODO: Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  genericTextStyle: {
    fontFamily: 'Arial',
    fontSize: 15,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = MainGame;
