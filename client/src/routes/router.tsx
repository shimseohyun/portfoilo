import { createBrowserRouter } from "react-router-dom";

// layouts
import DefaultLayout from "@layouts/DefaultLayout";

// pages
import MainPage from "@pages/main/MainPage";
import AdminPage from "@pages/admin/AdminPage";
import ExperiencesPage from "@pages/experiences/ExperiencesPage";
import ProjectsPage from "@pages/projects/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "/admin", element: <AdminPage /> },
      { path: "/experiences", element: <ExperiencesPage /> },
      { path: "/projects", element: <ProjectsPage /> },
    ],
  },
]);

export default router;
