const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            //text => input.value
            text: action.text,
            completed: false
          }
        ]
        // dispatch(addTodo(input.value))
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id) ? 
          Object.assign({},todo,{
              completed:!todo.completed
          })
        : todo
        )
      default:
        return state
    }
  }
  
  export default todos