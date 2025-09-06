import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import EmploymentLayout from "../Layouts/EmploymentLayout";
import EmploymentHome from "../Pages/EmoploymentPages/EmploymentHome";
import EmploymentAboutus from "../Pages/EmoploymentPages/EmploymentAboutus";
import EmploymentContactUs from "../Pages/EmoploymentPages/EmploymentContactUs";
import EmploymentServices from "../Pages/EmoploymentPages/EmploymentServices";
import EmploymentSuccessStories from "../Pages/EmoploymentPages/EmploymentSuccessStories";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/education",
    element: <EmploymentLayout />,
  },
  {
    path: "/employment",
    element: <EmploymentLayout />,
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
