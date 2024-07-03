import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "./App.css";

import theme from "./theme";
import Routes from "./routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

queryClient.setQueryData(["accessToken"], () =>
  localStorage.getItem("accessToken")
);
queryClient.setQueryData(["user"], () =>
  JSON.parse(localStorage.getItem("user") ?? "")
);

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <React.Suspense>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </React.Suspense>
    </QueryClientProvider>
  );
}

export default App;
