import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import {
  Checkbox as MuiCheckbox,
  type CheckboxProps,
} from "@mui/material";
import { EMERALD, SLATE } from "@/styles/colors";

type TCheckboxProps = Omit<CheckboxProps, "icon" | "checkedIcon">;

export const Checkbox = (props: TCheckboxProps) => (
  <MuiCheckbox
    {...props}
    icon={
      <RadioButtonUncheckedIcon sx={{ color: SLATE[600], fontSize: 22 }} />
    }
    checkedIcon={
      <CheckCircleIcon sx={{ color: EMERALD[500], fontSize: 22 }} />
    }
    disableRipple={props.readOnly}
    sx={{
      p: 0,
      cursor: props.readOnly ? "default" : "pointer",
      ...props.sx,
    }}
  />
);
