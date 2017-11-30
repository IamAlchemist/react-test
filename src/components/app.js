/**
 * Created by wizard on 30/11/2017.
 */
import React, {Component} from 'react'
import {View} from 'react-native'

import VisibleToDoList from '../containers/visibleTodoList'
import AddTodo from '../containers/addTodo'


export default class extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <AddTodo/>
                <VisibleToDoList/>
            </View>
        )
    }
}

