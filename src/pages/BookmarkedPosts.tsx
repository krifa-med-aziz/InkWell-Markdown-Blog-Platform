import { Link, useNavigate } from "react-router-dom";
import { useBookmarksContext, useUserContext } from "../lib/hooks";
import { PostListItem } from "../components/PostListItem";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

export default function BookmarkedPosts() {
  const { bookmakredPosts } = useBookmarksContext();
  const { LoggedIn } = useUserContext();
  const hasShownWarning = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!LoggedIn && !hasShownWarning.current) {
      hasShownWarning.current = true;
      toast.warn("You must be logged in to view your bookmarked posts.", {
        autoClose: 2000,
        className:
          "!text-sm !w-[70%] !mt-8 sm:!text-base sm:!w-[400px] sm:!mt-4",
      });
      navigate("/login", { replace: true });
    }
  }, [LoggedIn, navigate]);

  if (!LoggedIn) {
    return null;
  }
  return (
    <>
      <section className="bg-gradient-to-br from-slate-100 to-slate-200 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Bookmarked Posts
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Here you'll find all the blog posts you've bookmarked for later
            reading. Enjoy revisiting your favorite articles and discovering new
            insights!
          </p>
        </div>
      </section>
      {bookmakredPosts.length === 0 ? (
        <section className="max-w-4xl mx-auto my-12 p-8 bg-white rounded-lg  text-center">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            No Bookmarks Yet
          </h2>
          <p className="text-slate-600 mb-6">
            You haven't bookmarked any posts yet. Browse the blog and bookmark
            your favorite articles to see them here!
          </p>
          <Link
            to="/posts"
            className="inline-block px-6 py-3 bg-blue-700 text-white rounded hover:bg-blue-700 transition"
          >
            Explore Posts
          </Link>
        </section>
      ) : (
        <section className="max-w-6xl mx-auto [&>*:last-child_article]:border-b-0">
          {bookmakredPosts.map((post) => {
            if (!post) return null;
            return <PostListItem key={post.id} post={post} />;
          })}
        </section>
      )}
    </>
  );
}
