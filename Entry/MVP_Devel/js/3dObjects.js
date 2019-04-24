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
  ViroParticleEmitter,
  ViroCamera,
} from 'react-viro';


var InitialARSounds = require('./sounds');
//(Math.floor(Math.random() * 5) + 1)
ViroAnimations.registerAnimations({
  moveToPos:{properties:{positionX:((Math.floor(Math.random() * 80) -40 )/10), positionY:((Math.floor(Math.random() * 50) - 20)/10), positionZ:80}, duration:5000, delay:0},
  resetToRand:{properties:{positionX:((Math.floor(Math.random() * 80) -40 )/10), positionY:((Math.floor(Math.random() * 50) - 20)/10), positionZ:-40}, duration:0, delay:1000},
  DelayFun:{properties:{rotateY:"+=2", rotateX:"+=2", }, duration:0, delay:8000},
  loopRotate:{properties:{rotateY:"+=400", rotateX:"+=1800", }, duration:5000 },
  parallelAnim:[
    ["moveToPos"],["loopRotate","resetToRand"]],
  sequenceResetAnim:[
    ["resetToRand","parallelAnim"]
  ],
});

class GameObjects extends Component {
  constructor(props) {
    super(props);
 //   this.positionX = new Animated.position;
    this.state = { muted: false, paused: true, cubeVisible: true };
    this._onclicky = this._onclicky.bind(this);
    this._onhovery = this._onhovery.bind(this);
    this._resetAnimation = this._resetAnimation.bind(this);
    this._onclickyReset = this._onclickyReset.bind(this);
    this.props.position
    this.props.delay
    this.props.soundfile
  }
//            onHover={this._onhovery}

  render(){
    return((
      <ViroNode position={this.props.position} rotation={[0, 0, 0]} scale={[1.0, 1.0, 1.0]}>
      <Viro3DObject
            onClick={this._onclicky}
            source={require('./res/assets/object_cube.vrx')}
            resources={[require('./res/assets/cube_diffuse.png'),
                        require('./res/assets/cube_specular.png')]}
            highAccuracyEvents={false}
            visible={this.state.cubeVisible}
            type="VRX"
            animation={{
              name: "parallelAnim",
              delay:this.props.delay,
              interruptible: false,
              loop:true,
              run:true,
            }}
      />
          <ViroParticleEmitter
              position={this.props.position}
              scale={[1, 1, 1]}
              duration={1100}
              delay={0}
              delay={0}
              visible={!this.state.cubeVisible}
              run={!this.state.cubeVisible}
              loop={true}
              fixedToEmitter={false}

              image={{
                source:require("./res/particle_fire.png"),
                height:2,
                width:2,
              }}

              spawnBehavior={{
                particleLifetime:[500,500],
                emissionRatePerSecond:[200,200],
                maxParticles:300,
                spawnVolume:{
                  shape:"Sphere",
                  params:[.6, .6, .6],
                  spawnOnSurface:true
                },
              }}
              animation={{
                name: "parallelAnim",
                delay:this.props.delay,
                interruptible: false,
                loop:true,
                run:true,
              }}
              particleAppearance={{
                opacity:{
                  initialRange:[0.0, 0.0],
                  interpolation:[
                    {endValue:0.9, interval:[0,200]},
                    {endValue:0.0, interval:[900,1500]}
                  ]
                },
              }}

              particlePhysics={{
                velocity:{initialRange:[[-4,4,0], [-2,-2,0]]},
                acceleration:{initialRange:[[0,0,0], [0,0,0]]}
              }}
          />
      <ViroSound paused={this.state.paused} onFinish={this._onclickyReset} muted={this.state.muted} 
            source={this.props.soundfile} loop={false} volume={1.0} 
      /> 
      </ViroNode>
      ));
  }

  _resetAnimation() {
    this.setState({ cubeVisible: false });
    this.setState({
      currentAnim:"sequenceResetAnim", 
    });
    this.setState({ cubeVisible: true });
  }

  _onclicky() {
    this.setState({ paused: !this.state.paused });
    this.setState({ cubeVisible: !this.state.cubeVisible });
  }

  _onhovery() {
    this.setState({ paused: !this.state.paused });
    this.setState({ cubeVisible: !this.state.cubeVisible });   
  }

  _onclickyReset() {
    this.setState({ paused: !this.state.paused });
    this.setState({ currentAnim:"DelayFun"});
    
    this.setState({ cubeVisible: true });
    this.setState({ currentAnim:"parallelAnim"});
  }
  
};

module.exports = GameObjects;



