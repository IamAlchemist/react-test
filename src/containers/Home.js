/**
 * HomeScreen
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

export default class Home extends Page {
  goChat = () => {
    this.goTo('Chat', { name: 'Lucy' })
  }

  renderLeft = () => {
    const { title } = this.props
    if (title === 'Home') {
      return null
    }
  }

  render() {
    const { title } = this.props

    return (
      <View style={{flexGrow: 1}}>
        <NavBar 
          title={title} 
          backPress={this.back}
        />
        <View style={styles.container}>
          <Button
            onPress={this.goChat}
            title="Go Chat"
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