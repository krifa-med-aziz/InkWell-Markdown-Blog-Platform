import { Link } from "react-router-dom";
import type { TPostListItem } from "../lib/type";
import { getAuthorInitials } from "../utils/getAuthorInitials ";
import { Bookmark, Pencil, X } from "lucide-react";
import {
  useBlogPostsContext,
  useBookmarksContext,
  useUserContext,
} from "../lib/hooks";

type PostListItemProps = {
  post: TPostListItem;
  featured?: boolean;
};

export function PostListItem({ post, featured = false }: PostListItemProps) {
  const { handleTogglebookmark, bookmarksPostsIds } = useBookmarksContext();
  const { deletePost, editPost } = useBlogPostsContext();
  const { currentUser } = useUserContext();

  const getLinkPath = () => {
    if (
      location.pathname.includes("/posts/my-bookmarks") ||
      location.pathname.includes("/posts")
    ) {
      return `${post.id}`;
    }
    return `posts/${post.id}`;
  };

  if (featured) {
    return (
      <Link to={getLinkPath()}>
        <article className="flex flex-col  bg-white rounded-xl min-h-[470px] shadow-sm  hover:shadow-md transition-shadow overflow-hidden">
          {post.image && (
            <div className="aspect-video overflow-hidden ">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-6 flex flex-col min-h-[300px] ">
            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <p
                  key={tag}
                  className="text-xs font-semibold bg-gray-100 rounded-2xl px-3 py-1"
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </p>
              ))}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {post.title}
            </h3>

            <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
            <div className="flex flex-col sm:flex-row  md:gap-4 gap-2 sm:gap-0 items-center justify-between mt-auto">
              <div className="flex items-center space-x-3">
                <p className="text-sm border border-gray-300 rounded-3xl px-2 py-1">
                  {getAuthorInitials(post.author)}
                </p>

                <div>
                  <p>{post.author}</p>
                  <p className="text-xs text-slate-500">{post.date}</p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:flex-row  gap-1 items-center text-slate-500 text-sm">
                <Bookmark
                  className={`h-4 w-4 cursor-pointer ${
                    bookmarksPostsIds.includes(post.id) ? "fill-gray-500" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleTogglebookmark(post.id);
                  }}
                />

                <div className="flex items-center md:flex-col ">
                  <small> Last updated :</small>
                  <small> {post.lastUpdatedDate}</small>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }
  return (
    <Link to={getLinkPath()}>
      <article className="border-b border-slate-200 py-8 px-8">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex gap-2">
            {post.tags
              .filter((post) => post !== "")
              .map((tag) => (
                <p
                  key={tag}
                  className="text-xs font-semibold bg-gray-100 rounded-2xl px-3 py-1"
                >
                  {tag}
                </p>
              ))}
          </div>
          <div className="flex ml-auto gap-2">
            {post.createdBy === currentUser?.name &&
              post.canDeleted &&
              !location.pathname.includes("/my-bookmarks") && (
                <button
                  className="cursor-pointer flex items-center gap-1 border border-gray-300 p-1 rounded-sm hover:bg-gray-200"
                  onClick={(e) => editPost(e, post.id)}
                >
                  <Pencil className="h-4 w-4" />
                  <p className="hidden sm:block">Edit Post</p>
                </button>
              )}
            {post.createdBy === currentUser?.name &&
              post.canDeleted &&
              !location.pathname.includes("/my-bookmarks") && (
                <button
                  className="cursor-pointer flex items-center gap-1 border p-1 rounded-sm text-white bg-red-600 hover:bg-red-700"
                  onClick={(e) => deletePost(e, post.id)}
                >
                  <X className="h-5 w-5 text-white hover:text-white" />
                  <p className="hidden sm:block">Delete</p>
                </button>
              )}
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-slate-600 mb-4 text-lg leading-relaxed">
              {post.excerpt}
            </p>
          </div>
          {post.image && (
            <div className="rounded-xl overflow-hidden my-4 max-w-[450px]">
              <img
                className="aspect-3/2 w-[450px] "
                src={post.image}
                alt={post.title}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-0 items-center justify-between">
          <div className="flex flex-col sm:flex-row  items-center space-x-3">
            <div className="flex items-center justify-center gap-2">
              <p className="text-lg border border-gray-300 rounded-3xl px-2 py-1">
                {getAuthorInitials(post.author)}
              </p>
              <p className="font-medium text-slate-900">{post.author}</p>
            </div>
            <p className="text-center sm:text-left text-sm text-slate-500">
              • {post.date}
            </p>
          </div>
          <div className="flex flex-col-reverse sm:flex-row gap-1 items-center text-slate-500">
            <Bookmark
              className={`h-5 w-4 cursor-pointer ${
                bookmarksPostsIds.includes(post.id) ? "fill-gray-500" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleTogglebookmark(post.id);
              }}
            />
            <div className="flex items-center">
              <small> Last updated :</small>
              <small> {post.lastUpdatedDate}</small>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
