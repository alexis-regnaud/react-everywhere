/*import {
  NativeRouter as Router,
  Link,
  Route,
  Redirect,
  Switch,
  withRouter
} from 'react-router-native'*/

import React from 'react'

import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'

import HomeScreen from '../../screens/HomeScreen'
import AnotherScreen from '../../screens/AnotherScreen'
import OtherScreen from '../../screens/OtherScreen'

const Navigator = createMaterialTopTabNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  OtherScreen: {
    screen: OtherScreen
  },
  AnotherScreen: {
    screen: AnotherScreen
  }
})
const Navigation = createAppContainer(Navigator)


/*
 * Remove Platform specific exports :/
 */
export default {Navigation}
export         {Navigation}
