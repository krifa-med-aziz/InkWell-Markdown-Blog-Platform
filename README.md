# InkWell - A React-Based Markdown Blog Platform

A modern, responsive blog platform built with React, TypeScript, and Tailwind CSS that supports Markdown content creation and management.

## 🚀 Features

- **Markdown Support**: Write and publish blog posts in Markdown format
- **Search & Filter**: Search posts by title, author, or tags with URL-based search
- **Bookmark System**: Save and manage your favorite posts
- **Responsive Design**: Optimized for desktop and mobile devices
- **Tag-based Filtering**: Filter posts by category tags
- **Sorting Options**: Sort posts by newest or oldest
- **Local Storage Persistence**: All data is stored locally in the browser

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router DOM** - Navigation
- **Lucide React** - Icons
- **Vite** - Build tool

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd InkWell-Markdown-Blog-Platform
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🗄️ Data Management

### Initial Data Population

When users visit the site for the first time, their localStorage will be empty. To provide a better user experience, the application automatically populates the localStorage with sample blog posts on first load.

#### How it works:

1. **Featured Posts**: Sample posts are defined in `src/utils/data.ts`
2. **Auto-initialization**: The `useLocalStorage` hook automatically checks if the "posts" key exists in localStorage
3. **First Load**: If no posts exist, it populates localStorage with the featured posts from `data.ts`
4. **Subsequent Visits**: Uses existing data from localStorage

#### Manual Data Population (Development):

If you need to reset or manually populate the data during development, you can uncomment this line in `src/utils/data.ts`:

```typescript
localStorage.setItem("posts", JSON.stringify(featuredPosts));
```

Run this in the browser console or temporarily uncomment it in the code.

### Data Structure

Each blog post follows this structure:

```typescript
{
  id: string;              // Unique identifier
  title: string;           // Post title
  author: string;          // Author name
  date: string;           // Publication date (YYYY-MM-DD)
  lastUpdatedDate: string; // Last modified date
  tags: string[];         // Category tags
  image: string;          // Cover image URL
  excerpt: string;        // Post summary
  content: string;        // Markdown content
}
```

## 🎯 Usage

### Creating Posts

1. Navigate to "New Post" in the header
2. Fill in the post details (title, author, tags, etc.)
3. Write your content in Markdown format
4. Click "Publish Post" to save

### Searching Posts

1. Use the search bar in the Posts page
2. Type your search term and press Enter
3. Results will be filtered and the URL will update (e.g., `?text=react`)
4. Use the X button to clear search

### Bookmarking

1. Click the bookmark icon on any post
2. Access your bookmarks via "My Bookmarks" in the header
3. Remove bookmarks by clicking the icon again

### Filtering by Tags

1. Use the scrollable tag buttons on the Posts page
2. Click any tag to filter posts by that category
3. The URL will update with the filter parameter

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deployment Notes

- **Static Hosting**: This app can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)
- **Data Persistence**: All data is stored in localStorage, so it's user-specific and persists across sessions
- **No Backend Required**: The app is completely client-side and doesn't require a server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔧 Development Notes

- The app uses React Context for state management
- Search functionality updates URL parameters for shareable links
- All styling is done with Tailwind CSS utility classes
- TypeScript provides type safety throughout the application

## 🐛 Known Issues

- Data is stored locally, so clearing browser data will remove all posts and bookmarks
- No user authentication system (single-user application)
- Image uploads are not supported (uses URLs only)

## 🚀 Future Enhancements

- [ ] User authentication and multi-user support
- [ ] Cloud storage integration
- [ ] Image upload functionality
- [ ] Export/import features
- [ ] Dark mode support
- [ ] Advanced search with filters
- [ ] Post scheduling
- [ ] Comments system
