import { createBrowserRouter } from "react-router-dom";
import { GifDetail } from "../components";

import { Home } from "../pages";

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
