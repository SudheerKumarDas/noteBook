# noteBook
---

# 📝 Notebook App

A full-stack note-taking web application where users can create, read, update, and delete notes easily. Built with modern web technologies and deployed on Render.

🔗 **Live Demo:** [https://notebook-i487.onrender.com](https://notebook-i487.onrender.com)

---

## 🚀 Features

* 🆕 Create new notes
* ✏️ Edit existing notes
* 🗑️ Delete notes
* 📄 View all notes in a clean UI
* ⚡ Fast and responsive interface
* 🌐 Fully deployed full-stack application

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* Tailwind CSS / DaisyUI
* Axios
* React Router

**Backend:**

* Node.js
* Express.js
* MongoDB + Mongoose
* dotenv
* CORS

**Deployment:**

*  Render


## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/notebook-app.git
cd notebook-app
```

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

### 3. Setup environment variables

Create a `.env` file in the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

---

### 4. Run the project locally

#### Start backend

```bash
cd backend
npm run dev
```

#### Start frontend

```bash
cd frontend
npm run dev
```

---

## 🌐 API Endpoints

| Method | Route      | Description   |
| ------ | ---------- | ------------- |
| GET    | /notes     | Get all notes |
| POST   | /notes     | Create a note |
| PUT    | /notes/:id | Update a note |
| DELETE | /notes/:id | Delete a note |

---

## 📁 Folder Structure

```
notebook-app/
├── backend/
│   ├── Routes/
│   ├── models/
│   ├── config/
│   └── index.js
├── frontend/
│   ├── src/
│   ├── components/
│   └── App.jsx
└── README.md
```

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

## 📄 License

This project is open source and available under the MIT License.

---

## ⭐ Acknowledgements

* React Docs
* MongoDB Atlas
* Render Hosting

---

If you like this project, give it a ⭐ on GitHub!

