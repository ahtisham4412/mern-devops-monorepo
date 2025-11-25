import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database (for simplicity, we'll replace with MongoDB later)
let tasks = [
  { id: 1, title: 'Learn Docker', completed: false },
  { id: 2, title: 'Practice DevOps', completed: false }
];

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Task Manager API is running!',
    endpoints: {
      getTasks: 'GET /api/tasks',
      addTask: 'POST /api/tasks',
      updateTask: 'PUT /api/tasks/:id'
    }
  });
});

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };
  tasks.push(newTask);
  res.json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  
  if (task) {
    task.completed = req.body.completed;
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📝 API Documentation: http://localhost:${PORT}`);
});
