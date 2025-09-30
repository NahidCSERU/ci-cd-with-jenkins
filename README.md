# MyApp Demo

This is a full Dockerized demo project with:

- Backend (Node.js + Express)
- Frontend (HTML + Nginx)
- Nginx reverse proxy
- Docker Compose for multi-container setup
- Jenkins CI/CD pipeline (branch-aware)

## How to Run Locally

1. Build and start all containers:
```
docker-compose up --build
```
2. Open browser:

- Frontend: `http://localhost/`

- Backend API: `http://localhost:5000/api`