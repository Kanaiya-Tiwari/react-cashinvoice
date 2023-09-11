import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import taskService from '../services/taskService';

function DeleteTask() {
  const { taskId } = useParams();
  const history = useHistory();

  const handleDeleteTask = async () => {
    try {
      await taskService.deleteTask(taskId);
      history.push('/tasks');
    } catch (error) {
      console.error('DeleteTask - Error deleting task:', error);
    }
  };

  return (
    <div>
      <h2>Delete Task</h2>
      <p>Are you sure you want to delete this task?</p>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
}

export default DeleteTask;