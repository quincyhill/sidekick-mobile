/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import BoilerPlateScreen from './src/screens/BoilerPlateScreen';
import LoginScreen from './src/screens/LoginScreen';

import MyAppNavigator from './src/navigation/MainNavigator';

export default class App extends Component {
  render() {
    return <MyAppNavigator />;
  }
}
