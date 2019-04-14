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
} from 'react-viro';

var InitialARSounds = require('./sounds');

class GameObjects extends Component {
  constructor(props) {
    super(props);
    this.state = { paused: true };
    this._onclicky = this._onclicky.bind(this);
  }

  render(){
    return((
      <ViroNode position={[0, 0, -2]} rotation={[10, 45, 0]} scale={[.5, .5, .5]}>
      <Viro3DObject
            onClick={this._onclicky}
            source={require('./res/assets/object_cube.vrx')}
            resources={[require('./res/assets/cube_diffuse.png'),
                        require('./res/assets/cube_specular.png')]}
            type="VRX"
      />
      <ViroSound paused={this.state.paused} onFinish={this._onclicky} muted={false} 
            source={require('./res/music/preview2.wav')} loop={false} volume={1.0} 
      /> 
      </ViroNode>
      ));
  }

  _onclicky() {
    this.setState({ paused: !this.state.paused });
  }
1};

module.exports = GameObjects;



