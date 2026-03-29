import { useGetMeQuery } from "@/api/endpoints/authEndpoints";
import { useRefreshTokenMutation } from "@/api/endpoints/authEndpoints/authEndpoints";
import { logout, setInitialized, setUser } from "@/store/auth/authReducer";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const refreshToken = useAppSelector((state) => state.auth.refreshToken);
  const [refreshTokenQuery] = useRefreshTokenMutation();

  const {
    data: user,
    isSuccess,
    isError,
  } = useGetMeQuery(undefined, {
    skip: !token,
  });

  const runRefreshToken = async () => {
    try {
      await refreshTokenQuery(refreshToken).unwrap();
    } catch {
      dispatch(logout());
      dispatch(setInitialized());
    }
  };

  useEffect(() => {
    if (!token && !refreshToken) {
      dispatch(setInitialized());
      return;
    }
    if (!token && refreshToken) {
      runRefreshToken();
      return;
    }
    if (isSuccess && user) {
      dispatch(setUser(user));
      dispatch(setInitialized());
    }
    if (isError) {
      dispatch(setInitialized());
    }
  }, [isSuccess, isError, user, dispatch, token, refreshToken]);
};
