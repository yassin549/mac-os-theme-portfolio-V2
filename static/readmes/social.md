# Social Media Application

A modern social media platform with real-time features built with React and Firebase.

## Features

- User profiles and authentication
- News feed with infinite scroll
- Real-time posts and comments
- Image and video sharing
- Direct messaging
- Friend requests
- Notifications
- Post reactions
- User mentions
- Hashtag support

## Tech Stack

- React
- Firebase (Auth, Firestore, Storage)
- Redux for state management
- Material-UI components
- Real-time updates
- Progressive Web App
- Push notifications
- Image optimization

## Getting Started

```bash
# Install dependencies
npm install

# Set up Firebase config
cp .env.example .env.local
# Add your Firebase config

# Start development server
npm start

# Build for production
npm run build
```

## Firebase Configuration

```javascript
// src/firebase/config.js
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
```

## License

MIT
