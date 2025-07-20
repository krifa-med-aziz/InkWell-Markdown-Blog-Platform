import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import ScrollToTop from "./ScrollToTop";
import BackToTopButton from "./BackToTopButton";
import PostView from "../pages/PostView";
import Posts from "../pages/Posts";
import Layout from "../layout/Layout";
import BookmarkedPosts from "../pages/BookmarkedPosts";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <BackToTopButton />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<PostView />} />
          <Route path="posts/my-bookmarks" element={<BookmarkedPosts />} />
          <Route path="posts/my-bookmarks/:id" element={<PostView />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
