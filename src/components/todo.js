/**
 * Created by wizard on 30/11/2017.
 */
import React, {} from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native'
import PropTypes from 'prop-types'

const Todo = ({onClick, completed, text}) => (
    <TouchableOpacity onPress={onClick}>
        <Text style={completed ? styles.completedText : styles.text}>{text}</Text>
    </TouchableOpacity>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo

const styles = StyleSheet.create({
    container: {
        height: 30,
        margin: 10
    },
    completedText: {
        fontSize: 48,
        textDecorationLine: 'line-through'
    },
    text: {
        fontSize: 48,
        textDecorationLine: 'none'
    }
})
