import React, { useMemo } from "react";
import { BookmarksContext } from "./BookmarksContext";
import { useBlogPostsContext, useLocalStorage } from "../lib/hooks";
import { toast } from "react-toastify";

export default function BookmarksContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bookmarksPostsIds, setBookmarksPostsIds] = useLocalStorage<string[]>(
    "bookmarksPostsIds",
    []
  );

  const handleTogglebookmark = (id: string) => {
    if (bookmarksPostsIds.includes(id)) {
      toast.info("Bookmark removed", {
        autoClose: 1000,
      });
      setBookmarksPostsIds((prev) => prev.filter((postId) => postId !== id));
    } else {
      setBookmarksPostsIds((prev) => [...prev, id]);
      toast.success("Post bookmarked!", {
        autoClose: 1000,
      });
    }
  };

  const { blogPosts } = useBlogPostsContext();

  const bookmakredPosts = useMemo(() => {
    return [...bookmarksPostsIds].map((id) => {
      return [...blogPosts].find((post) => post.id === id);
    });
  }, [blogPosts, bookmarksPostsIds]);

  return (
    <BookmarksContext.Provider
      value={{ handleTogglebookmark, bookmarksPostsIds, bookmakredPosts }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}
