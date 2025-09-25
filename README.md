ChatGram

ChatGram is a fullstack social media platform that enables users to connect, share posts and stories, engage through comments and likes, and chat in real-time. The system is designed to provide a lightweight yet scalable social platform, suitable for interactive communication, content sharing, and user engagement.

The platform is built using Node.js + Express + MySQL for the backend and React + Tailwind CSS for the frontend, with Socket.IO enabling real-time communication.

Table of Contents

Project Overview

Problem Statement

Goals and Objectives

User Stories

Functional Requirements

Non-functional Requirements

Technology Stack

System Features

Project Structure

Installation

Environment Variables

Usage

Available Scripts

API Endpoints

Frontend Pages

Contributing

License

Project Overview

ChatGram is a responsive, secure, and scalable social media application. It supports user registration, authentication, content sharing (posts and stories), real-time chat, and engagement through likes, comments, and notifications.

It addresses the need for a streamlined social platform that balances rich functionality with ease of deployment and maintainability.

Problem Statement

Many existing social media applications are either too complex for smaller deployments or lack centralized control over user activity. ChatGram provides a secure, efficient, and manageable solution where users can engage with content and communicate while administrators maintain oversight of community standards and user-generated content.

Goals and Objectives

Build a secure and scalable fullstack platform.

Provide CRUD operations for posts and stories with media support.

Implement real-time messaging using Socket.IO.

Enable follower/following interactions and personalized feeds.

Deliver responsive and intuitive UI using React and Tailwind CSS.

Secure user sessions with JWT authentication.

Provide administrative tools for moderation and analytics.

User Stories

Visitor

Browse public posts.

View trending content.

Registered User

Sign up and log in securely.

Create, edit, and delete posts and stories.

Like and comment on posts.

Follow and unfollow users.

Send and receive real-time messages.

Receive notifications for likes, comments, and messages.

Administrator

Moderate posts, users, and chat content.

Approve or reject flagged content.

Access analytics on engagement and activity.

Functional Requirements
Authentication

Secure registration and login using JWT.

Password hashing with bcrypt.

Reset password with email verification.

Posts and Stories

CRUD operations for posts and stories.

Image and media uploads.

Like and comment functionality.

Filtering by user or category.

Chat / Messaging

Real-time private messaging using Socket.IO.

Storage of chat history in MySQL.

Notifications for new messages.

Followers / Friends

Follow/unfollow system.

Personalized feed based on followed users.

Notifications

Real-time alerts for messages, likes, comments, and story views.

Search

Efficient search for users and content.

Admin Panel

Moderate content and manage users.

Monitor flagged messages.

Generate reports on engagement.

Non-functional Requirements

Performance: Load main pages in under 3 seconds.

Scalability: Support 1000+ concurrent users.

Security: Use secure password hashing, JWT authentication, and input validation.

Usability: Fully responsive UI.

Reliability: Graceful error handling and minimal downtime.

Technology Stack

Frontend

React.js

Tailwind CSS

Axios

Context API / Redux

Backend

Node.js

Express.js

Socket.IO

JWT

Bcrypt

Database

MySQL (with Sequelize ORM)

DevOps / Deployment

GitHub for version control

Render, Vercel, or Netlify for hosting

Postman for API testing

Cloud / Storage

Cloudinary or AWS S3 for media uploads

System Features

User Management: Registration, login, and profile updates.

Post Management: Create, edit, delete posts with media support.

Story Management: Temporary stories with viewing functionality.

Messaging: Real-time chat with persistent message history.

Notifications: Alerts for interactions and activities.

Search: Efficient discovery of users and content.

Admin Panel: Moderation and analytics for content and users.

Project Structure
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

Installation
Prerequisites

Node.js v18+

MySQL

npm or yarn

Steps

Clone the repository:

git clone https://github.com/chatgram-platform/chatgram-app.git
cd chatgram


Install backend dependencies:

cd backend
npm install


Install frontend dependencies:

cd ../frontend
npm install


Configure environment variables.

Start backend and frontend servers.

Environment Variables

Create a .env file inside backend/. Example:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=chatgramdb
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_url

Usage

Run backend:

cd backend
npm run dev


Run frontend:

cd frontend
npm run dev

Available Scripts

Backend

npm run dev – Run with nodemon.

npm start – Production server.

Frontend

npm run dev – Development mode.

npm run build – Build for production.

npm run preview – Preview build.

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

Home: Feed of posts and stories.

Login: Secure login.

Register: Create an account.

Profile: User’s profile with posts and followers.

Chat: Real-time messaging.

License

This project is licensed under the MIT License.