import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { UploadPage } from "./UploadPage";
import { uploadGif } from "../../api";

jest.mock("../../api", () => ({
  uploadGif: jest.fn(),
}));

describe("UploadPage", () => {
  it("should render component", () => {
    render(<UploadPage />);
    const title = screen.getByText("Upload GIF");
    expect(title).toBeInTheDocument();
  });
});
