import { createBrowserRouter } from "react-router-dom";

import { HomePage, UploadPage, ErrorPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "upload/",
    element: <UploadPage />,
  },
]);
