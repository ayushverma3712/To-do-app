import { useState , useEffect } from "react";
import React from 'react';
 import { ToastContainer, toast } from 'react-toastify';
import './App.css' ;
function App() {
  const [task,setTask] = useState("");
  const [tasks,setTasks] = useState(()=>{
    const savedtask = localStorage.getItem("tasks");
    return savedtask ? JSON.parse(savedtask) : [];
      });

      useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));
      },[tasks]);
//const notify =()=> toast("Task already exists!");


// ... keep your imports and logic
return (

  <div className="todo-app">
    <h1>My To - Do App</h1>
    
    <div className="input-group">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={pressEnter}
      />
      <button onClick={addTask}>ADD</button>
    </div>

    <ul>
      {tasks.map((item, index) => (
        <li key={index} className="task-item">
          <span>{item}</span>
          <div>
            <button onClick={() => edittext(index)}>Edit</button>
            <button onClick={() => todelete(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
    <ToastContainer position="top-right" />
  </div>
  
);

  function pressEnter(e) {
    if(e.key === "Enter"){addTask();}
  }
  function addTask(){
    
    if(task===''){toast.error("Empty Task ");return;}
    if(tasks.includes(task)){toast.info("Task already exists!");return; }
    setTasks([...tasks,task]);
    setTask('');
  }

  function todelete(indextodelete){
    const newtask = tasks.filter
    ((item,index) => index !== indextodelete);
    setTasks(newtask);
  }

function edittext(toedit){
  setTask(tasks[toedit]);
  const updatetasks = tasks.filter(
    (item,index)=> index !== toedit
  );
  setTasks(updatetasks);
}
}

export default App;

