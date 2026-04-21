import { useEffect, useMemo, useRef, useState } from "react";
import debounce from "lodash/debounce";
import { Search } from "@mui/icons-material";
import { TextInput } from "../TextInput";
import type { SxProps } from "@mui/material";

type TSearchBarProp = {
  defaultQuery?: string;
  value?: string;
  onSearch: (value: string) => void;
  placeholder?: string;
  width?: string;
  sx?: SxProps;
};

export const SearchBar = ({
  defaultQuery = "",
  value,
  onSearch,
  placeholder = "Search...",
  width = "100%",
  sx,
}: TSearchBarProp) => {
  const [query, setQuery] = useState(value ?? defaultQuery);

  const onSearchRef = useRef(onSearch);
  useEffect(() => {
    onSearchRef.current = onSearch;
  }, [onSearch]);

  const debouncedSearch = useMemo(
    // eslint-disable-next-line react-hooks/refs
    () => debounce((value: string) => onSearchRef.current(value), 300),
    [],
  );

  useEffect(() => {
    if (value === "") {
      setQuery("");
      debouncedSearch.cancel();
    }
  }, [value, debouncedSearch]);

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
      sx={sx}
    />
  );
};
