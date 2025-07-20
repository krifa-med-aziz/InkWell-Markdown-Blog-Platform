import type React from "react";
import { BlogPostsContext } from "./BlogPostsContext";
import { useLocalStorage } from "../lib/hooks";
import type { TPostListItem } from "../lib/type";
import { useMemo, useState } from "react";

export default function BlogPostsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filterBy, setFilterby] = useState("");

  const [blogPosts, setBlogPosts] = useLocalStorage<TPostListItem[]>(
    "posts",
    []
  );
  const filteredBlogPosts = useMemo(() => {
    if (filterBy === "") return blogPosts;
    else {
      return [...blogPosts].filter((p) => {
        if (p.tags.some((t) => t === filterBy)) return p;
      });
    }
  }, [filterBy, blogPosts]);
  return (
    <BlogPostsContext.Provider
      value={{ blogPosts, filteredBlogPosts, setFilterby }}
    >
      {children}
    </BlogPostsContext.Provider>
  );
}
