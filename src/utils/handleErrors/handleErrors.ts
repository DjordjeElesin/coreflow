import { displayToast } from "../displayToast/displayToast";
import has from "lodash/has";

type TApiError = {
  error: {
    status: number;
    data: {
      message: string;
    };
  };
};

export const handleErrors = (error: unknown) => {
  if (typeof error === "object" && error !== null && has(error, "error.data"))
    displayToast("error", (error as unknown as TApiError).error.data.message);
  else if (error instanceof Error) displayToast("error", error.message);
  else displayToast("error", "An unknown error occurred.");
};
