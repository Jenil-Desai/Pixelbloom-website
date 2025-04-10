# 🌸 Pixelbloom Studio

**Pixelbloom Studio** is a dynamic web platform designed for digital artists and platform admins to manage, upload, and
gain insights into wallpapers shared through the Pixelbloom ecosystem. The platform features dedicated dashboards for
both artists and administrators, making content management and analytics seamless.

---

## 📑 Table of Contents

1. [Overview](#-overview)
2. [Technologies](#-technologies)
3. [Packages & Libraries Used](#-packages--libraries-used)
4. [Getting Started](#-getting-started)
5. [Setup](#-setup)
6. [Features](#-features)
7. [Demo & Screenshots](#-demo--screenshots)
8. [Acknowledgments](#-acknowledgments)
9. [License](#-license)

---

## 🌟 Overview

Pixelbloom Studio is the creator and admin interface of the Pixelbloom platform. Artists can upload wallpapers, manage
profiles, and gain valuable statistics through an elegant dashboard. Admins get extended capabilities like managing
users, reviewing content, and accessing cross-platform data analytics.

---

## 💻 Technologies

| Technology     | Description                                  |
|----------------|----------------------------------------------|
| **TypeScript** | Language for scalable application dev        |
| **PostgreSQL** | Relational database management               |
| **Next.js**    | React framework for building full-stack apps |

---

## 📦 Packages / Libraries Used

| Package / Library        | Purpose                                  |
|--------------------------|------------------------------------------|
| **Tailwind CSS**         | Utility-first CSS framework              |
| **Shadcn UI**            | Component library for styled UI elements |
| **Magic UI**             | Stylish UI enhancements                  |
| **Recharts**             | Charting library for dashboard stats     |
| **Jotai**                | Lightweight state management             |
| **TanStack React Query** | Server state & data fetching             |
| **Prisma ORM**           | Database ORM with type safety            |
| **Clerk Auth**           | Authentication and user management       |
| **Hashless**             | Hashing and string verification          |
| **Zod**                  | Schema validation                        |
| **Axios**                | API calls                                |
| **moment**               | Date formatting                          |
| **Country Data List**    | For profile and regional insights        |

---

## 🚀 Getting Started

1. Download Node.js
2. Download PostgreSQL & Setup Database
3. Download IDE (e.g., Visual Studio Code)
4. Create Account On [Clerk](https://clerk.dev/)
5. Create Account On [Cloudflare R2](https://www.cloudflare.com/products/r2/)

---

## ⚙️ Setup

1. Clone The Repository
    ```bash
    git clone https://github.com/Jenil-Desai/Pixelbloom-website.git
    ```

2. Navigate to the project directory
    ```bash
    cd Pixelbloom-website
    ```

3. Install dependencies
    ```bash
    bun install
    ```

4. Create a `.env` file in the root directory and add the following environment variables:
    ```dotenv
      # Databse Environment Variables
      DATABASE_URL="postgresql://postgres:password@localhost:5432/pixelbloom?connection_limit=1"

      # Clerk settings Environment Variables
      NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
      NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
      NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
      NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

      # Clerk Environment Variables
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
      CLERK_SECRET_KEY=""
      SIGNING_SECRET=""

      # Cloudflare R2 Environment Variables
      TOKEN_VALUE=""
      BUCKET_NAME=""
      ACCOUNT_ID=""
      ACCESS_KEY_ID=""
      SECRET_ACCESS_KEY=""
    ```

5. Run the Prisma migration to set up the database
    ```bash
    bunx prisma migrate dev --name init
    ```

6. Run the development server
    ```bash
    bun dev
    ```

---

## 🎯 Features

### 🧑‍🎨 For Artists:

- Register & login functionality
- Manage uploaded wallpapers
- Update personal profiles
- Access insightful analytics and statistics

### 👑 For Admins:

- All features available to artists
- Add new mobile app users
- Access platform-wide insights and statistics
- Moderate and delete improperly uploaded wallpapers

---

## 📸 Demo & Screenshots

| Mockup                              | Home Page                                 | Admin Dashboard Page                                       | Artists List Page                                    | User List Page                                  | Wallpaper List Page                                          | Wallpaper Upload Page                                        | Accounts Page                                |
|-------------------------------------|-------------------------------------------|------------------------------------------------------------|------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|----------------------------------------------|
| ![Mockup](./screenshots/Mockup.png) | ![Home Page](./screenshots/HomePage.jpeg) | ![Admin Dashboard Page](./screenshots/AdminDashboard.jpeg) | ![Artists List Page](./screenshots/ArtistsList.jpeg) | ![User List Page](./screenshots/UsersList.jpeg) | ![Wallpaper List Page](./screenshots/WallpapersListing.jpeg) | ![Wallpaper Upload Page](./screenshots/UploadWallpaper.jpeg) | ![Accounts Page](./screenshots/Account.jpeg) |

---

## 🙏 Acknowledgments

1. [Next.js Docs](https://nextjs.org/docs)
2. [Clerk Docs](https://clerk.com/docs)
3. [Shadcn UI Docs](https://ui.shadcn.com/docs)
4. [Magic UI Docs](https://magicui.dev/)
5. [Jotai Docs](https://jotai.org/docs/introduction)
6. [TanStack React Query Docs](https://tanstack.com/query/v4)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for more details.

---

### 🚀 Empowering creators through insights and control with **Pixelbloom Studio**