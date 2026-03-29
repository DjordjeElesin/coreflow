import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import { ErrorBoundary } from "@/pages/ErrorBoundary";
import { Dashboard } from "@/pages/Dashboard";
import { Login } from "@/pages/Login";
import { ProtectedRoute } from "@/router/ProtectedRoute";
import { PublicRoute } from "./PublicRoute";
import { MainLayout } from "@/layouts/MainLayout";
import { Employees } from "@/pages/Employees";
import { EmployeeDetails } from "@/pages/EmployeeDetails";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      { index: true, element: <Navigate to="/dashboard" replace /> },
      {
        element: (
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "employees",
            element: (
              <ProtectedRoute roles={["admin"]}>
                <Employees />
              </ProtectedRoute>
            ),
          },
          {
            path: "employees/:id",
            element: (
              <ProtectedRoute roles={["admin"]}>
                <EmployeeDetails />
              </ProtectedRoute>
            ),
          },
          {
            path: "inventory",
            element: (
              <ProtectedRoute>
                <div>Inventory</div>
              </ProtectedRoute>
            ),
          },
          {
            path: "procurement",
            element: (
              <ProtectedRoute>
                <div>Procurement</div>
              </ProtectedRoute>
            ),
          },
          {
            path: "customers",
            element: (
              <ProtectedRoute>
                <div>Customers</div>
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
