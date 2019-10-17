/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import BoilerPlateScreen from './src/screens/BoilerPlateScreen';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    );
  }
}
