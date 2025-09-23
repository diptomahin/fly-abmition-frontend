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
import EducationLayout from "../Layouts/EducationLayout";
import EducationAbout from "../Pages/EducationPages/EducationAbout";
import EducationHome from "../Pages/EducationPages/EducationHome";
import EducationalServices from "../Pages/EducationPages/EducationServices";
import EducationContact from "../Pages/EducationPages/EducationContact";
import ApplyNow from "../Pages/EmoploymentPages/ApplyNow";
import EduApplyNow from "../Pages/EducationPages/EduApplyNow";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
  {
    element: <MainLayout />, // Wrap all routes
    children: [
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/education",
        element: <EducationLayout />,
        errorElement: <ErrorElement />,
        children: [
          { path: "home", element: <EducationHome /> },
          { path: "about", element: <EducationAbout /> },
          { path: "services", element: <EducationalServices /> },
          { path: "contact", element: <EducationContact /> },
          { path: "applynow", element: <EduApplyNow /> },
        ],
      },
      {
        path: "/employment",
        element: <EmploymentLayout />,
        errorElement: <ErrorElement />,
        children: [
          { path: "home", element: <EmploymentHome /> },
          { path: "about", element: <EmploymentAboutus /> },
          { path: "contact", element: <EmploymentContactUs /> },
          { path: "services", element: <EmploymentServices /> },
          { path: "success", element: <EmploymentSuccessStories /> },
          { path: "applynow", element: <ApplyNow /> },
        ],
      },
    ],
  },
]);

export default router;
