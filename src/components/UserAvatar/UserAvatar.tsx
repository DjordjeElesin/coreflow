import type { TUser } from "@/types/types";
import { getUserFullName } from "@/utils/getUserFullName/getUserFullName";
import { Avatar, Box, Typography, type SxProps } from "@mui/material";

type TAvatarProps = {
  user: TUser;
  size?: number;
  showName?: boolean;
  sx?: SxProps;
};

export const UserAvatar = ({
  user,
  size = 30,
  showName = true,
  sx,
}: TAvatarProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        width: "100%",
        borderRadius: 2,
        padding: 1,
        ...sx,

        // --- Use after profile page is implemented ---
        // ":hover": {
        //   backgroundColor: "action.hover",
        // },
        // cursor: "pointer",
      }}
    >
      <Avatar
        sx={{
          width: size,
          height: size,
          border: "1px solid",
          borderColor: "divider",
        }}
        alt={getUserFullName(user)}
        src={user.image ?? "/broken-image.jpg"}
      />
      {showName && (
        <Typography variant="subtitle1" ml={1}>
          {getUserFullName(user)}
        </Typography>
      )}
    </Box>
  );
};
