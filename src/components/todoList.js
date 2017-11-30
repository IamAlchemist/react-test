/* eslint-disable block-spacing */
/**
 * Created by wizard on 30/11/2017.
 */

import React from 'react'
import {StyleSheet, View} from 'react-native'
import PropTypes from 'prop-types'
import Todo from './todo'

const TodoList = ({todos, onTodoClick}) => (
    <View style={styles.container}>
        {todos.map((todo) => {
            return (<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>)
        })}
    </View>
)

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
}

export default TodoList

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
