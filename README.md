Flashcard Learning App (MERN + Leitner System)
📚 A spaced repetition flashcard app built with the MERN stack using the Leitner System for efficient learning.


🛠 Tech Stack
Frontend: React.js, Tailwind CSS, Axios
Backend: Node.js, Express.js, MongoDB (Mongoose)
Deployment: Vercel (Frontend), Render (Backend)
🎯 Features
✅ Leitner System (3 Levels: 1 → 3 → 7 Days)
✅ Create, Review, and Track Flashcards
✅ Real-time Updates & REST API
✅ Minimal & Responsive UI

📂 Project Structure

flashcard-app/
│── backend/  (Node.js, Express, MongoDB)
│── frontend/  (React, Tailwind CSS)
│── README.md

💻 Setup & Installation

# Install Backend
cd backend && npm install

# Install Frontend
cd ../frontend && npm install

# Run Backend
cd ../backend && npm start

# Run Frontend
cd ../frontend && npm start
🔗 Open http://localhost:3000

📌 API Endpoints
Method	Endpoint	Description
POST	/api/flashcards	Create a new flashcard
GET	/api/flashcards	Get due flashcards
PUT	/api/flashcards/:id	Update flashcard (Leitner logic)
DELETE	/api/flashcards/:id	Delete a flashcard
📝 Future Enhancements
🔹 User Authentication (JWT)
🔹 Dark Mode
🔹 Flashcard Categories & Tags

🔥 Star this repo ⭐ and contribute! 🚀
