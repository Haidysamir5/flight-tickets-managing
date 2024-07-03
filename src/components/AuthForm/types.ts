import { UserType } from "@/helpers/types";

export type AuthResponseType =
  | {
      accessToken: string;
      user: UserType;
    }
  | string;

export type FormDataType = {
  email: string;
  password: string;
  fullName?: string;
};
