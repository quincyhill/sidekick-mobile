import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default class LogoutButton extends Component {
  constructor(props) {
    super(props);
  }

  _logoutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View>
        <Button
          color={styles.button.color}
          title="Logout"
          onPress={this._logoutAsync}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    color: '#8B0000',
  },
  button: {
    color: '#8B0000',
  },
});
