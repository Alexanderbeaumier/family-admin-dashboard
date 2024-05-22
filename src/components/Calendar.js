import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import { Paper } from '@mui/material';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/calendar');
        const formattedEvents = response.data.map(event => ({
          title: event.title,
          start: event.date,
          notes: event.notes,
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
    </Paper>
  );
};

export default Calendar;
