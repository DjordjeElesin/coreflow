import { InputAdornment, TextField } from "@mui/material";

type TextInputProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  type?: string;
  placeholder?: string;
  variant?: "outlined" | "filled" | "standard";
  required?: boolean;
  width?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export const TextInput = ({
  label,
  value,
  placeholder,
  type = "text",
  onChange,
  required,
  width = "100%",
  variant = "outlined",
  startIcon,
  endIcon,
}: TextInputProps) => {
  const renderStartIcon = () => (
    <InputAdornment position="start">{startIcon}</InputAdornment>
  );
  const renderEndIcon = () => (
    <InputAdornment position="end">{endIcon}</InputAdornment>
  );

  return (
    <TextField
      label={label}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      variant={variant}
      sx={{ width }}
      slotProps={{
        input: {
          ...(startIcon && { startAdornment: renderStartIcon() }),
          ...(endIcon && { endAdornment: renderEndIcon() }),
        },
      }}
    />
  );
};
