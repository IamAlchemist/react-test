/**
 * ChatScreen
 * @flow
 * @date 2017/11/14
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { Page, NavBar } from '@iqiyi/rn-navigation';

const Noop = () => {
  alert('Tap')
}

export default class Chat extends Page {
  state = {
    title: this.props.title,
  }

  renderRight = () => (
    <Button 
      onPress={Noop}
      title="Info"
    />
  )

  changeTitle = () => {
    this.setState({
      title: 'New Page'
    })
  }

  render() {
    return (
      <View style={{flexGrow: 1}}>
        <NavBar 
          title={this.state.title} 
          backPress={this.back} 
          renderRightView={this.renderRight} 
          rightViewWidth={50} 
        />
        <View style={styles.container}>
          <Button
            onPress={this.back}
            title="Go Back"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingVertical: 15,
  },
  welcome: {
    fontSize: 18,
  }
})