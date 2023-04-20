import { createBrowserRouter } from "react-router-dom";

import { Home, GifDetail } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "gif-detail/:gifId",
    element: <GifDetail />,
  },
]);
