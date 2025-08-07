import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import BackToTopButton from "./BackToTopButton";
import HomeLayout from "../layout/HomeLayout";
import { ToastContainer } from "react-toastify";
import { lazy, Suspense } from "react";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import BookmarkedPosts from "../pages/BookmarkedPosts";
import AboutPage from "../pages/About";
import PostForm from "../pages/PostForm";
import Posts from "../pages/Posts";
import PostView from "../pages/PostView";

const HomePage = lazy(() => import("../pages/HomePage"));

function App() {
  return (
    <>
      <ScrollToTop />
      <BackToTopButton />
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="login" element={<Login />} />
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="new-post" element={<PostForm />} />
            <Route path="edit-post/:id" element={<PostForm />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<PostView />} />
            <Route path="posts/my-bookmarks" element={<BookmarkedPosts />} />
            <Route path="posts/my-bookmarks/:id" element={<PostView />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
