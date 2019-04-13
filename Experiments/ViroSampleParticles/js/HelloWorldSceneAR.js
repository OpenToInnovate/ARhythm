'use strict';

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {
  ViroSceneNavigator,
  ViroARScene,
  ViroNode,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroText,
  ViroAnimations,
  ViroParticleEmitter,
  Viro3DObject,
} from 'react-viro';

'use strict';
var createReactClass = require('create-react-class');
var HelloWorldSceneAR = createReactClass({

  getInitialState() {
    return {
    };
  },

  render: function() {
    return (
     <ViroARScene>
      <ViroAmbientLight color={"#aaaaaa"} />
      <ViroDirectionalLight color="#ffffff" direction={[0,-1,-.2]}/>

      <ViroNode position={[0, 0, -2]} scale={[.5, .5, .5]} dragType="FixedToWorld" onDrag={()=>{}}>
        <Viro3DObject
          source={require('./res/assets/emoji_smile.vrx')}
          resources={[require('./res/assets/emoji_smile_diffuse.png'),
                      require('./res/assets/emoji_smile_normal.png'),
                      require('./res/assets/emoji_smile_specular.png')]}
          type="VRX"
          animation={{name:"02", run:true, loop:true,}}
          />
          <ViroParticleEmitter
              position={[-.6, 0, .2]}
              scale={[.4, .2, .2]}
              duration={1100}
              delay={1100}
              visible={true}
              run={true}
              loop={true}
              fixedToEmitter={true}

              image={{
                source:require("./res/success.png"),
                height:1,
                width:1,
              }}

              spawnBehavior={{
                particleLifetime:[500,500],
                emissionRatePerSecond:[200,200],
                maxParticles:200,
                spawnVolume:{
                  shape:"box",
                  params:[.7, .1, .1],
                  spawnOnSurface:false
                },
              }}

              particleAppearance={{
                opacity:{
                  initialRange:[0.0, 0.0],
                  interpolation:[
                    {endValue:0.4, interval:[0,200]},
                    {endValue:0.0, interval:[900,1500]}
                  ]
                },
              }}

              particlePhysics={{
                velocity:{initialRange:[[-2,2,0], [-2,-2,0]]},
                acceleration:{initialRange:[[0,0,0], [0,0,0]]}
              }}
          />

          <ViroParticleEmitter
              position={[.6, 0, .2]}
              scale={[.4, .2, .2]}
              duration={1100}
              delay={1100}
              visible={true}
              run={true}
              loop={true}
              fixedToEmitter={true}

              image={{
                source:require("./res/success.png"),
                height:1,
                width:1,
              }}

              spawnBehavior={{
                particleLifetime:[500,500],
                emissionRatePerSecond:[200,200],
                maxParticles:200,
                spawnVolume:{
                  shape:"box",
                  params:[.7, .1, .1],
                  spawnOnSurface:false
                },
              }}

              particleAppearance={{
                opacity:{
                  initialRange:[0.0, 0.0],
                  interpolation:[
                    {endValue:0.4, interval:[0,200]},
                    {endValue:0.0, interval:[900,1500]}
                  ]
                },
              }}

              particlePhysics={{
                velocity:{initialRange:[[2,2,0], [2,-2,0]]},
                acceleration:{initialRange:[[0,0,0], [0,0,0]]}
              }}
          />
      </ViroNode>

     </ViroARScene>
    );
  },
});

module.exports = HelloWorldSceneAR;
