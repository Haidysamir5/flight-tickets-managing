import { Routes as ReactDomRoutes, Route, Outlet } from "react-router-dom";
import Layout from "@/components/Layout";
import Guard from "@/components/Guard";
import ErrorPage from "@/components/error-page";
import routers from "./routers";
import { urls } from "@/helpers";
import Login from "@/login";
import Registration from "@/registration";

export default function Routes() {
  return (
    <ReactDomRoutes>
      <Route path={urls.login} element={<Login />} />
      <Route path={urls.register} element={<Registration />} />

      {/* <Route path="*" element={<PageNotFound />} /> */}
      <Route
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        {routers.map((router) => (
          <Route
            key={router.path}
            path={router.path}
            element={<Guard>{router.element}</Guard>}
            errorElement={<ErrorPage />}
          />
        ))}
      </Route>
    </ReactDomRoutes>
  );
}
