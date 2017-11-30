import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native'


export default class App extends Component {

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'red'}}>
            </View>
        )
    }
}

AppRegistry.registerComponent('LightNight', () => App);
