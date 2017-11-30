import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const map = combineReducers({
    todos,
})

const todoApp = combineReducers({
    map,
    visibilityFilter
})

export default todoApp
