import { createContext, type Dispatch, type SetStateAction } from "react";
import type { TPostListItem } from "../lib/type";

type BlogPostsContextType = {
  blogPosts: TPostListItem[];
  filteredBlogPosts: TPostListItem[];
  setFilterby: Dispatch<SetStateAction<string>>;
};

export const BlogPostsContext = createContext<BlogPostsContextType | null>(
  null
);
