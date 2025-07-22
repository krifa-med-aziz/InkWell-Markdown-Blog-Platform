import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import BlogPostsContextProvider from "./contexts/BlogPostsContextProvider.tsx";
import BookmarksContextProvider from "./contexts/BookmarksContextProvider.tsx";
import SearchTextContextProvider from "./contexts/SearchTextContextProvider.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <BlogPostsContextProvider>
        <SearchTextContextProvider>
          <BookmarksContextProvider>
            <App />
          </BookmarksContextProvider>
        </SearchTextContextProvider>
      </BlogPostsContextProvider>
    </BrowserRouter>
  </StrictMode>
);
