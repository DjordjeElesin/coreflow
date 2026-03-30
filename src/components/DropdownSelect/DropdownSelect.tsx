import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";

type TDropdownSelectOption = {
  id: string | number;
  value: string;
};

type TDropdownSelectProps = {
  options: TDropdownSelectOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  disabled?: boolean;
  isError?: boolean;
  width?: string;
};

export const DropdownSelect = ({
  options,
  value,
  onChange,
  label,
  placeholder,
  variant = "outlined",
  size = "medium",
  disabled = false,
  isError = false,
  width = "100%",
}: TDropdownSelectProps) => {
  const handleChange = (e: SelectChangeEvent<string>) => {
    onChange(e.target.value);
  };

  return (
    <FormControl
      variant={variant}
      size={size}
      disabled={disabled}
      error={isError}
      sx={{ width, flexShrink: 0 }}
    >
      {label && <InputLabel shrink={!!placeholder || !!value}>{label}</InputLabel>}
      <Select
        value={value}
        onChange={handleChange}
        label={label}
        displayEmpty={!!placeholder}
      >
        {placeholder && (
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id.toString()}>
            {option.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
