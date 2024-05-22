import React from 'react';
import { CssBaseline, Drawer, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import TaskForm from './TaskForm';
import InvestmentForm from './InvestmentForm';
import AllowanceForm from './AllowanceForm';
import Calendar from './Calendar';
import MealForm from './MealForm';
import { Home, AccountBalance, CalendarToday, Restaurant, Assignment } from '@mui/icons-material';

const drawerWidth = 240;

const Layout = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" style={{ zIndex: 1201 }}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Family Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          style={{ width: drawerWidth, flexShrink: 0 }}
          PaperProps={{ style: { width: drawerWidth } }}
        >
          <Toolbar />
          <div style={{ overflow: 'auto' }}>
            <List>
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
          </div>
        </Drawer>
        <main style={{ flexGrow: 1, padding: '80px 24px 24px 24px', marginLeft: drawerWidth }}>
          <Routes>
            <Route path="/tasks" element={<TaskForm />} />
            <Route path="/investments" element={<InvestmentForm />} />
            <Route path="/allowances" element={<AllowanceForm />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/meals" element={<MealForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default Layout;
