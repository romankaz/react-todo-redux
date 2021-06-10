import React, {useRef} from 'react'

interface TodoFormProps {
  onAdd:(todo: ITodo) => void
}

declare var alert: (statement: string) => boolean


export const TodoForm: React.FC<TodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null)

  const keyPressHandler = (event: React.KeyboardEvent) => {
    const toDo:ITodo = {completed: false, id: NaN, title: ''}
    if (event.key === 'Enter') {
      if(ref.current!.value.length <= 10) {
        toDo.title=ref.current!.value
        props.onAdd(toDo)
        ref.current!.value = ''
      }
      else {
        alert('Todo must be equal or less than 10 symbols!')
      }      
    }
  }

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        type="text" 
        id="title" 
        placeholder="Enter ToDo"
        onKeyPress={keyPressHandler} 
      />
      <label htmlFor="title" className="active">
        Enter ToDo
      </label>
    </div>
  )
}