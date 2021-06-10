import React, {useState, useEffect} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { addTodo, removeTodo, toggleTodo } from '../store/actionCreators';

export const TodosPage: React.FC = () => {

  
  const todos: ITodo[] = useSelector(
    (state: TodoState) => state.todos,
    shallowEqual
  )

  const [filteredtodos, setfilteredTodos] = useState<ITodo[]>([])
  const [doneAmount, setDoneAmount] = useState<number>(NaN)
  const [unDoneAmount, setUnDoneAmount] = useState<number>(NaN)

  const dispatch: Dispatch<any> = useDispatch()

  const addHandler = React.useCallback(
    (todo: ITodo) => dispatch(addTodo(todo)),
    [dispatch]
  )

  const removeHandler = React.useCallback(
    (todo: ITodo) => dispatch(removeTodo(todo)),
    [dispatch]
  )

  const toggleHandler = React.useCallback(
    (todo: ITodo) => dispatch(toggleTodo(todo)),
    [dispatch]
  )

  useEffect(() => {
    setfilteredTodos(todos)
  }, [])


  useEffect(() => {
    setfilteredTodos(todos)
    setDoneAmount(todos.filter(todo => todo.completed === true).length)
    setUnDoneAmount(todos.filter(todo => todo.completed !== true).length)
  }, [todos])


  const filterDoneItems = () => {
    const doneItems:ITodo[] = todos.filter(value => value.completed === true)
    setfilteredTodos(doneItems)
  }

  const filterUndoneItems = () => {
    const undoneItems:ITodo[] = todos.filter(value => value.completed === false) 
    setfilteredTodos(undoneItems)
  }

  const filterAllItems = () => {
    setfilteredTodos(todos)
  }
 
  
  return (<React.Fragment>

    <TodoForm onAdd={addHandler} />
    <div style={{textAlign: 'end'}}> 
      <button className="btn" style={{margin: '3px'}} onClick={filterDoneItems}>Done<i className="material-icons right">filter_list</i></button>
      <button className="btn" style={{margin: '3px'}} onClick={filterUndoneItems}>Undone<i className="material-icons right">filter_list</i></button>
      <button className="btn" style={{margin: '3px'}} onClick={filterAllItems}>All<i className="material-icons right">filter_list</i></button>
    </div>
      <div style={{textAlign: 'end'}}>
      <h6>Done: {doneAmount}</h6>
      <h6>UnDone: {unDoneAmount}</h6>
    </div>
   
    <TodoList 
        todos={filteredtodos} 
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </React.Fragment>
  )
}