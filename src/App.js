import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [showForm, setShowForm] = useState(false)
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Work Time",
      date:"09/01/2022",
      time:"08:30",
      status: false

    },
    {
      id: 2,
      text: "Website Launching",
      date:"05/9/2030",
      time:"06:09",
      status: false
    },
    {
      id: 3,
      text: "Bed Time",
      date:"08/09/2022",
      time:"08:00",
      status: false
    },
  ]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    console.log(newTodos)
    setTodos(newTodos)
  }


  const completeTodo =  (id) => {    
    const newTodos = todos.map(
      todos => todos.id === id 
      ? ({ ...todos, status: !todos.status }) 
      : (todos) )
      console.log(newTodos)
      setTodos(newTodos)
  }
   
  


  const addTodo = (text, date, time) => {
    const id = todos.length + 1;
    const newTodo = { id, text, date, time, status:false};
   setTodos([...todos, newTodo]);
  }



    

  return (
    
    
    <div className="App">
 
      <Header title="Todo App" addTodo = {() => setShowForm(!showForm)} showForm={showForm}/>
    
      {showForm ? <AddTodo onAdd={addTodo}/>:''}
      
     {todos && todos.length ? '':'no tasks...'} <Todos todos={todos} onComplete={completeTodo}  onDelete={deleteTodo} />

  
    
   
   
    </div>
    
  );
}

export default App;
