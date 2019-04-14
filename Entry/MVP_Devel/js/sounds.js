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
  ViroSound,
  ViroSpatialSound,
} from 'react-viro';

import resolveAssetSource from "resolveAssetSource"; 
ViroSound.preloadSounds({ 
  "song" : resolveAssetSource(require('./res/music/MrBlueSky/Song.mp3')),
  "sfx1" : resolveAssetSource(require('./res/music/preview.mp3')),
  "sfx2" : resolveAssetSource(require('./res/music/preview2.mp3')),
  "sfx3" : resolveAssetSource(require('./res/music/ripple.wav')),
  "sfx4" : resolveAssetSource(require('./res/music/drum_bass.mp3'))
});

 export function startGBM(){
  return((
    <ViroSound paused={false} muted={false} source={'song'} loop={false} volume={0.2}/>
     ));
 }

 export function playSfx1(){
  return((
    <ViroSound paused={false} muted={false} source={'sfx1'} loop={true} volume={1.2}/>
     ));
 }

 export function playSfx2(){
  return((
    <ViroSound paused={false} muted={false} source={'sfx2'} loop={true} volume={1.2}/>
     ));
 }

 export function playSfx3(){
  return((
    <ViroSound paused={false} muted={false} source={'sfx3'} loop={true} volume={1.2}/>
     ));
 }

 export function playSfx4(){
  return((
    <ViroSound paused={false} muted={false} source={'sfx4'} loop={true} volume={1.2}/>
     ));
 }