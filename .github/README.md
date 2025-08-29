# Handworks Web Platform

![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge\&logo=react)
![Vite](https://img.shields.io/badge/Vite-4-646CFF?style=for-the-badge\&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=for-the-badge\&logo=tailwind-css)
![TanStack Router](https://img.shields.io/badge/TanStack%20Router-Latest-FF6B6B?style=for-the-badge\&logo=reactrouter)
![shadcn/ui](https://img.shields.io/badge/Shadcn/UI-Components-000000?style=for-the-badge)

---

## Overview

**Handworks Web** is the client-facing platform for **Handworks Cleaning Services**, built with **React**, **Vite**, **TailwindCSS**, **TanStack Router**, and **shadcn/ui**. This repository handles the **frontend** implementation, while all backend logic and APIs are managed through a dedicated [backend repository](https://github.com/Gnashal/handworks-microservice).

---

## Getting Started

### 1. Clone the Repository

#### HTTPS

```bash
git clone https://github.com/Gnashal/handworks-web.git
```

#### SSH

```bash
git clone git@github.com:Gnashal/handworks-web.git
```

---

### 2. Install Dependencies

```bash
npm install
```

> **Note:** Use **Node.js >= 18** and **npm >= 9** for best compatibility.

---

### 3. Run the Development Server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## Routing

This project uses **[TanStack Router](https://tanstack.com/router/latest/docs/framework/react/quick-start)** for routing. We implement **file-based routing**, where folders and files in the `src/routes` directory automatically define their own routes.

Example structure:

```
src/
└── routes/
    ├── __root.tsx      # Global layout (navbars, footers, etc.)
    ├── index.tsx       # Home route → "/"
    ├── about.tsx       # About page → "/about"
    └── bookings/
        └── index.tsx   # Nested route → "/bookings"
```

* `__root.tsx` defines the global layout and renders `<Outlet />` for child routes.
* Nested folders create nested routes automatically.

---

## UI Components

We use **[shadcn/ui](https://ui.shadcn.com/docs)** for accessible, reusable, and themeable UI components.

* Components live under `src/components`
* Fully integrated with **TailwindCSS**
* Can be customized or extended as needed

---

## Backend Integration

All business logic and API endpoints are handled by a dedicated backend repository:

**Repository:** [Handworks Microservice Backend](https://github.com/Gnashal/handworks-microservice)

The frontend communicates with the backend via REST and GraphQL APIs.

---

## Tech Stack

| Layer          | Technology                                                                  |
| -------------- | --------------------------------------------------------------------------- |
| **Frontend**   | React + Vite                                                                |
| **Styling**    | TailwindCSS + shadcn/ui                                                     |
| **Routing**    | TanStack Router                                                             |
| **State Mgmt** | React Query (via TanStack)                                                  |
| **Backend**    | [Handworks Microservice](https://github.com/Gnashal/handworks-microservice) |
| **Language**   | TypeScript                                                                  |

---

## Additional Resources

* **TanStack Router Documentation:** [https://tanstack.com/router/latest/docs/framework/react/quick-start](https://tanstack.com/router/latest/docs/framework/react/quick-start)
* **shadcn/ui Documentation:** [https://ui.shadcn.com/docs](https://ui.shadcn.com/docs)
* **Backend Repository:** [https://github.com/Gnashal/handworks-microservice](https://github.com/Gnashal/handworks-microservice)

---

## Contributing

1. Clone the repository
2. Create a new branch (`feature`)
3. Commit your changes
4. Push to your branch
5. Open a pull request

---

## Quick Setup Summary

```bash
# Clone the repo
git clone https://github.com/Gnashal/handworks-web.git

# Install dependencies
npm install

# Start development server
npm run dev
```

---

Developed and maintained by the **Handworks Development Team**.
