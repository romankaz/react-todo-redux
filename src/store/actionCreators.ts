import * as actionTypes from './actionTypes'

export function addTodo(todo: ITodo) {
  const action: TodoAction = {
    type: actionTypes.ADD_TODO,
    todo,
  }
  return dispatch(action)
}

export function removeTodo(todo: ITodo) {
  const action: TodoAction = {
    type: actionTypes.REMOVE_TODO,
    todo,
  }
  return dispatch(action)
}

export function toggleTodo(todo: ITodo) {
  const action: TodoAction = {
    type: actionTypes.TOGGLE_TODO,
    todo,
  }
  return dispatch(action)
}

function dispatch(action: TodoAction) {
  return (dispatch: DispatchType) => dispatch(action)
}