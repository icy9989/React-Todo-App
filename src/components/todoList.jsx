import React from 'react'
import TodoItem from './todoItem'

const TodoList = ({ todos, onCheck, onDelete }) => {
  return (
    <ul className='list-group'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onCheck={onCheck} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default TodoList