import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import taskService from '../services/taskService';

function CreateTask() {
  const history = useHistory();
  const [task, setTask] = useState({ title: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await taskService.createTask(task);
      history.push('/tasks');
    } catch (error) {
      console.error('CreateTask - Error creating task:', error);
    }
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={task.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleInputChange}
        />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default CreateTask;