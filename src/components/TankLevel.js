import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TankLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          ...page.container,
          ...this.props.container,
        }}></View>
    );
  }
}

const page = StyleSheet.create({
  container: {
    width: 40,
    height: 11,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
