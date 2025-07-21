import { useState } from "react";
import { SearchTextContext } from "./SearchTextContext";

export default function SearchTextContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchText, setSearchText] = useState("");
  const OnChangeSearchText = (newSearchText: string) => {
    setSearchText(newSearchText);
  };
  return (
    <SearchTextContext.Provider value={{ searchText, OnChangeSearchText }}>
      {children}
    </SearchTextContext.Provider>
  );
}
