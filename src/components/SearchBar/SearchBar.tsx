import { useRef, useState } from "react";
import debounce from "lodash/debounce";
import { Search } from "@mui/icons-material";
import { TextInput } from "../TextInput";

type TSearchBarProp = {
  defaultQuery: string;
  onSearch: (value: string) => void;
  placeholder?: string;
  width?: string;
};

export const SearchBar = ({
  defaultQuery,
  onSearch,
  placeholder = "Search...",
  width = "100%",
}: TSearchBarProp) => {
  const [query, setQuery] = useState(defaultQuery);

  const debouncedSearch = useRef(
    debounce((value: string) => onSearch(value), 300),
  ).current;

  const onChange = (value: string) => {
    setQuery(value);
    if (!value.trim()) {
      debouncedSearch.cancel();
      onSearch("");
    } else debouncedSearch(value);
  };

  return (
    <TextInput
      data-testid="search-bar"
      label="Search"
      variant="outlined"
      placeholder={placeholder}
      value={query}
      onChange={onChange}
      startIcon={<Search />}
      width={width}
    />
  );
};
