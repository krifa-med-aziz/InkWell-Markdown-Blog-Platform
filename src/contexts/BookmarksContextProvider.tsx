import React, { useMemo } from "react";
import { BookmarksContext } from "./BookmarksContext";
import { useBlogPostsContext, useUserContext } from "../lib/hooks";
import { toast } from "react-toastify";

export default function BookmarksContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentUser, setCurrentUser, users, setUsers, LoggedIn } =
    useUserContext();

  const handleTogglebookmark = (id: string) => {
    if (!currentUser) return;
    if (!LoggedIn) {
      toast.warn("Please log in to bookmark posts.", { autoClose: 1000 });
      return;
    }
    const currentBookmarks = currentUser.bookmarksPostsIds || [];
    if (currentBookmarks.includes(id)) {
      const updatedBookmarks = currentBookmarks.filter(
        (postId) => postId !== id
      );
      const updatedUser = {
        ...currentUser,
        bookmarksPostsIds: updatedBookmarks,
      };
      setCurrentUser(updatedUser);
      const updatedUsers = users.map((user) => {
        if (user.id === currentUser.id) return updatedUser;
        else return user;
      });
      setUsers(updatedUsers);
      toast.info("Bookmark removed", {
        autoClose: 1000,
      });
    } else {
      const updatedBookmarks = [...currentBookmarks, id];
      const updatedUser = {
        ...currentUser,
        bookmarksPostsIds: updatedBookmarks,
      };
      setCurrentUser(updatedUser);
      const updatedUsers = users.map((user) => {
        if (user.id === currentUser.id) return updatedUser;
        else return user;
      });
      setUsers(updatedUsers);
      toast.success("Post bookmarked!", {
        autoClose: 1000,
      });
    }
  };

  const { blogPosts } = useBlogPostsContext();
  const bookmarksPostsIds = currentUser?.bookmarksPostsIds || [];

  const bookmakredPosts = useMemo(() => {
    if (currentUser && currentUser.bookmarksPostsIds) {
      return currentUser.bookmarksPostsIds.map((id) => {
        return blogPosts.find((post) => post.id === id);
      });
    }
    return [];
  }, [blogPosts, currentUser]);

  return (
    <BookmarksContext.Provider
      value={{ handleTogglebookmark, bookmarksPostsIds, bookmakredPosts }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}
