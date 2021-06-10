interface	ITodo {
  title: string,
  id: number,
  completed: boolean
}

type TodoState = {
  todos: ITodo[]
}

type TodoAction = {
  type: string
  todo: ITodo
}

type DispatchType = (args: TodoAction) => TodoAction

