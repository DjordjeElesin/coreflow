import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch } from "@/store/store";
import { useNavigate } from "react-router-dom";
import { logout } from "@/store/auth/authReducer";

export const Logout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <Button
      variant="outlined"
      fullWidth
      size="small"
      startIcon={<LogoutIcon />}
      onClick={onLogout}
    >
      Logout
    </Button>
  );
};
