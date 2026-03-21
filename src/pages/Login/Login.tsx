import { CoreflowLogo } from "@/components/CoreflowLogo";
import { Footer } from "@/components/Footer";
import { useLogin } from "@/components/Loading/useLogin";
import { TextInput } from "@/components/TextInput";
import { Box, Button, CircularProgress, Paper } from "@mui/material";

export const Login = () => {
  const { credentials, onCredentialsChange, onLogin, isLoading, isDisabled } =
    useLogin();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: 3,
          p: 4,
          borderRadius: 2,
          width: 450,
        }}
        onSubmit={onLogin}
      >
        <Box m="auto">
          <CoreflowLogo showTitle showSubTitle />
        </Box>
        <TextInput
          label="Username"
          value={credentials.username}
          onChange={(value) => onCredentialsChange("username", value)}
          required
        />
        <TextInput
          label="Password"
          value={credentials.password}
          onChange={(value) => onCredentialsChange("password", value)}
          required
          type="password"
        />
        <Button
          variant="contained"
          fullWidth
          type="submit"
          disabled={isDisabled}
        >
          {isLoading ? <CircularProgress size={24} /> : "Sign In"}
        </Button>
      </Paper>
      <Footer />
    </Box>
  );
};
