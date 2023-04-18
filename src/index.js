import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes";
import { TrendingGifProvider } from "./store";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TrendingGifProvider>
    <RouterProvider router={router}></RouterProvider>
  </TrendingGifProvider>
);
