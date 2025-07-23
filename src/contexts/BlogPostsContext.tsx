import { createContext } from "react";
import type { TPostListItem, Tsorting } from "../lib/type";

type BlogPostsContextType = {
  blogPosts: TPostListItem[];
  setBlogPosts: React.Dispatch<React.SetStateAction<TPostListItem[]>>;
  filteredBlogPosts: TPostListItem[];
  sortBy: string | null;
  searchText: string | null;
  searchPosts: TPostListItem[];
  fromSearch: string;
  editPost: (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    id: string
  ) => void;
  getSortedPosts: (posts: TPostListItem[], sort: Tsorting) => TPostListItem[];
  deletePost: (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    id: string
  ) => void;
  handleQueryParamChange: (param: string, value: string | null) => void;
  getPostById: (id: string | undefined) => TPostListItem | undefined;
};

export const BlogPostsContext = createContext<BlogPostsContextType | null>(
  null
);
