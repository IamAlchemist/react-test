import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { createStore } from 'redux'
import App from './components/app'

const store = createStore(reducers)

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
