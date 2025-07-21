import { createContext } from "react";

type SearchTextContextType = {
  searchText: string;
  // deboucedSearchText: string;
  OnChangeSearchText: (newSearchText: string) => void;
};

export const SearchTextContext = createContext<SearchTextContextType | null>(
  null
);
