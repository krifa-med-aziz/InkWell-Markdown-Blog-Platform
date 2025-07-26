
  # InkWell - A React-Based Markdown Blog Platform

A modern, feature-rich blog platform built with React, TypeScript, and Tailwind CSS that supports Markdown content creation, user authentication, and comprehensive blog management.
<div align="center">

  ---

![Last Commit](https://img.shields.io/github/last-commit/krifa-med-aziz/InkWell-Markdown-Blog-Platform)
![Languages](https://img.shields.io/github/languages/count/krifa-med-aziz/InkWell-Markdown-Blog-Platform)
![Top Language](https://img.shields.io/github/languages/top/krifa-med-aziz/InkWell-Markdown-Blog-Platform)

---
</div>




## 🛠 Tech Stack

**Core:**

* ![React](https://img.shields.io/badge/-React-61DAFB?logo=react\&logoColor=white)
* ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript\&logoColor=white)
* ![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwind-css\&logoColor=white)
* ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite\&logoColor=white)
* ![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=react-router\&logoColor=white)

**Tools & Libraries:**

* ReactMarkdown
* React-Toastify
* Lucide React
* Material UI
* Remark & Rehype plugins

---
  



## 📑 Table of Contents

* [Features](#-features)
* [Installation](#-installation)
* [Architecture](#-architecture)
* [Data Management](#-data-management)
* [Usage Guide](#-usage-guide)
* [Deployment](#-deployment)
* [Contributing](#-contributing)
* [License](#-license)
* [Future Enhancements](#-future-enhancements)
* [Stats](#-project-stats)
* [Acknowledgments](#-acknowledgments)

---

## ✨ Features

### Core

* 🔐 Authentication system (login/signup)
* 📝 Markdown post editor with syntax highlighting
* 🔍 Search & filter by title, author, tags (with URL state)
* 📌 Bookmark posts (per user)
* 🏷 Tag filtering (MUI Tabs)
* 📅 Sort by date (newest/oldest)
* ✅ Full CRUD support
* 📱 Responsive layout

### Advanced

* 🧭 URL-based state persistence
* 💾 LocalStorage for data persistence
* ⚡ Lazy loading for performance
* 🔔 Toast notifications
* 🧪 Form validation
* ⏪ Smart navigation flow

---

## 📦 Installation

```bash
git clone https://github.com/krifa-med-aziz/InkWell-Markdown-Blog-Platform.git
cd InkWell-Markdown-Blog-Platform
npm install
npm run dev
```

Go to: `http://localhost:5173`

---

## 🧱 Architecture

### Context Tree:

```
<UserContextProvider>
  <SearchTextContextProvider>
    <BlogPostsContextProvider>
      <BookmarksContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookmarksContextProvider>
    </BlogPostsContextProvider>
  </SearchTextContextProvider>
</UserContextProvider>
```

### Folder Structure:

* **Pages/**: Home, About, Posts, PostForm, PostView, Bookmarks, Login, NotFound
* **Components/**: Header, ScrollToTop, PostListItem, BackToTopButton, Tabs
* **Contexts/**: Auth, Posts, Bookmarks, SearchText
* **Layout/**: HomeLayout with `<Header />` + `<Outlet />`

---

## 📂 Data Management

### User Schema

```ts
type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  bookmarksPostsIds: string[];
};
```

### Post Schema

```ts
type TPostListItem = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  lastUpdatedDate: string;
  tags: string[];
  image: string;
  content: string;
};
```

### Storage Strategy

* All data is stored in **localStorage**
* Posts auto-generate on first visit
* Each user has their own bookmarks
* Context providers sync everything

---

## 🎯 Usage Guide

### Getting Started

* Sign up or log in
* Explore pre-loaded blog posts
* Use the search and filter features

### Authentication

* Signup/Login with basic credentials
* Protected routes for creating/editing posts
* Auto redirect if already logged in

### Managing Posts

* Create: Click "New Post" (auth required)
* Edit: Pencil icon → Edit post
* Delete: Trash icon
* Markdown: Styled live rendering

### Search & Sort

* Live search with URL sync
* Filter by tag using Tabs
* Clear filters with reset button
* Sort by newest or oldest

### Bookmarking

* Click bookmark icon on post cards
* View bookmarks via "My Bookmarks"
* Remove by clicking again
* Saved per user

---

## 🚀 Deployment

```bash
npm run build
```

### Host Options

* Vercel
* Netlify
* GitHub Pages

### Performance Optimizations

* Lazy loading
* Vite optimization
* Minimal re-renders with Context
* No server calls needed (local-only)

---

## 🤝 Contributing

```bash
git checkout -b feature/amazing-feature
git commit -m "Add new feature"
git push origin feature/amazing-feature
```

Open a PR 🎉

---

## 📜 License

MIT License

---

## 🛡️ Security & Data

* No external DBs — client-only
* All data stored locally
* Passwords are not encrypted (demo only)
* Meant for learning/demo use

---

## ⚠️ Known Limitations

* Data doesn’t sync across devices
* All logic is frontend-only
* Image uploads via URL only
* Clearing browser clears all data

---

## 🌟 Future Enhancements

* 🔗 Real backend with JWT/Auth
* ☁️ Cloud DB for sync
* 🖼 Image uploader
* 🌙 Dark mode
* 🗃 Data export/import
* 🧑‍💬 Comments system
* 🔍 Shareable search URLs
* 🌐 i18n support
* 🧪 Full test suite

---

## 📊 Project Stats

* 15+ Components
* 8 Pages
* 4 Context Providers
* 100% TypeScript
* Responsive Design
* Lazy Loading Enabled

---

## 🙌 Acknowledgments

Thanks to open-source tools and the community that powers modern frontend development.

> ✍️ Built with passion by [Krifa Med Aziz](https://github.com/krifa-med-aziz).
