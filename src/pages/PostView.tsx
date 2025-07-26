import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import {
  ArrowLeft,
  Bookmark,
  Heart,
  MessageCircle,
  Pencil,
  Share2,
  X,
} from "lucide-react";
import { getAuthorInitials } from "../utils/getAuthorInitials ";
import { useBlogPostsContext, useBookmarksContext } from "../lib/hooks";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

export default function PostView() {
  const { deletePost, editPost, getPostById, fromSearch } =
    useBlogPostsContext();
  const { handleTogglebookmark, bookmarksPostsIds } = useBookmarksContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const post = getPostById(id);

  const handleBackClick = () => {
    const backPath = fromSearch ? `/posts${fromSearch}` : "/posts";
    navigate(backPath);
  };

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto p-8">
        <button
          onClick={handleBackClick}
          className="flex gap-1 mb-8 cursor-pointer hover:text-blue-600 transition-colors"
        >
          <ArrowLeft />
          Back
        </button>
        <header className="mb-8">
          <div className="flex flex-col-reverse items-start justify-between gap-2 mb-4">
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <p
                  key={tag}
                  className="text-xs font-semibold bg-gray-100 rounded-2xl px-3 py-1"
                >
                  {tag}
                </p>
              ))}
            </div>
            <div className="flex ml-auto mb-2 gap-2">
              {post.canEdited && (
                <button
                  className="cursor-pointer flex items-center gap-1 border border-gray-400 p-1 rounded-sm"
                  onClick={(e) => editPost(e, post.id)}
                >
                  <Pencil className="h-4 w-4" />
                  Edit Post
                </button>
              )}
              {post.canDeleted && (
                <button
                  className="cursor-pointer flex items-center gap-1 border p-1 rounded-sm text-white bg-red-600"
                  onClick={(e) => deletePost(e, post.id)}
                >
                  <X className="h-5 w-5 text-white hover:text-white" />
                  Delete
                </button>
              )}
            </div>
          </div>
          <h1 className="sm:text-4xl text-2xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-start sm:items:center space-x-4">
              <p className="border border-gray-300 rounded-3xl px-2 py-1">
                {getAuthorInitials(post.author)}
              </p>
              <div>
                <p className="font-semibold text-slate-900">{post.author}</p>
                <div className="flex flex-col sm:flex-row items-start text-slate-500 text-sm  space-x-4">
                  <span>• {post.date}</span>

                  <div className="flex items-center gap-1">
                    <p>• last updated :</p>
                    {post.lastUpdatedDate}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 cursor-pointer" />
              <MessageCircle className="w-5 h-5 cursor-pointer" />
              <Bookmark
                className={`h-5 w-5 cursor-pointer ${
                  bookmarksPostsIds.includes(post.id) ? "fill-gray-800" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleTogglebookmark(post.id);
                }}
              />
              <Share2 className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </header>

        {post.image && (
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
        )}

        <div className="prose prose-lg prose-slate max-w-none  mb-8 ">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              h1: ({ ...props }) => (
                <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
              ),
              h2: ({ ...props }) => (
                <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />
              ),
              h3: ({ ...props }) => (
                <h3 className="text-xl font-bold mt-4 mb-2" {...props} />
              ),
              li: ({ ...props }) => (
                <li className="ml-4 list-disc" {...props} />
              ),
              pre: ({ ...props }) => (
                <pre
                  className="bg-slate-100 p-4 rounded-lg overflow-x-auto my-4"
                  {...props}
                />
              ),
              code: ({ ...props }) => (
                <code
                  className="bg-gray-100 rounded px-1 py-0.5 text-sm"
                  {...props}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        <div className="bg-slate-100 rounded-xl p-6">
          <div className="flex items-start space-x-4">
            <p className="text-lg border border-gray-300 rounded-3xl px-2 py-1">
              {getAuthorInitials(post.author)}
            </p>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {post.author}
              </h3>
              <p className="text-slate-600 mb-4">
                Passionate developer and writer sharing insights about modern
                web development, React, and building great user experiences.
                Always learning and exploring new technologies.
              </p>
              <button className="bg-white border border-gray-200 rounded-xl px-3 py-2 cursor-pointer hover:bg-gray-200">
                Follow
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
