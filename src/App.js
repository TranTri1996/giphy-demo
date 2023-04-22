import React from "react";
import { RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import { router } from "./routes";
import { TrendingGifProvider } from "./store";

import "./App.scss";

const App = () => {
  return (
    <TrendingGifProvider>
      <RouterProvider router={router}></RouterProvider>
    </TrendingGifProvider>
  );
};

export default App;
