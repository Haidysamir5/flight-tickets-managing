import { urls } from "@/helpers";
import { useQueryClient } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

export default function Guard({ children }) {
  const queryClient = useQueryClient();
  const accessToken = queryClient.getQueryData(["accessToken"]);

  if (!accessToken) return <Navigate to={urls.login} replace />;

  return children;
}
