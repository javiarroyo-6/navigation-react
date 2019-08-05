import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class MenuScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Menu Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
});
