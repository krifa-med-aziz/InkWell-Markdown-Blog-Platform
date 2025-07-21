import { createContext, type Dispatch, type SetStateAction } from "react";
import type { TPostListItem, Tsorting } from "../lib/type";

type BlogPostsContextType = {
  blogPosts: TPostListItem[];
  filteredBlogPosts: TPostListItem[];
  setFilterby: Dispatch<SetStateAction<string>>;
  searchPosts: TPostListItem[];
  setSortBy: Dispatch<SetStateAction<Tsorting>>;
  sortBy: string;
  getSortedPosts: (posts: TPostListItem[], sort: Tsorting) => TPostListItem[];
};

export const BlogPostsContext = createContext<BlogPostsContextType | null>(
  null
);
