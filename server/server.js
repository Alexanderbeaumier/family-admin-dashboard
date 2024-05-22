const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Hardcode MongoDB connection string
const uri = "mongodb+srv://alexanderbeaumier3:Axbevd2023!@family-admin.9a2ujjd.mongodb.net/?retryWrites=true&w=majority&appName=family-admin";

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import routes
const tasksRouter = require('./routes/tasks');
const investmentsRouter = require('./routes/investments');
const allowancesRouter = require('./routes/allowances');
const calendarRouter = require('./routes/calendar');
const mealsRouter = require('./routes/meals');

// Use routes
app.use('/api/tasks', tasksRouter);
app.use('/api/investments', investmentsRouter);
app.use('/api/allowances', allowancesRouter);
app.use('/api/calendar', calendarRouter);
app.use('/api/meals', mealsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
