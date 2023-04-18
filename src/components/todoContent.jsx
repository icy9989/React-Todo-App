import React, { useEffect, useState } from 'react'
import TodoList from './todoList'
import FilterButton from './filterButton'
import DeleteModal from './deleteModal'

const TodoContent = ({ todos, onFilter, onCheck, onEdit, onDelete, onDeleteDone, onDeleteAll }) => {

  const [ height, setHeight ] = useState(window.innerHeight);

  useEffect (() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    console.log(height)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <>
    <h4 className='text-center titleTexts mt-4'>Todo List</h4>
    <div className='row'>
      <div className='col-4 pb-3'>
        <FilterButton text={"All"} btnColor={"#3C486B"} btnText={"white"} onFilter={onFilter} />
      </div>
      <div className='col-4 pb-3'>
        <FilterButton text={"Done"} btnColor={"#3C486B"} btnText={"white"} onFilter={onFilter} />
      </div>
      <div className='col-4 pb-3'>
        <FilterButton text={"Todo"} btnColor={"#3C486B"} btnText={"white"} onFilter={onFilter} />
      </div>
    </div>
    <div>
      <TodoList todos={todos} onCheck={onCheck} onEdit={onEdit} onDelete={onDelete} />
    </div>
    <div className='row'>
        <div className='col-6 p-3'>
          <DeleteModal buttonText={"Delete Done Tasks"} modalText={"Are you sure to delete all completed tasks?"} onDelete={onDeleteDone} />
        </div>
        <div className='col-6 p-3'>
          <DeleteModal buttonText={"Delete All Tasks"} modalText={"Are you sure to delete all the tasks?"} onDelete={onDeleteAll} />
        </div>
      </div>
  </>
  )
}

export default TodoContent