import { useState } from "react";
import { useLoginMutation } from "@/api/endpoints/userEndpoints/userEndpoints";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const isDisabled =
    !credentials.username || !credentials.password || isLoading;

  const onLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(credentials).unwrap();
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  const onCredentialsChange = (field: string, value: string) => {
    setCredentials((prev) => ({ ...prev, [field]: value }));
  };

  return { onLogin, onCredentialsChange, credentials, isLoading, isDisabled };
};
