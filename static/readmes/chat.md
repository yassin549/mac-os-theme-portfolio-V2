# Real-time Chat Application

A modern chat application built with Socket.io and Node.js.

## Features

- Real-time messaging
- Private and group chats
- Online status indicators
- Message notifications
- File sharing
- Emoji support
- Message history
- User profiles
- Mobile responsive design

## Tech Stack

- Socket.io for real-time communication
- Node.js and Express backend
- MongoDB for data storage
- JWT authentication
- React frontend
- Material-UI components

## Setup

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd client
npm install

# Run development server
npm run dev

# Run client
npm start
```

## Environment Variables

Create `.env` file:
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## API Documentation

### Authentication
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/user

### Messages
- GET /api/messages/:chatId
- POST /api/messages
- DELETE /api/messages/:id

## License

MIT
