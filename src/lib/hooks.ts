import { useContext, useEffect, useState } from "react";
import { BlogPostsContext } from "../contexts/BlogPostsContext";
import { BookmarksContext } from "../contexts/BookmarksContext";
import { SearchTextContext } from "../contexts/SearchTextContext";
import { initializePostsIfEmpty } from "../utils/data";
import { UserContext } from "../contexts/UserContext";
// -----------------------------------------------------
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState(() => {
    if (key === "posts") {
      return initializePostsIfEmpty();
    }
    return JSON.parse(
      localStorage.getItem(key) || JSON.stringify(initialValue)
    );
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue] as const;
}
// -----------------------------------------------------
export function useBlogPostsContext() {
  const context = useContext(BlogPostsContext);
  if (!context)
    throw new Error(
      "useBlogPostsContext must be used within a BlogPostsContextProvider"
    );
  return context;
}
// -----------------------------------------------------
export function useBookmarksContext() {
  const context = useContext(BookmarksContext);
  if (!context)
    throw new Error(
      "useBookmarksContext must be used within a BookmarksContextProvider"
    );
  return context;
}
// -----------------------------------------------------
export function useSearchTextContext() {
  const context = useContext(SearchTextContext);
  if (!context)
    throw new Error(
      "useSearchTextContext must be used within a SearchTextContextProvider"
    );
  return context;
}
// -----------------------------------------------------
export function useUserContext() {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUserContext must be used within a UserContextProvider");
  return context;
}
// -----------------------------------------------------
