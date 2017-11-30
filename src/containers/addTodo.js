/**
 * Created by wizard on 30/11/2017.
 */

import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity, Button} from 'react-native'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

import {Text, View, Image} from '@iqiyi/rn-ui'

const AddTodo = ({dispatch}) => {
    return (
        <Button style={styles.container} title="Add" color="blue" onPress={() => {
            dispatch(addTodo('New Todo'))
        }}/>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'red'
    },
})

export default connect()(AddTodo)
