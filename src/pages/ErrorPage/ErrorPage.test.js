import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { ErrorPage } from "./ErrorPage";

test("Component ErrorPage should content error message", () => {
  render(
    <MemoryRouter>
      <ErrorPage />
    </MemoryRouter>
  );
  const errorMessage = screen.getByText("404 PAGE NOT FOUND!");
  expect(errorMessage).toBeInTheDocument();
});
