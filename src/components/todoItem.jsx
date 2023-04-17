import React, { useState } from 'react'
import { BiCheckboxChecked } from 'react-icons/bi';
import { BiCheckbox } from 'react-icons/bi';
import { MdOutlineEdit } from 'react-icons/md'
import { FaTrashAlt } from 'react-icons/fa'

const TodoItem = ({ todo, onCheck, onDelete }) => {

  return ( 
    <li className='list-group-item my-2 d-flex justify-content-between align-items-center listItems'>
        <h6 className={`mt-2 ${todo.checked ? 'todoText checked' : 'todoText'}`}>{todo.text}</h6>
        <div>
            <span style={{ cursor: 'pointer' }} onClick={() => onCheck(todo.id)}>
                {todo.checked
                ? <BiCheckboxChecked fontSize={26} color='#3EB489'/> 
                : <BiCheckbox fontSize={26} color='#999'/>}
            </span>
            <span style={{ cursor: 'pointer' }} className='mx-2'>
                <MdOutlineEdit fontSize={20} color='#ffea00' />
            </span>
            <span style={{ cursor: 'pointer' }} onClick={() => onDelete(todo.id)}>
                <FaTrashAlt color='#F45050' />
            </span>
        </div>
    </li>
  )
}

export default TodoItem