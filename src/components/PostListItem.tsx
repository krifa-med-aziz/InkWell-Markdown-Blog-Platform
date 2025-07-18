import { Link } from "react-router-dom";
import type { TPostListItem } from "../lib/type";

type PostListItemProps = {
  post: TPostListItem;
};

export function PostListItem({ post }: PostListItemProps) {
  const getAuthorInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Link to={post.id}>
      <article className="flex flex-col h-full bg-white rounded-xl min-h-[470px] shadow-sm  hover:shadow-md transition-shadow overflow-hidden">
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
        <div className="p-6 flex flex-col ">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <p
                key={tag}
                className="text-xs font-semibold bg-gray-100 rounded-2xl px-3 py-1"
              >
                {tag}
              </p>
            ))}
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-2  ">
            {post.title}
          </h3>

          <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center space-x-3">
              <p className="text-xs">{getAuthorInitials(post.author)}</p>

              <div>
                <p className="text-sm font-medium text-slate-900">
                  {post.author}
                </p>
                <p className="text-xs text-slate-500">{post.date}</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-slate-500 text-sm">
              <small>Last Updated:</small>
              <small>{post.lastUpdatedDate}</small>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
