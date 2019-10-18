import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
  }

  _loginAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View>
        <Button title="Login" onPress={this._loginAsync} />
      </View>
    );
  }
}
