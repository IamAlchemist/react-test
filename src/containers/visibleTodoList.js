/**
 * Created by wizard on 30/11/2017.
 */

import {connect} from 'react-redux'
import TodoList from '../components/todoList'
import { toggleTodo } from '../actions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            throw new Error(`Unknown filter: ${filter}`)
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.map.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
    onTodoClick: toggleTodo
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)


export default connect()(VisibleTodoList)
