import { PostListItem } from "../components/PostListItem";
import ScrollableTabsButtonForce from "../components/ScrollableTabsButtonForce";
import { useBlogPostsContext, useSearchTextContext } from "../lib/hooks";
import { ArrowDownNarrowWide, X } from "lucide-react";

export default function Posts() {
  const {
    filteredBlogPosts,
    searchPosts,
    getSortedPosts,
    handleQueryParamChange,
    sortBy,
    searchText,
  } = useBlogPostsContext();
  const { searchText: inputSearchText, OnChangeSearchText } =
    useSearchTextContext();

  // Show search results only when there's a search in the URL (after submission)
  const showSearchPosts = !!searchText;
  const searchQuery = searchText || "";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputSearchText?.trim()) {
      handleQueryParamChange("text", inputSearchText);
    }
  };

  const handleSearchChange = (value: string) => {
    OnChangeSearchText(value);
    if (value.trim() === "") {
      handleQueryParamChange("text", null);
    }
  };

  const handleClearSearch = () => {
    OnChangeSearchText("");
    handleQueryParamChange("text", null);
  };

  const clearSorting = () => {
    handleQueryParamChange("sort", null);
  };

  let posts = !showSearchPosts ? filteredBlogPosts : searchPosts;
  if (sortBy === "recent" || sortBy === "oldest")
    posts = getSortedPosts(posts, sortBy);

  return (
    <div className="min-h-screen py-8 max-w-4xl mx-auto flex flex-col items-center">
      <section className="w-full px-8  ">
        <div className="flex flex-col gap-4 sm:flex-row items-center justify-between mb-5">
          <form onSubmit={handleSubmit} className="relative w-full max-w-md">
            <input
              type="text"
              value={inputSearchText || ""}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search..."
              className="w-full pl-10 pr-10  py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition"
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
            {(inputSearchText || searchText) && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </form>
          <div className="flex items-center gap-3">
            <ArrowDownNarrowWide className="w-4 h-4" />
            <button
              onClick={() => handleQueryParamChange("sort", "oldest")}
              className={`cursor-pointer border rounded-[5px] px-2 py-1 ${
                sortBy === "oldest" ? "bg-blue-600 border-none text-white" : ""
              }`}
            >
              Oldest
            </button>
            <button
              onClick={() => handleQueryParamChange("sort", "recent")}
              className={`cursor-pointer border rounded-[5px] px-2 py-1 ${
                sortBy === "recent" ? "bg-blue-600 border-none text-white" : ""
              }`}
            >
              Recent
            </button>
            {sortBy && <X className="cursor-pointer" onClick={clearSorting} />}
          </div>
        </div>
        {!showSearchPosts ? (
          <ScrollableTabsButtonForce />
        ) : (
          <p className="text-3xl font-bold">
            <span className="opacity-50">Results for </span>
            <span className="text-black">"{searchQuery}"</span>
          </p>
        )}
      </section>

      {posts.length === 0 ? (
        <section className="min-h-screen py-8 max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-xl text-gray-500 mt-10">
            No results found. Try a different search or check back later.
          </p>
        </section>
      ) : (
        <section className="[&>*:last-child_article]:border-b-0">
          {posts.map((post) => (
            <PostListItem key={post.id} post={post} />
          ))}
        </section>
      )}
    </div>
  );
}
