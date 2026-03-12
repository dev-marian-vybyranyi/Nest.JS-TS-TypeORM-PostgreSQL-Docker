# Task Management API

Welcome to the **Task Management API**! This is a robust, well-structured scalable backend application built with **NestJS** and **TypeScript**. Its purpose is to provide a complete set of features for user authentication and task management, including labels and organizational capabilities.

The project is built around modern software engineering principles, employing an Object-Relational Mapper (TypeORM) with a scalable relational database (PostgreSQL), and is entirely containerized for painless execution using Docker. The repository includes fully automated Continuous Integration and Deployment (CI/CD) pipelines managed by GitHub Actions.

---

## 🚀 Key Features

- **User Authentication & Authorization**: Secure user registration, login, and token generation using **Passport.js**, **JWT** (JSON Web Tokens), and secure password hashing via **bcrypt**.
- **Task Management System:** Users can easily perform CRUD (Create, Read, Update, Delete) operations to manage their daily assignments.
- **Task Labels**: Users can categorize and structure their tasks efficiently by applying custom or predefined labels.
- **Advanced Data Validation**: Strict validation schemas and DTOs inside of NestJS utilizing `class-validator`, `class-transformer`, and `Joi`.
- **Database & Migration Strategy**: Comprehensive configuration implemented using **TypeORM** for interacting seamlessly with a **PostgreSQL** database, keeping database schemas in sync with TypeScript entities.
- **Centralized Application Logging**: Native integration with **Sentry** to monitor the state of the API and catch errors intelligently across different environments.
- **CI/CD Workflows**: Streamlined `deploy.yml`, `prod-deploy.yml`, and `dev-deploy.yml` workflows configured with **GitHub Actions** for hassle-free deployments to a DigitalOcean App Platform environment.
- **Dockerized Environment**: Quick and reliable containerized startup leveraging a `.dockerignore`, `Dockerfile` and a `docker-compose.yml` file, making it easy to spin up a fully working local cluster (API + Database).

---

## 🛠 Tech Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM / Query Builder**: TypeORM
- **Testing**: Jest (Unit & e2e testing strategies implemented)
- **Containerization**: Docker, Docker Compose
- **Code Quality**: ESLint, Prettier

---

## 🏗 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 18 or above recommended)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [PostgreSQL](https://www.postgresql.org/) (If running locally outside of the Docker network)

### 1. Clone the repository and install dependencies

```bash
$ git clone <your-repository-url>
$ cd Nest.JS-TS-TypeORM-PostgreSQL-Docker
$ npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory and populate it with the appropriate values:

```env
APP_MESSAGE_PREFIX=NestJS-Task-API
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_pg_user
DB_PASSWORD=your_pg_password
DB_DATABASE=your_pg_database
DB_SYNC=true

JWT_TOKEN=your-very-secure-jwt-secret-key
JWT_EXPIRES_IN=3600s
```

### 3. Running the application (Locally)

To start the compiled NestJS application server:

```bash
# Development
$ npm run start

# Watch mode (automatically restarts on file changes)
$ npm run start:dev

# Production mode
$ npm run start:prod
```

### 4. Running the application (via Docker)

Alternatively, you can boot the entire stack (PostgreSQL + NestJS API) automatically using Docker.

```bash
# Pull images and build the local container setup
$ docker-compose up --build
```
> Note: Make sure to check your `docker-compose.yml` file to verify that ports and database user configurations map correctly to what's inside your `.env` variables.

---

## 🧪 Testing

The API includes strong unit testing and end-to-end (e2e) testing structures.

```bash
# Run Unit Tests
$ npm run test

# Run End-to-End Tests
$ npm run test:e2e

# Get Test Coverage
$ npm run test:cov
```

---

## 📦 Deployment Strategy

The application includes automated deployment configurations built specifically for **DigitalOcean's App Platform** using **GitHub Actions**.

### Dockerfile Strategy
The given `Dockerfile` generates a minimal Node.js `alpine` container structure designed for production environments that performs a slimmened install (`npm ci`) and isolates the final `dist/` compilation artifacts.

### Digital Ocean Health Check
DigitalOcean leverages the native `@Get('/health')` endpoint implemented inside the root AppController to verify container integrity during and after deployment.

### Continuous Deployment (CI/CD)
Using the defined configuration files within the `.github/workflows` directory, pushes branch events towards designated `dev` or `prod` targets seamlessly orchestrate server redeployments with completely transparent downtime.

---

## 📄 License & Credits

This project template leverages the standard boilerplate ecosystem provided by [NestJS](https://nestjs.com), an MIT-licensed open source framework.

Developed as a highly efficient and standardized backend REST architecture.
