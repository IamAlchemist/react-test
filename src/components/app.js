/**
 * Created by wizard on 30/11/2017.
 */
import React, {Component} from 'react'
import {View} from 'react-native'

import VisibleToDoList from '../containers/visibleTodoList'


export default class extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <VisibleToDoList/>
            </View>
        )
    }
}

