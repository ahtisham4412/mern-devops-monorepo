# MERN DevOps Monorepo - Simple Task Manager

A minimal MERN stack application for practicing DevOps and deployment.

## 🎯 Purpose
- Practice Docker, Docker Compose, Volumes
- Learn Nginx, SSL, Jenkins
- Focus on Deployment and Monitoring

## 🏗️ Project Structure
mern-devops-monorepo/
├── frontend/index.html # Simple HTML frontend
├── backend/src/server.js # Express.js API
├── Dockerfile.backend # Backend Docker config
├── Dockerfile.frontend # Frontend Docker config
└── docker-compose.yml # Multi-container setup

## 🚀 Quick Start
1. Start with Docker: `docker-compose up --build`
2. Backend API: http://localhost:5000
3. Frontend App: http://localhost:80

## 📚 APIs
- `GET /` - API documentation
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Add new task
- `PUT /api/tasks/:id` - Update task

## 🛠️ DevOps Focus Areas
- Containerization with Docker
- Docker volumes for data persistence
- Nginx reverse proxy
- SSL certificate setup
- Jenkins CI/CD pipeline
- Application monitoring
