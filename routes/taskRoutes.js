// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const { getAllTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');

// GET tasks with optional filtering by status (pending/completed)
router.get('/', getAllTasks);

// POST to create a new task
router.post('/', createTask);

// PUT to update an existing task
router.put('/:id', updateTask);

// DELETE to remove a task
router.delete('/:id', deleteTask);

module.exports = router;
