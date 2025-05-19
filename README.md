# 🛒 MERN Fullstack E-commerce Application

This is a modern fullstack e-commerce web application built using the MERN stack with **React + Vite** on the frontend and **Node.js + Express + MongoDB** on the backend.

---

## 📦 Tech Stack

### Frontend
- ⚛️ React 19 (with JSX and Hooks)
- ⚡ Vite (super fast dev server and build tool)
- 🎨 TailwindCSS & Material UI for styling
- 📦 Axios for API communication
- 🌐 React Router DOM for routing

### Backend
- 🚀 Node.js + Express 
- 🛢️ MongoDB (Database)

---

## 📁 Project Structure

Frontend/ <br/>
├── public/ <br/>
├── src/ <br/>
│ ├── components/ <br/>
│ ├── pages/ <br/>
│ ├── App.jsx <br/>
│ └── main.jsx <br/>
├── index.html <br/>
├── package.json <br/>
├── vite.config.js <br/>
└── tailwind.config.js <br/>

Backend/
├── controllers/ <br/>
├── models/ <br/>
├── node_modules/ <br/>
├── routers/ <br/>
├── .env <br/>
├── index.js <br/>
├── package.json <br/>
└── package-lock.json <br/>


---

## 🚀 Getting Started

### 📌 Prerequisites
- Node.js & npm
- MongoDB running locally or on cloud (e.g. MongoDB Atlas)

### 🖥️ Frontend Setup

```bash
cd Frontend
npm install
npm run dev
# Runs the app at http://localhost:5173
```
### ⚙️ Backend Setup
```bash
# Open terminal inside the backend folder:

npm install
npm start
# By default, backend runs at http://localhost:5000
```
## 🛡️ Environment Variables
```bash
# Add these in your backend .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
---
## 🌐 Features

- 🔐 **User Authentication** (Login/Register)
- 🛍️ **Product Listings**
- 🛒 **Add to Cart**
- 📦 **Checkout Flow**
- ⚙️ **Admin Panel** *(optional based on backend code)*
- 📱 **Responsive Design**

## 🙌 Acknowledgements

This project is made possible thanks to the following open-source technologies:

- ⚛️ [React](https://reactjs.org/) – JavaScript library for building user interfaces
- ⚡ [Vite](https://vitejs.dev/) – Frontend build tool for fast development
- 🛢️ [MongoDB](https://www.mongodb.com/) – NoSQL database for backend storage
- 🎨 [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- 🧩 [Material UI](https://mui.com/) – React UI component library





