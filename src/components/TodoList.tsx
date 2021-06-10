import React from 'react'

declare var confirm: (question: string) => boolean

type TodoListProps = {
  todos: ITodo[]
  onToggle: (todo: ITodo) => void
  onRemove: (todo: ITodo) => void
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onRemove,
  onToggle
}) => {
  if (todos.length === 0) {
    return <p className="center">No ToDos yet</p>
  }

  const removeHandler = (event: React.MouseEvent, toDo: ITodo) => {
    event.preventDefault()
    const shouldRemove = confirm('Are you sure that you want to delelete this Todo?')
    if(shouldRemove) {
      onRemove(toDo)
    }
  }

  const toggleHandler = (event: React.ChangeEvent, toDo: ITodo) => {
    onToggle(toDo)
  }

  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo']
        if(todo.completed) {
          classes.push('completed')
        }
        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={event => toggleHandler(event, todo)}
              />
              <span>{todo.title}</span>
              <i className="material-icons red-text" onClick={event => removeHandler(event, todo)}>delete</i>
            </label>
          </li>
        )
      })}    
    </ul>
  )
}