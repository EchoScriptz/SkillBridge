# 🚀 HackStarter — Hackathon Boilerplate

Full-stack starter template: **React (Vite) + Tailwind CSS** frontend + **Express + MongoDB** backend.

## 📁 Project Structure

```
├── client/                    # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/        # Navbar, Sidebar, MainLayout
│   │   │   ├── ui/            # Button, Card, Modal, Input, Toast, etc.
│   │   │   └── features/      # DataTable, StatCard, ChartWrapper, SearchBar
│   │   ├── pages/             # Home, Login, Signup, Dashboard, NotFound
│   │   ├── context/           # ThemeContext, AuthContext, ToastContext
│   │   ├── hooks/             # useApi
│   │   └── utils/             # api, validators, formatters, constants
│   └── ...
├── server/                    # Backend (Express + MongoDB)
│   ├── models/                # User, Item (rename to anything)
│   ├── controllers/           # auth, user, item CRUD
│   ├── routes/                # auth, user, item routes
│   ├── middleware/             # auth, error, validate
│   └── utils/                 # response helpers, AppError
└── README.md
```

## 🚀 Quick Start

### Frontend
```bash
cd client
npm install
npm run dev          # → http://localhost:5173
```

### Backend
```bash
cd server
npm install
cp .env.example .env  # Edit your MongoDB URI
npm run dev          # → http://localhost:5000
```

## ⚡ What's Included

### Frontend
- ✅ Dark/Light theme toggle
- ✅ Navbar with search, notifications, profile dropdown
- ✅ Collapsible sidebar with active state
- ✅ Reusable UI: Button, Card, Modal, Input, Toast, Badge, Loader, EmptyState
- ✅ DataTable with sorting + pagination
- ✅ Charts (Bar, Line, Pie via Recharts)
- ✅ StatCards with trend indicators
- ✅ Search with debounce
- ✅ Auth pages (Login/Signup) with validation
- ✅ Dashboard page with sample data
- ✅ API utility (Axios + interceptors)
- ✅ Form validation helpers

### Backend
- ✅ Express + MongoDB (Mongoose)
- ✅ JWT Authentication (signup/login/me)
- ✅ User CRUD with pagination
- ✅ Generic Item CRUD (rename for any entity)
- ✅ Role-based authorization
- ✅ Centralized error handling
- ✅ Request validation middleware

## 🔧 Hackathon Day Guide

1. **Rename `Item` model** → `Complaint`, `Product`, `Task`, etc.
2. **Update `constants.js`** → Change `APP_NAME`, `NAV_LINKS`, `STATUS_OPTIONS`
3. **Add new routes** in `App.jsx` and new links in `constants.js`
4. **Swap dummy data** with real API calls using `useApi` hook
5. **Plug in charts** with `ChartWrapper` → pass your data

## 📡 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/signup` | ❌ | Create account |
| POST | `/api/auth/login` | ❌ | Login |
| GET | `/api/auth/me` | ✅ | Get current user |
| GET | `/api/users` | ✅ | List users (paginated) |
| GET | `/api/users/:id` | ✅ | Get user |
| PUT | `/api/users/:id` | ✅ | Update user |
| DELETE | `/api/users/:id` | ✅ Admin | Delete user |
| GET | `/api/items` | ✅ | List items (filter, search, paginate) |
| GET | `/api/items/:id` | ✅ | Get item |
| POST | `/api/items` | ✅ | Create item |
| PUT | `/api/items/:id` | ✅ Owner | Update item |
| DELETE | `/api/items/:id` | ✅ Owner | Delete item |
