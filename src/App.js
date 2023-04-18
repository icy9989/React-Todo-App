import { useState } from "react";
import AddTodo from "./components/addTodo";
import TodoContent from "./components/todoContent";
import ModalDialog from "./components/mod";

function App() {

 const todoLists = [
  {
    id: 1,
    checked: false,
    text: "Study data structure & algorithms"
  },
  {
    id: 2,
    checked: false,
    text: "Start design patterns"
  },
  {
    id: 3,
    checked: false,
    text: "Learn ReactJS"
  }
]

// 1st way
 const [ todos, setTodos ] = useState(todoLists);

// 2nd way => local storage
//  const [ todos, setTodos ] = useState(JSON.parse(localStorage.getItem('todoList')));

 const [ newTodo, setNewTodo ] = useState('');
 const [ filter, setFilter ] = useState('All');
 const [ selectedTodo, setSelectedTodo ] = useState('');

 const saveTodos = (todoItems) => {
  setTodos(todoItems);
  localStorage.setItem('todoList', JSON.stringify(todoItems));
 }

 const handleCheck = (id) => {
  const todoItems = todos.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
  saveTodos(todoItems);
 }

 const handleEdit = (id) => {
  setSelectedTodo(todos.filter((todo) => todo.id === id))
  console.log(selectedTodo);
 }

 const handleDelete = (id) => {
  const todoItems = todos.filter((todo) => todo.id !== id);
  saveTodos(todoItems);
 }

 const handleAdd = (e) => {
  e.preventDefault();
  const newItem = {
    id: todos.length + 1,
    checked: false,
    text: newTodo
  }
  if(newTodo) { 
    const todoItems = [ ...todos, newItem ];
    saveTodos(todoItems);
    console.log(todoItems);
  }
  setNewTodo("");
 }

 const handleFilter = (option) => {
  setFilter(option);
 }

 const filterTodos = () => {
  const filterItems = filter === 'All' ? todos : (filter === 'Done' ? todos.filter((todo) => todo.checked === true) : todos.filter((todo) => todo.checked === false));
  return filterItems;
}

const handleDeleteDone = () => {
  const todoItems = todos.filter((todo) => todo.checked === false);
  saveTodos(todoItems);
  // console.log("Delete Done Tasks")
}

const handleDeleteAll = () => {
  const todoItems = []
  saveTodos(todoItems);
  // console.log("Delete All Tasks")
}

  return (
    <div className="container my-4">
      <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} selectedTodo={selectedTodo} onAdd={handleAdd} />
      <TodoContent todos={filterTodos()} onFilter={handleFilter} onCheck={handleCheck} onEdit={handleEdit} onDelete={handleDelete} onDeleteDone={handleDeleteDone} onDeleteAll={handleDeleteAll} />
    </div>
  );
}

export default App;
