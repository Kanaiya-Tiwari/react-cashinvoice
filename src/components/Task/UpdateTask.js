import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import taskService from '../services/taskService';

function UpdateTask() {
  const { taskId } = useParams();
  const history = useHistory();
  const [task, setTask] = useState({ title: '', description: '' });

  useEffect(() => {
    async function fetchTask() {
      try {
        const taskData = await taskService.fetchTaskById(taskId);
        setTask(taskData);
      } catch (error) {
        console.error('UpdateTask - Error fetching task:', error);
      }
    }

    fetchTask();
  }, [taskId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleUpdateTask = async (e) => {
    e.preventDefault();
    try {
      await taskService.updateTask(taskId, task);
      history.push('/tasks');
    } catch (error) {
      console.error('UpdateTask - Error updating task:', error);
    }
  };

  return (
    <div>
      <h2>Update Task</h2>
      <form onSubmit={handleUpdateTask}>
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
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
}

export default UpdateTask;