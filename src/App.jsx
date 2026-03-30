import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/accueil";
import ContactPages from "./pages/ContactPages";
import Apropos from "./pages/apropos";
import ProjectsPages from "./pages/ProjectsPages";
import ProjetDetail from "./composants/ProjetDetail";
import Layout from "./pages/layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Accueil /> },
        { path: "/contact", element: <ContactPages /> },
        { path: "/apropos", element: <Apropos /> },
        { path: "/projets", element: <ProjectsPages /> },
        { path: "/projet/:id", element: <ProjetDetail /> },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;