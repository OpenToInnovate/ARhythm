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
  AppRegistry,
  View
} from 'react-native';

import {
  Viro3DObject,
  ViroConstants,
  ViroUtils,
} from 'react-viro';

 export function getTronCube(){
  return((
    <Viro3DObject
    source={require('./res/assets/object_cube.vrx')}
    resources={[require('./res/assets/cube_diffuse.png'),
                require('./res/assets/cube_specular.png')]}
    type="VRX"
    />
     ));
 }
