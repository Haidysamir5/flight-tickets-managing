import { UserType } from "@/helpers/type";

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
