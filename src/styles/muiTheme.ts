import { createTheme } from "@mui/material/styles";
import { AMBER, CYAN, EMERALD, RED, SLATE } from "./colors";

declare module "@mui/material/styles" {
  interface TypeBackground {
    sidebar: string;
    content: string;
    card: string;
    elevated: string;
  }
}

export const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: EMERALD[500],
      light: EMERALD[400],
      dark: EMERALD[600],
      contrastText: "#ffffff",
    },

    secondary: {
      main: CYAN[500],
      light: CYAN[400],
      dark: CYAN[600],
      contrastText: "#ffffff",
    },

    background: {
      default: SLATE[900],
      paper: SLATE[800],
      sidebar: SLATE[850],
      content: SLATE[900],
      card: SLATE[800],
      elevated: SLATE[700],
    },

    text: {
      primary: "#ffffff",
      secondary: SLATE[400],
      disabled: SLATE[600],
    },

    divider: SLATE[700],

    error: {
      main: RED[400],
      light: RED[300],
      dark: RED[500],
      contrastText: RED[700],
    },

    warning: {
      main: AMBER[400],
      light: AMBER[300],
      dark: AMBER[500],
      contrastText: AMBER[700],
    },

    success: {
      main: EMERALD[500],
      light: EMERALD[400],
      dark: EMERALD[600],
      contrastText: EMERALD[700],
    },

    info: {
      main: CYAN[500],
      light: CYAN[400],
      dark: CYAN[600],
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

    h1: { fontSize: "2.25rem", fontWeight: 700, color: "#ffffff" },
    h2: { fontSize: "1.875rem", fontWeight: 700, color: "#ffffff" },
    h3: { fontSize: "1.5rem", fontWeight: 600, color: "#ffffff" },
    h4: { fontSize: "1.25rem", fontWeight: 600, color: "#ffffff" },
    h5: { fontSize: "1.125rem", fontWeight: 600, color: "#ffffff" },
    h6: { fontSize: "1rem", fontWeight: 600, color: "#ffffff" },

    body1: { fontSize: "0.875rem", color: SLATE[300] },
    body2: { fontSize: "0.8125rem", color: SLATE[400] },

    caption: { fontSize: "0.75rem", color: SLATE[500] },

    button: {
      textTransform: "none", // Disable CAPS on buttons globally
      fontWeight: 600,
    },
  },
  components: {
    // --- Scrollbar ---
    MuiCssBaseline: {
      styleOverrides: {
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
    // --- Buttons ---
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 20px",
          fontWeight: 600,
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
        },

        containedPrimary: {
          background: EMERALD[500],
          color: "#ffffff",
          "&:hover": {
            background: EMERALD[400],
            transition: "all 0.2s ease",
          },
          "&:disabled": {
            opacity: 0.5,
            background: EMERALD[500],
            color: "#ffffff",
          },
        },

        outlined: {
          backgroundColor: `${SLATE[700]}80`, // 50% opacity
          borderColor: SLATE[500],
          color: "#ffffff",
          "&:hover": {
            backgroundColor: `${SLATE[600]}80`,
            borderColor: SLATE[500],
          },
        },

        text: {
          color: EMERALD[400],
          "&:hover": {
            backgroundColor: `${EMERALD[500]}15`,
          },
        },
      },
    },
  },
});
