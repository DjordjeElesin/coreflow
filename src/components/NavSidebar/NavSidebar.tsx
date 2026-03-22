import { Box } from "@mui/material";
import { NavItem } from "./NavItem";
import { CoreflowLogo } from "../CoreflowLogo";
import { UserAvatar } from "../UserAvatar";
import { useAppSelector } from "@/store/store";
import { Logout } from "./Logout";
import { links } from "./navLinks";

export const NavSidebar = () => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) return null;

  return (
    <Box
      sx={{
        backgroundColor: "background.sidebar",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        width: "200px",
        borderRight: "1px solid",
        borderColor: "divider",
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        p: 2,
      }}
    >
      <CoreflowLogo size={30} showTitle titlePosition="right" justify="start" />
      <Box
        mt={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          width: "100%",
        }}
      >
        {links.map((item) => (
          <NavItem key={item.path} item={item} />
        ))}
      </Box>
      <Box
        mt="auto"
        mb={2}
        sx={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          gap: 2,
          width: "100%",
        }}
      >
        <UserAvatar user={user} />
        <Logout />
      </Box>
    </Box>
  );
};
