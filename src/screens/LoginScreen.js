import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginButton from '../components/LoginButton';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Login',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Login Screen Works</Text>
        <View>
          <LoginButton navigation={this.props.navigation} />
        </View>
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
