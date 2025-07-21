import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from "./constants";
import { AboutPage, ContactPage, HomePage, NotFoundPage, PostPage } from "./pages";
import { SiteLayout } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SiteLayout />}>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.POST} element={<PostPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CONTACT} element={<ContactPage />} />
      <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
      <Route path="*" element={<Navigate replace to={ROUTES.NOTFOUND} />} />
    </Route>
  )
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
