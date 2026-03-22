import type { TUser } from "@/types/types";
import { startCase } from "lodash";

export const getUserFullName = (user: TUser) => {
  return `${startCase(user.firstName)} ${startCase(user.lastName)}`;
};
