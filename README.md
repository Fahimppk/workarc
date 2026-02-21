# WebArc Studio — Portfolio Website

A modern, minimal portfolio website for a web development agency built with **Next.js** (App Router), **Tailwind CSS**, and **Express**.

## Folder Structure

```
workacr/
├── frontend/               # Next.js application
│   ├── app/
│   │   ├── layout.js       # Root layout (Navbar + Footer)
│   │   ├── page.js         # Home page
│   │   ├── globals.css     # Tailwind + custom animations
│   │   ├── about/page.js
│   │   ├── services/page.js
│   │   ├── portfolio/page.js
│   │   ├── reviews/page.js
│   │   └── contact/page.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ServicesPreview.jsx
│   │   ├── FeaturedProjects.jsx
│   │   └── ReviewsPreview.jsx
│   ├── package.json
│   └── next.config.mjs
├── backend/                # Express API
│   ├── server.js
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- **Node.js** 18+ and **npm** installed

### 1. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 2. Run the Backend

```bash
cd backend
npm run dev        # with hot-reload (nodemon)
# or
npm start          # production
```

The API runs on **http://localhost:5000**.

### 3. Run the Frontend

```bash
cd frontend
npm run dev
```

The site runs on **http://localhost:3000**.

## API Endpoints

| Method | Endpoint       | Description          |
|--------|---------------|----------------------|
| GET    | /api/health   | Health check         |
| POST   | /api/contact  | Submit contact form  |

### POST /api/contact

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I need a website."
}
```

## Environment Setup

No environment variables are required for development. For production:

- **Backend**: Set `PORT` env var to change the default port (5000).
- **Frontend**: Update the API URL in `app/contact/page.js` if deploying to a different host.

## Pages

| Page      | Route       | Description                       |
|-----------|-------------|-----------------------------------|
| Home      | /           | Hero, services, projects, reviews |
| About     | /about      | Company info, mission, stats      |
| Services  | /services   | 6 service cards with icons        |
| Portfolio | /portfolio  | 6 project cards with tech tags    |
| Reviews   | /reviews    | Client testimonials + ratings     |
| Contact   | /contact    | Form connected to backend API     |
