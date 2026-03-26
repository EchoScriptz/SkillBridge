````markdown
# 🚀 SkillBridge — Autonomous Freelance Marketplace

A professional, high-performance monorepo architecture built for the SkillBridge platform. Featuring a **React 19 + Vite** frontend and a robust **Express + MongoDB** backend.

---

## 🏗️ Architecture & Monorepo Structure

We use **npm Workspaces** to manage our codebase. This ensures a "single source of truth" for dependencies and allows the API and Web client to exist in one unified repository.

```text
├── apps/
│   ├── api/                 # Express Backend (Node.js)
│   │   ├── controllers/     # Business logic & Request handling
│   │   ├── models/          # Mongoose schemas (User, Task, Bid)
│   │   ├── routes/          # API Endpoints
│   │   └── middleware/      # JWT Auth & Global Error handling
│   └── web/                 # React Frontend (Vite + Tailwind 4)
│       ├── src/
│       │   ├── components/  # Atomic UI (Buttons, Modals, Cards)
│       │   ├── pages/       # Dashboard, Marketplace, Auth
│       │   └── hooks/       # Custom React logic & API integration
├── packages/
│   └── shared/              # [WIP] Shared logic & Validations
├── package.json             # Root Orchestrator (Monorepo Config)
└── README.md
````

-----

## ⚡ Quick Start (Team Sync)

Follow these steps to get the entire environment running in under 60 seconds.

### 1\. Environment Setup

The actual `.env` file is not tracked by Git. You **must** create it from the template for the API to function:

```bash
# From the root directory, run:
cp apps/api/.env.example apps/api/.env
```

### 2\. Standardize Dependencies

From the **Root Directory** (`SkillBridge/`), run the workspace installer. This links all sub-packages:

```bash
npm install
```

### 3\. Launch Development Suite

Start both the Frontend and Backend concurrently with a single command:

```bash
npm run dev
```

  * **Frontend:** [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173)
  * **Backend API:** [http://localhost:5000](https://www.google.com/search?q=http://localhost:5000)

-----

## 🛠️ Tech Stack & Pro Features

### Core Infrastructure

  * **Monorepo Management:** Powered by npm Workspaces & Concurrently.
  * **Database:** MongoDB (Auto-switches to **In-Memory Server** if no URI is found — zero setup required for local dev).
  * **Authentication:** Stateless JWT-based auth with secure Bearer token implementation.

### Frontend (`@skillbridge/web`)

  * **UI Engine:** Tailwind CSS v4 + Lucide Icons.
  * **Data Viz:** Recharts for freelancer analytics and earnings.
  * **Performance:** Vite-powered HMR for instant sub-millisecond updates.

### Backend (`@skillbridge/api`)

  * **Security:** Bcrypt password hashing & CORS protection.
  * **Reliability:** Centralized middleware for request sanitization and error logging.
  * **Monitoring:** Built-in `/api/health` check endpoint.

-----

## 📡 Primary API Endpoints

| Service | Endpoint | Access | Purpose |
| :--- | :--- | :--- | :--- |
| **Auth** | `POST /api/auth/signup` | Public | Register Freelancer/Client |
| **Auth** | `POST /api/auth/login` | Public | Identity Verification |
| **Users** | `GET /api/users/me` | Private | Fetch User Profile |
| **Market** | `GET /api/items` | Private | List Available Projects |
| **Market** | `POST /api/items` | Private | Post a New Job |

-----
