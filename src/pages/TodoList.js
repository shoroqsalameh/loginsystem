import React, { useState } from 'react';
import {ListGroup } from 'react-bootstrap';
import './css/ToDoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>

    
      <h1 className="brand">Ta<span className="highlight" >NZ</span>em</h1>        
       
      
        <div className="todo-card">
         
            <h2 className="text-center mb-4">ToDo List</h2>
            <form onSubmit={handleAddTask}>
                <input className='formControl'
                  type="text"
                  placeholder="Enter a new task"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  required
                />
             
               <button className="add-task" type="submit">Add Task</button>
            </form>
            <ListGroup>
              {tasks.map((task, index) => (
                <ListGroup.Item
                  key={index}
                  className={`d-flex justify-content-between align-items-center ${task.completed ? 'completed' : ''}`}
                >
                  <span onClick={() => handleToggleComplete(index)} style={{ cursor: 'pointer' }}>
                    {task.text}
                  </span>
                  <button variant="danger" className='deletebtn' onClick={() => handleDeleteTask(index)}>Delete</button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
     
</>
  );
};

export default TodoList;
