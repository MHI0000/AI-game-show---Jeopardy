# AI Game Show 🎮🤖

An AI-powered trivia game that generates questions dynamically using Google's Gemini model.
Players answer questions, receive explanations, and compete on a leaderboard.

This project demonstrates:

* Full-stack development
* AI API integration
* REST API design
* Frontend state management
* Backend services

---

# Features

* 🤖 AI-generated trivia questions
* 💡 Answer explanations
* ⏱ Timer-based gameplay
* 🏆 Leaderboard system
* ⚡ Real-time API communication

---

# Tech Stack

Frontend

* Next.js
* React
* TypeScript

Backend

* FastAPI
* Python

AI

* Google Gemini API

---

# Project Structure

```
ai-game-show
│
├── backend
│   ├── main.py
│   ├── ai.py
│   └── .env
│
├── frontend
│   ├── app
│   │   └── game
│   │       └── page.tsx
│   └── package.json
│
└── README.md
```

---

# Requirements

Install the following before running the project.

* Python 3.9+
* Node.js 18+
* npm

---

# Setup

## 1. Clone the Repository

```bash
git clone https://github.com/MHI0000/AI-game-show---Jeopardy
cd AI-game-show---Jeopardy
```

---

# Backend Setup

Navigate to the backend directory.

```bash
cd backend
```

Create a virtual environment.

```bash
python -m venv venv
```

Activate it.

Mac / Linux:

```bash
source venv/bin/activate
```

Windows:

```bash
venv\Scripts\activate
```

Install dependencies.

```bash
pip install -r requirements.txt
```

---

## Configure Environment Variables

Create a `.env` file inside the **backend** folder.

```
GEMINI_API_KEY=your_api_key_here
```

You can obtain an API key from:

[https://ai.google.dev](https://ai.google.dev)

---

# Run the Backend Server

```bash
uvicorn main:app --reload
```

The backend API will run at:

```
http://127.0.0.1:8000
```

Example endpoints:

```
GET /question
POST /score
GET /leaderboard
```

---

# Frontend Setup

Open a new terminal and go to the frontend folder.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

---

# Run the Frontend

```bash
npm run dev
```

The app will run at:

```
http://localhost:3000/game
```

---

# How to Play

1. Start both the backend and frontend servers.
2. Open `http://localhost:3000/game`.
3. Answer AI-generated trivia questions.
4. Receive explanations after each answer.
5. Save your score to the leaderboard.

---

# Future Improvements

Potential enhancements for the project:

* Difficulty scaling based on score
* Multiplayer mode
* Persistent database for leaderboard
* Authentication
* UI improvements
* Deploy with Docker

---

# License

This project is for educational and demonstration purposes.

---
