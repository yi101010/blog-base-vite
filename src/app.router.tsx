import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from "./constants";
import {
  AboutPage,
  ArchivePage,
  ContactPage,
  HomePage,
  NotFoundPage,
  PostPage,
  StatsPage,
  TagPage,
  TagsPage,
} from "./pages";
import { SiteLayout } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SiteLayout />}>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.POST} element={<PostPage />} />
      <Route path={ROUTES.TAG} element={<TagPage />} />
      <Route path={ROUTES.TAGS} element={<TagsPage />} />
      <Route path={ROUTES.ARCHIVE} element={<ArchivePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CONTACT} element={<ContactPage />} />
      <Route path={ROUTES.STATS} element={<StatsPage />} />
      <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
      <Route path="*" element={<Navigate replace to={ROUTES.NOTFOUND} />} />
    </Route>
  )
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
