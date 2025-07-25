import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import ScrollToTop from "./ScrollToTop";
import BackToTopButton from "./BackToTopButton";
import PostView from "../pages/PostView";
import Posts from "../pages/Posts";
import HomeLayout from "../layout/HomeLayout";
import BookmarkedPosts from "../pages/BookmarkedPosts";
import { ToastContainer } from "react-toastify";
import PostForm from "../pages/PostForm";
import Login from "../pages/Login";

function App() {
  return (
    <>
      <ScrollToTop />
      <BackToTopButton />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="login" element={<Login />} />
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="new-post" element={<PostForm />} />
          <Route path="edit-post/:id" element={<PostForm />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<PostView />} />
          <Route path="posts/my-bookmarks" element={<BookmarkedPosts />} />
          <Route path="posts/my-bookmarks/:id" element={<PostView />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
