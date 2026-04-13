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
import { Inventory } from "@/pages/Inventory";
import { ProductDetails } from "@/pages/ProductDetails";

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
            element: <Inventory />,
          },
          {
            path: "inventory/:id",
            element: <ProductDetails />,
          },
          {
            path: "procurement",
            element: <div>Procurement</div>,
          },
          {
            path: "procurement/:id",
            element: <div>Procurement Details</div>,
          },
          {
            path: "customers",
            element: <div>Customers</div>,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
