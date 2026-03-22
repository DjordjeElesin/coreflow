import type { TRole } from "@/types/types";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";

export type TNavItem = {
  name: string;
  path: string;
  roles: TRole[] | null;
  icon?: React.ReactNode;
};

export const links: TNavItem[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    roles: null,
    icon: <DashboardOutlinedIcon />,
  },
  {
    name: "Employees",
    path: "/employees",
    roles: ["admin"],
    icon: <GroupOutlinedIcon />,
  },
  {
    name: "Inventory",
    path: "/inventory",
    roles: ["admin", "moderator"],
    icon: <Inventory2OutlinedIcon />,
  },
  {
    name: "Procurement",
    path: "/procurement",
    roles: ["admin", "moderator"],
    icon: <ShoppingCartOutlinedIcon />,
  },
  {
    name: "Customers",
    path: "/customers",
    roles: ["admin", "moderator", "user"],
    icon: <ContactMailOutlinedIcon />,
  },
];
