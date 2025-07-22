import type React from "react";
import { BlogPostsContext } from "./BlogPostsContext";
import { useLocalStorage } from "../lib/hooks";
import type { Tsorting, TPostListItem } from "../lib/type";
import { useMemo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function BlogPostsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchParams, setSearchParams] = useSearchParams({});
  const typeFilter = searchParams.get("type");
  const sortBy = searchParams.get("sort");
  const searchText = searchParams.get("text");
  const lowerQuery = searchText?.toLocaleLowerCase() || null;
  const [blogPosts, setBlogPosts] = useLocalStorage<TPostListItem[]>(
    "posts",
    []
  );

  const searchPosts = useMemo(() => {
    if (!lowerQuery) return blogPosts;
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
    } else if (sort === "oldest") {
      return [...posts].sort(
        (a, b) =>
          new Date(a.lastUpdatedDate).getTime() -
          new Date(b.lastUpdatedDate).getTime()
      );
    }
    return posts;
  }

  const handleQueryParamChange = useCallback(
    (key: string, value: string | null) => {
      setSearchParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        if (value === null) newParams.delete(key);
        else newParams.set(key, value);
        return newParams;
      });
    },
    [setSearchParams]
  );

  const filteredBlogPosts = useMemo(() => {
    if (!typeFilter) return blogPosts;
    else {
      return [...blogPosts].filter((p) => p.tags.some((t) => t === typeFilter));
    }
  }, [typeFilter, blogPosts]);

  const deletePost = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmed) {
      toast.info("Post deleted");
      const newBlogPosts = [...blogPosts].filter((p) => p.id !== id);
      setBlogPosts(newBlogPosts);
    }
  };

  return (
    <BlogPostsContext.Provider
      value={{
        blogPosts,
        setBlogPosts,
        filteredBlogPosts,
        sortBy,
        searchPosts,
        getSortedPosts,
        deletePost,
        handleQueryParamChange,
        searchText,
      }}
    >
      {children}
    </BlogPostsContext.Provider>
  );
}
