import { useGetMeQuery } from "@/api/endpoints/userEndpoints";
import { setInitialized, setUser } from "@/store/auth/authReducer";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  const {
    data: user,
    isSuccess,
    isError,
  } = useGetMeQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (!token) {
      dispatch(setInitialized());
      return;
    }
    if (isSuccess && user) {
      dispatch(setUser(user));
      dispatch(setInitialized());
    }
    if (isError) {
      dispatch(setInitialized());
    }
  }, [isSuccess, isError, user, dispatch, token]);
};
