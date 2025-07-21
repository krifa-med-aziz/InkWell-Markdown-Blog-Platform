import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import BlogPostsContextProvider from "./contexts/BlogPostsContextProvider.tsx";
import BookmarksContextProvider from "./contexts/BookmarksContextProvider.tsx";
import SearchTextContextProvider from "./pages/SearchTextContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchTextContextProvider>
      <BlogPostsContextProvider>
        <BookmarksContextProvider>
          <App />
        </BookmarksContextProvider>
      </BlogPostsContextProvider>
    </SearchTextContextProvider>
  </StrictMode>
);
