import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Login Screen Works</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
  },

  text: {
    backgroundColor: '#c3c3c3',
  },
});
