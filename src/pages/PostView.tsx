import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import {
  ArrowLeft,
  Bookmark,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import { getAuthorInitials } from "../utils/getAuthorInitials ";
import { useBlogPostsContext, useBookmarksContext } from "../lib/hooks";

export default function PostView() {
  const { blogPosts } = useBlogPostsContext();
  const { handleTogglebookmark, bookmarksPostsIds } = useBookmarksContext();
  const { id } = useParams();

  const post = blogPosts.find((p) => p.id === id);

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to=".."
          relative="path"
          className="flex gap-1 mb-8 cursor-pointer"
        >
          <ArrowLeft />
          Back
        </Link>
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <p
                key={tag}
                className="text-xs font-semibold bg-gray-100 rounded-2xl px-3 py-1"
              >
                {tag}
              </p>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <p className="border border-gray-300 rounded-3xl px-2 py-1">
                {getAuthorInitials(post.author)}
              </p>
              <div>
                <p className="font-semibold text-slate-900">{post.author}</p>
                <div className="flex items-center text-slate-500 text-sm space-x-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <p>last updated :</p>
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

        <div className="prose prose-lg prose-slate max-w-none">
          {post.content.split("\n").map((paragraph, index) => {
            if (paragraph.startsWith("# ")) {
              return (
                <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                  {paragraph.slice(2)}
                </h1>
              );
            }
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                  {paragraph.slice(3)}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={index} className="text-xl font-bold mt-4 mb-2">
                  {paragraph.slice(4)}
                </h3>
              );
            }
            if (paragraph.startsWith("- ")) {
              return (
                <li key={index} className="ml-4">
                  {paragraph.slice(2)}
                </li>
              );
            }
            if (paragraph.startsWith("```")) {
              return (
                <pre
                  key={index}
                  className="bg-slate-100 p-4 rounded-lg overflow-x-auto my-4"
                >
                  <code>{paragraph}</code>
                </pre>
              );
            }
            if (paragraph.trim() === "") {
              return <br key={index} />;
            }
            return (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
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
