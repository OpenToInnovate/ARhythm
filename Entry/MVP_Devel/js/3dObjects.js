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

import {
  ViroNode,
  Viro3DObject,
  ViroSound,
  ViroAnimations,
} from 'react-viro';

var InitialARSounds = require('./sounds');

ViroAnimations.registerAnimations({
  loopRotate:{
    properties:{
      rotateY:"+=95",
      rotateX:"+=31",
    }, duration:600
  }
});

class GameObjects extends Component {
  constructor(props) {
    super(props);
    this.state = { muted: false, paused: true, cubeVisible: true };
    this._onclicky = this._onclicky.bind(this);
    this._onclickyReset = this._onclickyReset.bind(this);
  }

  render(){
    return((
      <ViroNode position={[0, 0, -2]} visible={this.state.cubeVisible} rotation={[10, 45, 0]} scale={[.5, .5, .5]}>
      <Viro3DObject
            onClick={this._onclicky}
            source={require('./res/assets/object_cube.vrx')}
            resources={[require('./res/assets/cube_diffuse.png'),
                        require('./res/assets/cube_specular.png')]}
            highAccuracyEvents={true}
            type="VRX"
            animation={{
              name: "loopRotate",
              delay:0,
              interruptible: false,
              loop:true,
              run:true,
            }}
            
      />
      <ViroSound paused={this.state.paused} onFinish={this._onclickyReset} muted={this.state.muted} 
            source={require('./res/music/ripple.wav')} loop={false} volume={1.0} 
      /> 
      </ViroNode>
      ));
  }

  _onclicky() {
    this.setState({ paused: !this.state.paused });
  }

  _onclickyReset() {
    this.setState({ paused: !this.state.paused });
 //   this.setState({ muted: false });
 //   this.setState({ cubeVisible: !this.state.cubeVisible });
  }
  
};

module.exports = GameObjects;



