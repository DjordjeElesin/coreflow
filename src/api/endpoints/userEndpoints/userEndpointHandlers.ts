import {
  logout,
  setFetchingUser,
  setInitialized,
  setToken,
  setUser,
} from "@/store/auth/authReducer";
import { displayToast } from "@/utils/displayToast/displayToast";
import { userApi, type TLoginResponse } from "./userEndpoints";
import type { AppDispatch } from "@/store/store";
import type { TUser } from "@/types/types";
import { handleErrors } from "@/utils/handleErrors";

export const onLoginStarted = async ({
  dispatch,
  queryFulfilled,
}: {
  dispatch: AppDispatch;
  queryFulfilled: Promise<{ data: TLoginResponse }>;
}) => {
  try {
    const { data } = await queryFulfilled;
    dispatch(setToken(data.accessToken));
    dispatch(setFetchingUser(true));
    await dispatch(
      userApi.endpoints.getMe.initiate(undefined, { forceRefetch: true }),
    ).unwrap();
    displayToast("success", `Successfully logged in as ${data.username}!`);
    dispatch(setFetchingUser(false));
  } catch (error) {
    handleErrors(error);
  }
};

export const onGetMeStarted = async ({
  dispatch,
  queryFulfilled,
}: {
  dispatch: AppDispatch;
  queryFulfilled: Promise<{ data: TUser }>;
}) => {
  try {
    const { data } = await queryFulfilled;
    dispatch(setUser(data));
    dispatch(setInitialized());
  } catch (error) {
    console.error("Failed to fetch user data during boot check: ", error);
    dispatch(logout());
    dispatch(setInitialized());
  }
};
