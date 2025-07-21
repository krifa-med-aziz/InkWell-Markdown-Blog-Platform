import type React from "react";
import { BlogPostsContext } from "./BlogPostsContext";
import { useLocalStorage, useSearchTextContext } from "../lib/hooks";
import type { Tsorting, TPostListItem } from "../lib/type";
import { useMemo, useState } from "react";

export default function BlogPostsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filterBy, setFilterby] = useState("");
  const [sortBy, setSortBy] = useState<Tsorting>("default");

  const [blogPosts] = useLocalStorage<TPostListItem[]>("posts", []);

  const { searchText } = useSearchTextContext();
  const lowerQuery = searchText.toLocaleLowerCase();
  const searchPosts = useMemo(() => {
    return [...blogPosts].filter(
      (post) =>
        post.author.toLocaleLowerCase().includes(lowerQuery) ||
        post.title.toLocaleLowerCase().includes(lowerQuery) ||
        post.tags.some((tag) => tag.toLocaleLowerCase().includes(lowerQuery))
    );
  }, [lowerQuery, blogPosts]);

  function getSortedPosts(posts: TPostListItem[], sort: Tsorting) {
    if (sort === "recent") {
      return [...posts].sort(
        (a, b) =>
          new Date(b.lastUpdatedDate).getTime() -
          new Date(a.lastUpdatedDate).getTime()
      );
    }
    return posts;
  }

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
      value={{
        blogPosts,
        filteredBlogPosts,
        setFilterby,
        searchPosts,
        getSortedPosts,
        setSortBy,
        sortBy,
      }}
    >
      {children}
    </BlogPostsContext.Provider>
  );
}
