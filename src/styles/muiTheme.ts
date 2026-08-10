import { alpha, createTheme } from "@mui/material/styles";
import { WARNING, SUCCESS, INDIGO, ERROR, SLATE, VIOLET } from "./colors";

declare module "@mui/material/styles" {
  interface TypeBackground {
    sidebar: string;
    content: string;
    card: string;
    elevated: string;
  }
}

const BORDER = SLATE[700];
const RADIUS = 4;
const HOVER = alpha("#ffffff", 0.04);
const SELECTED = alpha(INDIGO[500], 0.14);

export const theme = createTheme({
  shape: {
    borderRadius: RADIUS,
  },

  palette: {
    mode: "dark",

    primary: {
      main: INDIGO[500],
      light: INDIGO[400],
      dark: INDIGO[600],
      contrastText: "#ffffff",
    },

    secondary: {
      main: VIOLET[500],
      light: VIOLET[400],
      dark: VIOLET[600],
      contrastText: "#ffffff",
    },

    background: {
      default: SLATE[900],
      paper: SLATE[800],
      sidebar: SLATE[950],
      content: SLATE[900],
      card: SLATE[800],
      elevated: SLATE[850],
    },

    text: {
      primary: SLATE[200],
      secondary: SLATE[400],
      disabled: SLATE[600],
    },

    divider: BORDER,

    action: {
      hover: HOVER,
      selected: SELECTED,
      active: SLATE[400],
      disabled: SLATE[600],
      disabledBackground: alpha(SLATE[600], 0.3),
    },

    error: {
      main: ERROR[400],
      light: ERROR[300],
      dark: ERROR[500],
      contrastText: "#ffffff",
    },

    warning: {
      main: WARNING[400],
      light: WARNING[300],
      dark: WARNING[500],
      contrastText: "#1a1205",
    },

    success: {
      main: SUCCESS[400],
      light: SUCCESS[300],
      dark: SUCCESS[500],
      contrastText: "#04160f",
    },

    info: {
      main: INDIGO[400],
      light: INDIGO[300],
      dark: INDIGO[500],
      contrastText: "#ffffff",
    },
  },

  // --- Typography ---
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "sans-serif",
    ].join(","),

    h1: {
      fontSize: "2.125rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "#ffffff",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "#ffffff",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 700,
      letterSpacing: "-0.01em",
      color: "#ffffff",
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "#ffffff",
    },
    h5: { fontSize: "1.125rem", fontWeight: 600, color: "#ffffff" },
    h6: { fontSize: "1rem", fontWeight: 600, color: "#ffffff" },

    subtitle1: { fontSize: "0.9375rem", fontWeight: 600 },
    subtitle2: { fontSize: "0.8125rem", fontWeight: 600, color: SLATE[400] },

    body1: { fontSize: "0.875rem", color: SLATE[300] },
    body2: { fontSize: "0.8125rem", color: SLATE[400] },

    caption: { fontSize: "0.75rem", color: SLATE[500] },

    button: {
      textTransform: "none", // Disable CAPS on buttons globally
      fontWeight: 600,
    },
  },

  components: {
    // --- Baseline + scrollbar ---
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: SLATE[900],
        },
        "*": {
          scrollbarWidth: "thin",
          scrollbarColor: `${SLATE[600]} transparent`,
        },
        "*::-webkit-scrollbar": {
          width: "6px",
          height: "6px",
        },
        "*::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: SLATE[600],
          borderRadius: "999px",
          "&:hover": {
            backgroundColor: SLATE[500],
          },
        },
      },
    },

    // --- Surfaces ---
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: SLATE[800],
          border: `1px solid ${BORDER}`,
          borderRadius: 10,
        },
        outlined: {
          borderColor: BORDER,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: SLATE[800],
          border: `1px solid ${BORDER}`,
          borderRadius: 10,
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: BORDER,
        },
      },
    },

    // --- Tables ---
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${BORDER}`,
          fontSize: "0.875rem",
          padding: "14px 16px",
        },
        head: {
          color: SLATE[400],
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          backgroundColor: "transparent",
          borderBottom: `1px solid ${BORDER}`,
        },
        body: {
          color: SLATE[200],
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          transition: "background-color 0.15s ease",
          "&:last-of-type td": {
            borderBottom: "none",
          },
          "&.MuiTableRow-hover:hover": {
            backgroundColor: HOVER,
          },
        },
      },
    },

    MuiTablePagination: {
      styleOverrides: {
        root: {
          color: SLATE[400],
          borderTop: `1px solid ${BORDER}`,
          overflow: "hidden",
        },
        selectIcon: {
          color: SLATE[400],
        },
        actions: {
          "& .MuiIconButton-root.Mui-disabled": {
            color: SLATE[600],
          },
        },
      },
    },

    // --- Chips / status pills ---
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          height: 26,
          fontSize: "0.75rem",
          fontWeight: 600,
        },
        filled: {
          backgroundColor: alpha(SLATE[600], 0.35),
          color: SLATE[300],
          border: `1px solid ${BORDER}`,
        },
        clickable: {
          "&:hover": {
            backgroundColor: alpha(SLATE[600], 0.55),
          },
        },
      },
      variants: [
        {
          props: { variant: "filled", color: "primary" },
          style: {
            backgroundColor: alpha(INDIGO[500], 0.16),
            color: INDIGO[300],
            border: `1px solid ${alpha(INDIGO[500], 0.35)}`,
          },
        },
        {
          props: { variant: "filled", color: "secondary" },
          style: {
            backgroundColor: alpha(VIOLET[500], 0.16),
            color: VIOLET[400],
            border: `1px solid ${alpha(VIOLET[500], 0.35)}`,
          },
        },
        {
          props: { variant: "filled", color: "success" },
          style: {
            backgroundColor: alpha(SUCCESS[500], 0.16),
            color: SUCCESS[300],
            border: `1px solid ${alpha(SUCCESS[500], 0.35)}`,
          },
        },
        {
          props: { variant: "filled", color: "warning" },
          style: {
            backgroundColor: alpha(WARNING[500], 0.16),
            color: WARNING[300],
            border: `1px solid ${alpha(WARNING[500], 0.35)}`,
          },
        },
        {
          props: { variant: "filled", color: "error" },
          style: {
            backgroundColor: alpha(ERROR[500], 0.16),
            color: ERROR[300],
            border: `1px solid ${alpha(ERROR[500], 0.35)}`,
          },
        },
        {
          props: { variant: "filled", color: "info" },
          style: {
            backgroundColor: alpha(INDIGO[500], 0.16),
            color: INDIGO[300],
            border: `1px solid ${alpha(INDIGO[500], 0.35)}`,
          },
        },
      ],
    },

    // --- Inputs (TextField / Select share OutlinedInput) ---
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: alpha(SLATE[850], 0.6),
          transition: "border-color 0.15s ease, background-color 0.15s ease",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: BORDER,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: SLATE[600],
          },
          "&.Mui-focused": {
            backgroundColor: alpha(SLATE[850], 0.9),
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: INDIGO[500],
            borderWidth: 1,
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: ERROR[400],
          },
        },
        input: {
          fontSize: "0.875rem",
          color: SLATE[200],
          "&::placeholder": {
            color: SLATE[500],
            opacity: 1,
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          color: SLATE[400],
          "&.Mui-focused": {
            color: INDIGO[400],
          },
        },
      },
    },

    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: SLATE[500],
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        icon: {
          color: SLATE[400],
        },
      },
    },

    // --- Menus / dropdown popovers ---
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: SLATE[800],
          border: `1px solid ${BORDER}`,
          borderRadius: 10,
          marginTop: 4,
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          borderRadius: 8,
          margin: "2px 6px",
          "&:hover": {
            backgroundColor: HOVER,
          },
          "&.Mui-selected": {
            backgroundColor: SELECTED,
            "&:hover": {
              backgroundColor: alpha(INDIGO[500], 0.2),
            },
          },
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: SLATE[400],
          minWidth: 36,
        },
      },
    },

    // --- Tooltip ---
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: SLATE[700],
          color: SLATE[200],
          fontSize: "0.75rem",
          border: `1px solid ${SLATE[600]}`,
          borderRadius: 8,
          padding: "6px 10px",
        },
        arrow: {
          color: SLATE[700],
        },
      },
    },

    // --- Buttons ---
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "9px 18px",
          fontWeight: 600,
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
        },

        containedPrimary: {
          backgroundColor: INDIGO[500],
          color: "#ffffff",
          "&:hover": {
            backgroundColor: INDIGO[600],
          },
          "&:disabled": {
            opacity: 0.5,
            backgroundColor: INDIGO[500],
            color: "#ffffff",
          },
        },

        outlined: {
          backgroundColor: alpha(SLATE[700], 0.4),
          borderColor: BORDER,
          color: SLATE[200],
          "&:hover": {
            backgroundColor: alpha(SLATE[600], 0.4),
            borderColor: SLATE[600],
          },
        },

        text: {
          color: SLATE[300],
          "&:hover": {
            backgroundColor: HOVER,
            color: SLATE[200],
          },
        },

        textPrimary: {
          color: INDIGO[400],
          "&:hover": {
            backgroundColor: alpha(INDIGO[500], 0.12),
            color: INDIGO[300],
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          color: SLATE[400],
          borderRadius: 8,
          "&:hover": {
            backgroundColor: HOVER,
            color: SLATE[200],
          },
        },
      },
    },

    // --- Tabs ---
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: INDIGO[500],
          height: 2,
          borderRadius: 2,
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.875rem",
          color: SLATE[400],
          "&.Mui-selected": {
            color: INDIGO[400],
          },
        },
      },
    },

    // --- Misc ---
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontWeight: 600,
          fontSize: "0.68rem",
        },
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: "0.8125rem",
          fontWeight: 600,
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: INDIGO[400],
          textDecorationColor: alpha(INDIGO[400], 0.4),
          "&:hover": {
            color: INDIGO[300],
          },
        },
      },
    },

    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: {
          color: INDIGO[400],
        },
      },
    },
  },
});
