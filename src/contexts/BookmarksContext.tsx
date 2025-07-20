import { createContext } from "react";
import type { TPostListItem } from "../lib/type";

type BookmarksContexttype = {
  handleTogglebookmark: (id: string) => void;
  bookmarksPostsIds: string[];
  bookmakredPosts: (TPostListItem | undefined)[];
};

export const BookmarksContext = createContext<BookmarksContexttype | null>(
  null
);
