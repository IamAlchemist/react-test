import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import { Provider } from 'react-redux'
import configStore from './store/configureStore'
import App from './components/app'

const store = configStore()

export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('LightNight', () => Main);
