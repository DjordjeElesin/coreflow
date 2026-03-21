import { theme } from "@/styles/muiTheme";
import { toast } from "react-toastify";

export const displayToast = (
  type: "info" | "success" | "warning" | "error",
  message: string,
) => {
  toast[type](message, {
    style: {
      background: theme.palette.background.paper,
      color: theme.palette.text.primary,
      border: `2px solid ${theme.palette.divider}`,
    },
  });
};
