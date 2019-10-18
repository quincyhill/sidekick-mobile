import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import BoilerPlateScreen from '../screens/BoilerPlateScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'HomeStack',
      headerRight: (
        <Button
          title="open drawer"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      ),
    }),
  },
});

const BoilerPlateStack = createStackNavigator({
  BoilerPlate: {
    screen: BoilerPlateScreen,
    navigationOptions: ({navigation}) => ({
      title: 'NavigationStack',
      headerRight: (
        <Button
          title="open drawer"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      ),
    }),
  },
});

const LoginStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Please log in',
    }),
  },
});

const MainDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  BoilerPlate: {
    screen: BoilerPlateStack,
  },
});

const AuthStack = createStackNavigator({Login: {screen: LoginStack}});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: MainDrawerNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
