# Activity AI Suggestion App

This is a full-stack web application that suggests short activities based on the user's available time and energy level. The backend uses **Node.js**, **Express**, and **Gemini AI** to generate activity suggestions, while the frontend is built with **React**, **Vite**, and **Bootstrap** for a clean and responsive UI.

---

## Features

- Select your available **minutes** and **energy level** (low, medium, high).
- Get **AI-generated activity suggestions** tailored to your inputs.
- Clean and minimal UI with Bootstrap.
- Modular code using reusable components and TypeScript types.

---

## Technologies Used

### Backend

- Node.js + Express
- TypeScript
- Google Gemini API (via `@google/generative-ai`)
- CORS enabled for frontend access

### Frontend

- React + Vite
- TypeScript
- Bootstrap 5

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- NPM or Yarn
- Gemini API Key from Google AI Studio

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/activity-ai-suggest.git
cd activity-ai-suggest
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create .env file

```
GEMINI_API_KEY=your_gemini_api_key
PORT=3001
```

Start Backend

```
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Visit http://localhost:5173 in your browser.

## Folder Structure

```
activity-ai-suggest/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── types/
│   ├── app.ts
│   ├── server.ts
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── types/
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── ...
```
