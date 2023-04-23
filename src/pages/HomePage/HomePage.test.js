import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "./HomePage";
import { fetchNewGifs } from "../../api";
import { getRandomSearchKey } from "../../utils";

jest.mock("../../api");
jest.mock("../../utils");

describe("HomePage", () => {
  const mockGifs = [
    { id: "gif1", title: "Gif 1", url: "http://example.com/gif1.gif" },
    { id: "gif2", title: "Gif 2", url: "http://example.com/gif2.gif" },
  ];

  beforeEach(() => {
    fetchNewGifs.mockImplementation(() => Promise.resolve(mockGifs));
    getRandomSearchKey.mockReturnValue("random");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the search bar and upload button", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "UPLOAD" })).toBeInTheDocument();
  });
});
