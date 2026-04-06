import { useEffect, useMemo, useRef, useState } from "react";
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

  const onSearchRef = useRef(onSearch);
  useEffect(() => {
    onSearchRef.current = onSearch;
  }, [onSearch]);

  const debouncedSearch = useMemo(
    // eslint-disable-next-line react-hooks/refs
    () => debounce((value: string) => onSearchRef.current(value), 300),
    [],
  );

  useEffect(() => () => debouncedSearch.cancel(), [debouncedSearch]);

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
