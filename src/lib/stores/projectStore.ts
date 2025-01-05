import { writable } from 'svelte/store';
import type { ProjectData } from '../types/projectType';

type ProjectStore = {
  [key: string]: ProjectData;
};

const initialProjects: ProjectStore = {
  'academia-campus': {
    name: 'Academia Campus Repository',
    icon: 'javascript',
    shortDescription: 'A comprehensive academic management system with course materials, assignments, and student resources',
    githubUrl: 'https://github.com/yassin549/Academia-Campus-Repository-main',
    readmeUrl: '/project-descriptions/academia-campus',
    technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'React'],
    type: 'application'
  },
  'ai-chatbot': {
    name: 'AI Room Booking Chatbot',
    icon: 'python',
    shortDescription: 'Intelligent chatbot using IBM Watson for automated room booking and management',
    githubUrl: 'https://github.com/yassin549/AI-Room-Booking-Chatbot-IBM-WATSON',
    readmeUrl: '/project-descriptions/ai-chatbot',
    technologies: ['Python', 'IBM Watson', 'Flask', 'Natural Language Processing', 'RESTful APIs'],
    type: 'application'
  },
  'ecommerce': {
    name: 'E-commerce Platform',
    icon: 'python',
    shortDescription: 'Full-featured e-commerce platform with product management, shopping cart, and payment integration',
    githubUrl: 'https://github.com/yassin549/EcommerceProject',
    readmeUrl: '/project-descriptions/ecommerce',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Bootstrap', 'Payment Gateway Integration'],
    type: 'application'
  },
  'event-manager': {
    name: 'Event Manager',
    icon: 'javascript',
    shortDescription: 'Comprehensive event management system with scheduling, registration, and analytics',
    githubUrl: 'https://github.com/yassin549/eventmanager',
    readmeUrl: '/project-descriptions/event-manager',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    type: 'application'
  },
  'social-media': {
    name: 'Social Media Web App',
    icon: 'javascript',
    shortDescription: 'Feature-rich social networking platform with real-time chat, post sharing, and user interactions',
    githubUrl: 'https://github.com/yassin549/SocialMediaWebApp',
    readmeUrl: '/project-descriptions/social-media',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redux', 'WebRTC'],
    type: 'application'
  },
  'smart-inventory': {
    name: 'Smart Inventory System',
    icon: 'python',
    shortDescription: 'Intelligent inventory management system with predictive analytics and real-time tracking',
    githubUrl: 'https://github.com/yassin549/Smart-Inventory-System',
    readmeUrl: '/project-descriptions/smart-inventory',
    technologies: ['Python', 'Machine Learning', 'SQLite', 'Data Visualization', 'Predictive Analytics'],
    type: 'application'
  }
};

export const projects = writable<ProjectStore>(initialProjects);