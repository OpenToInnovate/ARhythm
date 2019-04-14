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
  ViroCamera,
} from 'react-viro';

var InitialARSounds = require('./sounds');

ViroAnimations.registerAnimations({
  moveToPos:{properties:{positionX:0, positionY:0, positionZ:40}, duration:4000, delay:0},
  loopRotate:{properties:{rotateY:"+=400", rotateX:"+=1200", }, duration:4000 },
  parallelAnim:[
    ["moveToPos"],["loopRotate"]
],
});

class GameObjects extends Component {
  constructor(props) {
    super(props);
 //   this.positionX = new Animated.position;
    this.state = { muted: false, paused: true, cubeVisible: true };
    this._onclicky = this._onclicky.bind(this);
    this._onclickyReset = this._onclickyReset.bind(this);
    this.props.position
    this.props.delay
  }

  render(){
    return((
      <ViroNode position={this.props.position} visible={this.state.cubeVisible} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
      <Viro3DObject
            onClick={this._onclicky}
            source={require('./res/assets/object_cube.vrx')}
            resources={[require('./res/assets/cube_diffuse.png'),
                        require('./res/assets/cube_specular.png')]}
            highAccuracyEvents={true}
            type="VRX"
            animation={{
              name: "parallelAnim",
              delay:this.props.delay,
              interruptible: true,
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
    this.setState({ cubeVisible: !this.state.cubeVisible });
  }
  
};

module.exports = GameObjects;



