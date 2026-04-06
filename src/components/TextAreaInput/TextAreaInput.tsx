import { Box, TextField, Typography } from "@mui/material";

type TTextAreaInputProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  variant?: "outlined" | "filled" | "standard";
  required?: boolean;
  width?: number | string;
  height?: number | string;
  isError?: boolean;
  fullWidth?: boolean;
  maxCharacters?: number;
};

export const TextAreaInput = ({
  value,
  onChange,
  label,
  placeholder,
  variant = "outlined",
  required,
  width = "100%",
  height = 100,
  isError = false,
  fullWidth = false,
  maxCharacters,
}: TTextAreaInputProps) => {
  const characterCount = value.length;

  const onChangeTextarea = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (maxCharacters && newValue.length > maxCharacters) return;
    else onChange(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        width: fullWidth ? "100%" : width,
      }}
    >
      {maxCharacters && (
        <Typography
          variant="caption"
          sx={{
            alignSelf: "flex-end",
            color:
              characterCount >= maxCharacters ? "error.main" : "text.secondary",
          }}
        >
          {characterCount}/{maxCharacters}
        </Typography>
      )}
      <TextField
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={onChangeTextarea}
        required={required}
        variant={variant}
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            height,
            alignItems: "flex-start",
          },
          "& .MuiFormLabel-asterisk": {
            fontSize: "1.25em",
            color: "error.main",
          },
        }}
        error={isError}
        fullWidth={fullWidth}
        multiline
      />
    </Box>
  );
};
