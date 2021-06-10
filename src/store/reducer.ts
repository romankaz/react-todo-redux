import * as actionTypes from './actionTypes'

const initialState: TodoState = {
  todos: []
}

export const reducer = (state:TodoState = initialState, action:TodoAction) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      
        const newTodo: ITodo = {
          title: action.todo.title,
          id: Date.now(),
          completed: false
        }
        return {...state, todos: state.todos.concat(newTodo)}
    
    case actionTypes.REMOVE_TODO:
      const updatedTodos:ITodo[] = state.todos.filter(todo => todo.id !== action.todo.id) 
        return {...state, todos: updatedTodos}
    
    case actionTypes.TOGGLE_TODO:
      const toggledTodos:ITodo[] = state.todos.map(todo => 
          todo.id === action.todo.id ?
            {...todo, completed:!todo.completed}: {...todo}
        )
        return {...state, todos:toggledTodos}

  }
  return state
}