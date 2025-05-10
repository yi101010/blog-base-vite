import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from "./constants";
import { HomePage, NotFoundPage } from "./pages";
import { SiteLayout } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SiteLayout />}>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
      <Route path="*" element={<Navigate replace to={ROUTES.NOTFOUND} />} />
    </Route>
  )
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
