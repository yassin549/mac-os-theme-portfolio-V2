# Fitness Tracker

A comprehensive fitness tracking application with progress visualization.

## Features

- Workout tracking
- Exercise library
- Progress charts
- Custom workout plans
- Nutrition tracking
- Body measurements
- Goal setting
- Personal records
- Exercise animations
- Social sharing

## Tech Stack

- Vue.js 3
- Composition API
- Node.js backend
- MongoDB database
- ChartJS for analytics
- PWA support
- WebSocket real-time updates
- JWT authentication

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run serve

# Build for production
npm run build

# Run backend server
npm run server
```

## API Endpoints

### Workouts
- GET /api/workouts
- POST /api/workouts
- PUT /api/workouts/:id
- DELETE /api/workouts/:id

### Exercises
- GET /api/exercises
- POST /api/exercises
- PUT /api/exercises/:id
- DELETE /api/exercises/:id

### Progress
- GET /api/progress
- POST /api/progress
- GET /api/progress/stats

## Database Schema

```javascript
// Workout Schema
{
  user: ObjectId,
  date: Date,
  exercises: [{
    name: String,
    sets: [{
      reps: Number,
      weight: Number
    }]
  }]
}
```

## License

MIT
