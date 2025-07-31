const express = require('express');
const logger = require('../src/middleware/logger');
const errorHandler = require('../src/middleware/errorHandler');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());
app.use(logger); // Logs every request

app.use('/api/auth', authRoutes); // Login route

app.use(errorHandler); // Custom error handler

module.exports = app;
