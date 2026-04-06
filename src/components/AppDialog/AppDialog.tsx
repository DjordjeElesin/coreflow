import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  type DialogProps,
} from "@mui/material";
import type { TransitionProps } from "@mui/material/transitions";

export type TAppDialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: DialogProps["maxWidth"];
  fullWidth?: boolean;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<
      Record<string, unknown>,
      string | React.JSXElementConstructor<Record<string, unknown>>
    >;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

export const AppDialog = ({
  open,
  onClose,
  title,
  children,
  actions,
  maxWidth = "sm",
  fullWidth = true,
}: TAppDialogProps) => (
  <Dialog
    open={open}
    onClose={onClose}
    onClick={stopPropagation}
    slots={{
      transition: Transition,
    }}
    maxWidth={maxWidth}
    fullWidth={fullWidth}
    sx={{
      "& .MuiDialog-paper": {
        backgroundColor: "background.content",
        borderRadius: 2,
      },
    }}
  >
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>{children}</DialogContent>
    {actions && <DialogActions sx={{ px: "24px", pb: 2 }}>{actions}</DialogActions>}
  </Dialog>
);
