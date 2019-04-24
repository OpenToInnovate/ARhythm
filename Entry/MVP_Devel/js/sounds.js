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

//export class PhotosSelector extends Component {

export function startBGM(){
  return((
    <ViroSound paused={false} muted={false} source={require('./res/music/DaddyPSY/daddy.mp3')} loop={false} volume={0.2}/>
    ));
 }
 /*
    <ViroSound paused={false} muted={false} source={require('./res/music/Kids/k_house_2.mp3')} loop={false} volume={0.2}/>
 <ViroSound paused={false} muted={false} source={require('./res/music/Jeff/Sean-Mendoza.mp3')} loop={false} volume={0.2}/>
 <ViroSound paused={false} muted={false} source={require('./res/music/Jeff/contatgion.mp3')} loop={false} volume={0.2}/>
 <ViroSound paused={false} muted={false} source={require('./res/music/Jeff/Mad-Carnival.mp3')} loop={false} volume={0.2}/>
    <ViroSound paused={false} muted={false} source={require('./res/music/MrBlueSky/Song.mp3')} loop={false} volume={0.2}/>
  <ViroSound paused={false} muted={false} source={require('./res/music/Jeff/prison.mp3')} loop={false} volume={0.2}/>
  <ViroSound paused={false} muted={false} source={require('./res/music/Believer/song.mp3')} loop={false} volume={0.2}/>
   <ViroSound paused={false} muted={false} source={require('./res/music/Jeff/contatgion.mp3')} loop={false} volume={0.2}/>
    <ViroSound paused={false} muted={false} source={require('./res/music/Kids/thebeginning.mp3')} loop={false} volume={0.2}/>
 



 */

 export function playSfx1(){
  return((
    <ViroSound paused={false} muted={false} source={require('./res/music/preview.wav')} loop={false} volume={1.0}/>
     ));
 }

 export function playSfx2(){
  return((
    <ViroSound paused={false} muted={false} source={require('./res/music/preview2.wav')} loop={false} volume={1.0}/>
     ));
 }

 export function playSfx3(){
  return((
    <ViroSound paused={false} muted={false} source={require('./res/music/ripple.wav')} loop={false} volume={1.0}/>
     ));
 }

 export function playSfx4(){
  return((
    <ViroSound paused={false} muted={false} source={require('./res/music/drum_bass.wav')} loop={yes} volume={1.0}/>
     ));
 }