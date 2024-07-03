import { FormDataType } from "@/helpers/types";

const BASE_URL = "http://localhost:3009";
const headers = { "Content-type": "application/json" };

export const loginUser = async (user: FormDataType): Promise<any> => {
  const body = JSON.stringify(user);
  const method = "POST";
  const response = await fetch(`${BASE_URL}/signin`, {
    body,
    method,
    headers,
  });
  return await response.json();
};

// export const getUser
