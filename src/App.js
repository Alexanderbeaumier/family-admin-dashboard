import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import InvestmentForm from './components/InvestmentForm';
import AllowanceForm from './components/AllowanceForm';
import Calendar from './components/Calendar';
import MealForm from './components/MealForm';
import HomePage from './components/HomePage';
import { CssBaseline, Drawer, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Home, AccountBalance, CalendarToday, Restaurant, Assignment, Dashboard } from '@mui/icons-material';
import './App.css';

const drawerWidth = 240;

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Family Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              <ListItem button component={Link} to="/">
                <ListItemIcon><Dashboard /></ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button component={Link} to="/tasks">
                <ListItemIcon><Assignment /></ListItemIcon>
                <ListItemText primary="Tasks" />
              </ListItem>
              <ListItem button component={Link} to="/investments">
                <ListItemIcon><AccountBalance /></ListItemIcon>
                <ListItemText primary="Investments" />
              </ListItem>
              <ListItem button component={Link} to="/allowances">
                <ListItemIcon><Home /></ListItemIcon>
                <ListItemText primary="Allowances" />
              </ListItem>
              <ListItem button component={Link} to="/calendar">
                <ListItemIcon><CalendarToday /></ListItemIcon>
                <ListItemText primary="Calendar" />
              </ListItem>
              <ListItem button component={Link} to="/meals">
                <ListItemIcon><Restaurant /></ListItemIcon>
                <ListItemText primary="Meals" />
              </ListItem>
            </List>
            <Divider />
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks" element={<TaskForm />} />
            <Route path="/investments" element={<InvestmentForm />} />
            <Route path="/allowances" element={<AllowanceForm />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/meals" element={<MealForm />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
