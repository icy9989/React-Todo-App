import React, { useEffect, useState } from 'react'
import { FaBook } from "react-icons/fa";

const AddTodo = ({ newTodo, setNewTodo, selectedTodo, onAdd }) => {

    const value = selectedTodo ? selectedTodo.text : newTodo;

    useEffect(() => {
        // console.log(value);
    })

    const handleTextChange = (e) => {
        if(selectedTodo) {
            console.log("hi");
        } else {
            setNewTodo(e.target.value)
        }
    }

  return (
    <div>
        <h4 className='text-center titleTexts'>New Todo</h4>
        <div className='card p-4'>
            <form onSubmit={onAdd}> 
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text inputBoxIcons">
                            <FaBook />
                        </span>
                    </div>
                    <input type="text" value={value} onChange={(e) => handleTextChange(e)} className="form-control inputTexts" placeholder="New Task" />   
                </div>
                <div className='d-grid'>
                    <button type='submit' className='btn add-buttons'>Add New Task</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddTodo