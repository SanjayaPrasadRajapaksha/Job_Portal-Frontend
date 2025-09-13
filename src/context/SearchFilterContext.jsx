import { createContext, useContext, useState } from "react";

const SearchFilterContext = createContext();

export function SearchFilterProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [checkboxValues, setCheckboxValues] = useState({
    fullTime: false,
    partTime: false,
    fullOrPartTime: false,
  });

  return (
    <SearchFilterContext.Provider value={{ searchQuery, setSearchQuery, checkboxValues, setCheckboxValues }}>
      {children}
    </SearchFilterContext.Provider>
  );
}

export function useSearchFilter() {
  return useContext(SearchFilterContext);
}
