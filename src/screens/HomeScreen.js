import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LogoutButton from '../components/LogoutButton';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen Works</Text>
        <View>
          <LogoutButton navigation={this.props.navigation} />
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
