// src/pages/TasksPage.js
import React from 'react';
import TaskForm from '../components/TaskForm';

const TasksPage = () => {
  return (
    <div className="page">
      <h1>Manage Tasks</h1>
      <TaskForm />
    </div>
  );
};

export default TasksPage;
