import { createBrowserRouter } from "react-router-dom";

import { HomePage, UploadPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "upload/",
    element: <UploadPage />,
  },
]);
