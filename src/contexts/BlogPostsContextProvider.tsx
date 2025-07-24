import type React from "react";
import { BlogPostsContext } from "./BlogPostsContext";
import { useLocalStorage } from "../lib/hooks";
import type { Tsorting, TPostListItem } from "../lib/type";
import { useMemo, useCallback, useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
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
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const [fromSearch, setFromSearch] = useState("");

  useEffect(() => {
    // Only update fromSearch when we're on the posts page with search params
    if (pathname === "/posts" && search) {
      setFromSearch(search);
    }
  }, [pathname, search]);

  const searchPosts = useMemo(() => {
    if (!lowerQuery) return blogPosts;
    return [...blogPosts].filter(
      (post) =>
        post.author.toLocaleLowerCase().includes(lowerQuery) ||
        post.title.toLocaleLowerCase().includes(lowerQuery) ||
        post.tags.some((tag) => tag.toLocaleLowerCase().includes(lowerQuery))
    );
  }, [lowerQuery, blogPosts]);

  const getPostById = (id: string | undefined) => {
    if (!id) return;
    const post = [...blogPosts].find((p) => p.id === id);
    return post;
  };

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
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmed) {
      toast.info("Post deleted!", {
        autoClose: 1000,
      });
      const newBlogPosts = [...blogPosts].filter((p) => p.id !== id);
      setBlogPosts(newBlogPosts);
      navigate("/posts");
    }
  };

  const editPost = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`edit-post/${id}`);
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
        editPost,
        getPostById,
        fromSearch,
      }}
    >
      {children}
    </BlogPostsContext.Provider>
  );
}
