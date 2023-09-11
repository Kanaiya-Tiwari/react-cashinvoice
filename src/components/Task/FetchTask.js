import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import taskService from '../services/taskService';

function FetchTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const taskData = await taskService.fetchTasks();
        setTasks(taskData);
      } catch (error) {
        console.error('FetchTasks - Error fetching tasks:', error);
      }
    }

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchTasks;
