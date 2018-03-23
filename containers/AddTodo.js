import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        className = 'add-todo-form'
        onSubmit={e => {
          e.preventDefault()
          // string.trim() 去掉字符串两边的空白字符
          if (!input.value.trim()) {
            return
          }
          //当输入框的值存在时发送dispatch type为ADD_TODO text为input.value
          dispatch(addTodo(input.value))
          input.value = ''
        }}
        
      >
        <input
        className = 'add-todo-input'
        //组件函数式声明法 ref的写法
          ref={node => {
            input = node
          }}
        />
        <button type="submit" className = 'add-todo-btn'>
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo

