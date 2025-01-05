# Task Management System

A comprehensive task management application built with Angular and Node.js.

## Features

- Drag-and-drop task organization
- Project management
- Team collaboration
- Task assignments
- Due date tracking
- Priority levels
- Progress tracking
- File attachments
- Activity timeline
- Email notifications

## Tech Stack

- Angular 15+
- TypeScript
- Node.js/Express
- MongoDB
- Socket.io for real-time updates
- JWT authentication
- AWS S3 for file storage

## Installation

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd frontend
npm install

# Run development server
ng serve

# Run backend
npm run dev
```

## API Documentation

### Tasks
- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id

### Projects
- GET /api/projects
- POST /api/projects
- PUT /api/projects/:id
- DELETE /api/projects/:id

## License

MIT
