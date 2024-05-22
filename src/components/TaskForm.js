import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/tasks', { task, dueDate, assignedTo, priority });
    setTask('');
    setDueDate('');
    setAssignedTo('');
    setPriority('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <TextField
        label="Due Date"
        type="datetime-local"
        InputLabelProps={{ shrink: true }}
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <TextField
        label="Assigned To"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        required
      />
      <TextField
        label="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">Add Task</Button>
    </Box>
  );
};

export default TaskForm;
