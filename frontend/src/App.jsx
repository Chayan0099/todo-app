import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Createtodo } from './components/Createtodo'
import { Todos } from './components/Todos'
import React, {useEffect} from 'react'; 

function App() {
  const [todos, setTodos] = useState([]); 

  useEffect(()=>{
  fetch("http://localhost:3000/mytodos")
  .then(async function(res){
  const json = await res.json();
  setTodos(json.todos);
  })},[])
  return (
  <div>
    <Createtodo></Createtodo>
    <Todos todos={todos}></Todos>
  </div>
  )
}

export default App
