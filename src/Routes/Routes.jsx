import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import EmploymentLayout from "../Layouts/EmploymentLayout";
import EmploymentHome from "../Pages/EmoploymentPages/EmploymentHome";
import EmploymentAboutus from "../Pages/EmoploymentPages/EmploymentAboutus";
import EmploymentContactUs from "../Pages/EmoploymentPages/EmploymentContactUs";
import EmploymentServices from "../Pages/EmoploymentPages/EmploymentServices";
import EmploymentSuccessStories from "../Pages/EmoploymentPages/EmploymentSuccessStories";
import ErrorElement from "../Components/Error/ErrorElement";
import UnderConstruction from "../Components/Error/UnderConstruction";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorElement />,
  },
  {
    path: "/education",
    element: <UnderConstruction title="Education section is coming soon!" />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/employment",
    element: <EmploymentLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/employment/home",
        element: <EmploymentHome />,
      },
      {
        path: "/employment/about",
        element: <EmploymentAboutus />,
      },
      {
        path: "/employment/contact",
        element: <EmploymentContactUs />,
      },
      {
        path: "/employment/services",
        element: <EmploymentServices />,
      },
      {
        path: "/employment/success",
        element: <EmploymentSuccessStories />,
      },
    ],
  },
]);

export default router;
