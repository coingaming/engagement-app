# Fullstack TypeScript Coding Exercise

This repository contains a barebone fullstack TypeScript application setup for a live coding exercise. The application includes a TypeScript Express backend and a React + Vite + Tailwind frontend.

## Requirements

- Node.js (v22+)
- npm or yarn
- Docker and Docker Compose (for database containers)

## Project Structure

```
engagement-app/
├── backend/                 # Express + TypeScript backend
│   ├── src/                 # Source code
│   │   ├── __tests__/       # Backend tests
│   │   └── index.ts         # Server entry point
│   ├── package.json         # Backend dependencies
│   ├── tsconfig.json        # TypeScript configuration
│   └── jest.config.js       # Jest configuration
│
├── frontend/                # React + Vite + Tailwind frontend
│   ├── src/                 # Source code
│   │   ├── __tests__/       # Frontend tests
│   │   ├── services/        # API service layer
│   │   ├── App.tsx          # Main application component
│   │   └── index.css        # Global styles with Tailwind
│   ├── package.json         # Frontend dependencies
│   └── vite.config.ts       # Vite configuration
│
├── docker-compose.yml       # Database containers (PostgreSQL & MongoDB)
└── package.json             # Root level scripts
```

## Technologies and Libraries

### Backend
- **Express**: Web framework for Node.js
- **TypeScript**: Typed JavaScript
- **Jest & Supertest**: Testing framework
- **Cors**: Cross-origin resource sharing middleware
- **Dotenv**: Environment variables management

### Frontend
- **React**: UI library
- **Vite**: Next-generation frontend tooling
- **TypeScript**: Typed JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: Promise-based HTTP client
- **Vitest & Testing Library**: Testing framework

### Database
- **PostgreSQL**: Relational database
- **MongoDB**: NoSQL document database

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd engagement-app
```

### 2. Install dependencies

Install root dependencies:
```bash
npm install
```

Install backend dependencies:
```bash
cd backend
npm install
cd ..
```

Install frontend dependencies:
```bash
cd frontend
npm install
cd ..
```

### 3. Set up database containers

Start the database containers:
```bash
docker-compose up -d
```

This will start PostgreSQL (accessible at localhost:5432) and MongoDB (accessible at localhost:27017) containers.

### 5. Start development servers

From the project root, run:
```bash
npm run dev
```

This will start both the backend and frontend development servers:
- Backend: http://localhost:5999
- Frontend: http://localhost:5173

## Development Workflow

### Backend
- The backend runs with nodemon, which automatically restarts the server when changes are detected
- API endpoints are defined in `backend/src/index.ts`
- Add new routes and controllers as needed

### Frontend
- The frontend uses Vite for fast HMR (Hot Module Replacement)
- The main component is in `frontend/src/App.tsx`
- API service is in `frontend/src/services/api.ts`
- Styling is done with Tailwind CSS

## Running Tests

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

### Watch Mode for Frontend Tests
```bash
cd frontend
npm run test:watch
```

## Database Information

### PostgreSQL
- **Host**: localhost
- **Port**: 5432
- **User**: postgres
- **Password**: postgres_password
- **Database**: app_database

### MongoDB
- **Host**: localhost
- **Port**: 27017
- **User**: mongo
- **Password**: mongo_password
- **Database**: app_database

## Candidate Instructions

This repository is set up for a live coding exercise. You will be given specific requirements to implement during the interview.

The project provides a minimal but complete starting point that includes:
- A functioning backend and frontend
- Database connections
- Testing framework
- Basic API structure

Good luck with your coding exercise!
