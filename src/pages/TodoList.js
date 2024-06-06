import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import '../compnant/css/ToDoList.css';

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
    <Container fluid className="todo-page">

      <Row className="align-items-center justify-content-center h-100">
      <Col xs={12} md={6} lg={4} className="brand text-center text-md-left">
          <h1>Tan<span className="highlight">Z</span>em</h1>
        </Col>
        <Col xs={12} md={8} lg={6} className="todo-container mx-auto">
          <Card className="todo-card">
            <Card.Body>
              <h2 className="text-center mb-4">ToDo List</h2>
              <Form onSubmit={handleAddTask}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Enter a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button className="w-100 mt-3" type="submit">Add Task</Button>
              </Form>
              <ListGroup className="mt-4">
                {tasks.map((task, index) => (
                  <ListGroup.Item
                    key={index}
                    className={`d-flex justify-content-between align-items-center ${task.completed ? 'completed' : ''}`}
                  >
                    <span onClick={() => handleToggleComplete(index)} style={{ cursor: 'pointer' }}>
                      {task.text}
                    </span>
                    <Button variant="danger" onClick={() => handleDeleteTask(index)}>Delete</Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoList;
