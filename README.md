# ChatGram  

ChatGram is a fullstack social media platform that enables users to connect, share posts & stories, engage through comments and likes, and chat in real-time.  
It is designed to be lightweight, responsive, and scalable, making it ideal for interactive communication, content sharing, and user engagement.  

---

## Table of Contents  
- [Project Overview](#project-overview)  
- [Problem Statement](#problem-statement)  
- [Goals and Objectives](#goals-and-objectives)  
- [User Stories](#user-stories)  
- [Functional Requirements](#functional-requirements)  
- [Non-functional Requirements](#non-functional-requirements)  
- [Technology Stack](#technology-stack)  
- [System Features](#system-features)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [Environment Variables](#environment-variables)  
- [Usage](#usage)  
- [Available Scripts](#available-scripts)  
- [API Endpoints](#api-endpoints)  
- [Frontend Pages](#frontend-pages)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Project Overview  
ChatGram is a responsive, secure, and scalable social media application.  

Features include:  
- Authentication (JWT)  
- Post and Story Management  
- Real-time Chat with Socket.IO  
- Likes and Comments  
- Follow/Unfollow System  
- Notifications  
- Admin Moderation Tools  

It balances rich functionality with ease of deployment and maintainability.  

---

## Problem Statement  
Most existing social media apps are either:  
- Too complex for small-scale deployments, or  
- Lack centralized content and user control.  

ChatGram solves this by offering a secure, efficient, and manageable solution for both users and administrators.  

---

## Goals and Objectives  
- Build a secure and scalable fullstack platform  
- Provide CRUD operations for posts and stories with media support  
- Implement real-time messaging with Socket.IO  
- Enable followers/following and personalized feeds  
- Deliver a responsive UI (React + Tailwind)  
- Secure sessions with JWT authentication  
- Provide admin tools for moderation and analytics  

---

## User Stories  
**Visitor**  
- Browse public posts  
- View trending content  

**Registered User**  
- Sign up / Log in securely  
- Create, edit, and delete posts and stories  
- Like and comment on posts  
- Follow/unfollow users  
- Real-time chat and notifications  

**Administrator**  
- Moderate users, posts, and chats  
- Manage flagged content  
- Access analytics  

---

## Functional Requirements  
- Authentication: JWT, bcrypt, password reset  
- Posts/Stories: CRUD, media upload, likes, comments  
- Chat: Real-time private messaging, history storage  
- Followers/Friends: Follow/unfollow system  
- Notifications: Real-time alerts for all activities  
- Search: Find users and content  
- Admin Panel: Content moderation, analytics  

---

## Non-functional Requirements  
- Performance: Pages load in under 3 seconds  
- Scalability: Support 1000+ concurrent users  
- Security: JWT, bcrypt, input validation  
- Usability: Fully responsive  
- Reliability: Error handling and minimal downtime  

---

## Technology Stack  
**Frontend**  
- React.js, Tailwind CSS  
- Axios, Context API / Redux  

**Backend**  
- Node.js, Express.js  
- Socket.IO, JWT, Bcrypt  

**Database**  
- MySQL (Sequelize ORM)  

**Deployment & DevOps**  
- GitHub, Vercel/Netlify/Render  
- Postman (API Testing)  

**Cloud / Storage**  
- Cloudinary / AWS S3  

---

## System Features  
- User Management: Registration, login, profile updates  
- Post & Story Management  
- Messaging: Real-time chat with history  
- Notifications  
- Search users and content  
- Admin Panel for moderation and analytics  

---

## Project Structure  

```bash
chatgram/
├─ backend/                        
│  ├─ config/                      
│  ├─ controllers/                 
│  ├─ models/                      
│  ├─ routes/                      
│  ├─ middlewares/                 
│  ├─ utils/                       
│  ├─ .env                         
│  ├─ server.js                    
│  └─ package.json                 
│
├─ frontend/                       
│  ├─ public/                      
│  ├─ src/                         
│  │   ├─ api/                     
│  │   ├─ components/              
│  │   ├─ pages/                   
│  │   ├─ context/                 
│  │   ├─ App.js                   
│  │   └─ index.js                 
│  ├─ package.json                 
│  └─ vite.config.js               
│
└─ README.md                       



# Installation
Prerequisites

  - Node.js v18+
 - MySQL
 - npm or yarn

# Steps

# Clone repository
git clone https://github.com/chatgram-platform/chatgram-app.git
cd chatgram

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

Set up environment variables (see below), then start servers.


 # Environment Variables

Inside backend/.env:
```js
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=chatgramdb
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_url

```Run backend
cd backend
npm run dev

Run frontend
cd frontend
npm run dev

Available Scripts

Backend

npm run dev – Run with nodemon

npm start – Production server

Frontend

npm run dev – Development mode

npm run build – Build for production

npm run preview – Preview build

API Endpoints

Auth

POST /api/auth/register – Register

POST /api/auth/login – Login

POST /api/auth/logout – Logout

Users

GET /api/users/:id – Get profile

PUT /api/users/:id – Update profile

POST /api/users/:id/follow – Follow

POST /api/users/:id/unfollow – Unfollow

Posts

GET /api/posts – List posts

POST /api/posts – Create post

PUT /api/posts/:id – Update post

DELETE /api/posts/:id – Delete post

Comments

POST /api/comments – Add comment

DELETE /api/comments/:id – Delete comment

Chat

GET /api/chats/:id – Get messages

POST /api/chats – Send message

Stories

GET /api/stories – List stories

POST /api/stories – Create story

DELETE /api/stories/:id – Delete story

Frontend Pages

Home: Feed of posts and stories

Login: Secure login

Register: Create an account

Profile: User’s profile with posts and followers

Chat: Real-time messaging

Contributing

Contributions are welcome.

Fork the repository

Create a new branch (git checkout -b feature-xyz)

Commit changes (git commit -m "Add new feature")

Push branch (git push origin feature-xyz)

Open a Pull Request

License

This project is licensed under the MIT License.
