# noteBook
````md
# 📝 Notebook App

> A modern full-stack note-taking application built with the MERN stack. Create, edit, delete, and manage notes with a fast and clean UI.

---

## 🚀 Live Demo

🔗 https://notebook-i487.onrender.com

---

## ✨ Features

- 🆕 Create notes instantly  
- ✏️ Edit existing notes  
- 🗑️ Delete notes with confirmation  
- 📄 View all notes in a clean dashboard  
- ⚡ Fast REST API using Express  
- 📱 Fully responsive UI  
- 🌐 Deployed full-stack application  

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Tailwind CSS / DaisyUI

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- CORS
- dotenv

### Deployment
- Frontend: Vercel / Netlify  
- Backend: Render  
- Database: MongoDB Atlas  

---

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/notebook-app.git
cd notebook-app
````

---

### 2. Install dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

---

### 3. Environment Variables

Create a `.env` file inside `backend/`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

---

### 4. Run the project locally

#### Start Backend

```bash
cd backend
npm run dev
```

#### Start Frontend

```bash
cd frontend
npm run dev
```

---

## 📡 API Endpoints

| Method | Route      | Description   |
| ------ | ---------- | ------------- |
| GET    | /notes     | Get all notes |
| POST   | /notes     | Create note   |
| PUT    | /notes/:id | Update note   |
| DELETE | /notes/:id | Delete note   |

---

## 📁 Project Structure

```
notebook-app/
├── backend/
│   ├── config/
│   ├── middlewares/
│   ├── Routes/
│   ├── models/
│   └── index.js
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
└── README.md
```

---

## 🚀 Deployment Notes

* Backend hosted on Render
* MongoDB Atlas used for database
* Make sure CORS is enabled for frontend domain
* Add environment variables in hosting dashboard

---

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Commit changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!

