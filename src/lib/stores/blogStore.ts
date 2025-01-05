import { writable } from 'svelte/store';
import type { BlogPost } from '../types/blogType';

export const blogPosts = writable<BlogPost[]>([
  {
    id: 1,
    title: "About Me",
    description: "Hey there! I'm Yassin, a programmer passionate about shaping reality through code.",
    body_markdown: `
# About Me

I'm a developer who believes in the power of technology to shape reality. Here's what I work with:

## 🚀 Programming Languages
- Python
- JavaScript
- Django
- Java
- C++
- Go

## 💡 Interests
- AI Development
- Full stack web applications
- Philosophy

## 🛠️ Tools & Technologies
- VS Code
- Postman
- Docker
- PyCharm

## 💻 Operating Systems
- Linux
- Windows

## Knowledge Areas

### Programming
![Python](https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Backend
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

### Databases
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

### AI/ML & Data Science
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)

> "Knowledge is powerless unless it's applied with purpose."
    `,
    published_at: new Date().toISOString(),
    reading_time_minutes: 5,
    page_views_count: 0,
    tag_list: ["About", "Programming", "AI", "Web Development"],
    url: "https://github.com/yassin549"
  },
  {
    id: 2,
    title: "My Development Philosophy",
    description: "Exploring my approach to software development and the principles that guide my work.",
    body_markdown: `
# Development Philosophy

## Code Principles
- "Code is like humor. When you have to explain it, it's bad."
- "Design is not just what it looks like and feels like. Design is how it works."
- "First, solve the problem. Then, write the code." – John Johnson
- "Without data, you're just another person with an opinion."
- "It's not the tools you have faith in – tools are just tools. They work, or they don't."
- "In Nature we trust. All others must bring data."

## My Workspace
- Custom PC with Windows
- VS Code as primary IDE
- Git for version control
- Docker for containerization

## Development Approach
I believe in:
- Clean, maintainable code
- User-centered design
- Data-driven decisions
- Continuous learning
- Open source contribution

> "The best code is no code at all. Every new line of code you willingly bring into the world is code that has to be debugged, code that has to be read and understood, code that has to be supported."
    `,
    published_at: new Date().toISOString(),
    reading_time_minutes: 4,
    page_views_count: 0,
    tag_list: ["Philosophy", "Development", "Best Practices"],
    url: "https://github.com/yassin549"
  }
]);

export async function fetchBlogPosts() {
  // This function would typically fetch posts from an API
  // For now, we're using static data
  return;
}