import { PostListItem } from "../components/PostListItem";
import ScrollableTabsButtonForce from "../components/ScrollableTabsButtonForce";
import { useBlogPostsContext } from "../lib/hooks";

export default function Posts() {
  const { filteredBlogPosts } = useBlogPostsContext();
  return (
    <div className="min-h-screen py-8 max-w-4xl mx-auto flex flex-col items-center">
      <section className="w-full px-8">
        <div className="relative w-full m-auto max-w-md mb-5 ">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition"
          />
          <svg
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 14.5z"
            />
          </svg>
        </div>
        <ScrollableTabsButtonForce />
      </section>
      <section className="[&>*:last-child_article]:border-b-0">
        {filteredBlogPosts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}
