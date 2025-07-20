import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import BlogPostsContextProvider from "./contexts/BlogPostsContextProvider.tsx";
import BookmarksContextProvider from "./contexts/BookmarksContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BlogPostsContextProvider>
      <BookmarksContextProvider>
        <App />
      </BookmarksContextProvider>
    </BlogPostsContextProvider>
  </StrictMode>
);
