import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./styles/muiTheme";
import { router } from "./router";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
      <ToastContainer autoClose={5000} pauseOnFocusLoss pauseOnHover />
    </ThemeProvider>
  </Provider>,
);
