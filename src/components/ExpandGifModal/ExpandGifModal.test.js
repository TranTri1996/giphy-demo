import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { ExpandGifModal } from "./ExpandGifModal";

const mockGif = {
  id: "1",
  title: "Test Gif",
  images: {
    fixed_width: {
      url: "http://test-gif.com",
    },
  },
};

describe("ExpandGifModal", () => {
  it("renders with given gif", () => {
    const mockToggleModal = jest.fn();
    const { getByText, getByAltText } = render(
      <ExpandGifModal isOpen gif={mockGif} toggleModal={mockToggleModal} />
    );
    expect(getByText(mockGif.title)).toBeInTheDocument();
    expect(getByAltText("GIF detail")).toBeInTheDocument();
  });

  it("calls toggleModal function when close button is clicked", () => {
    const mockToggleModal = jest.fn();
    const { getByText } = render(
      <ExpandGifModal isOpen toggleModal={mockToggleModal} />
    );
    fireEvent.click(getByText("Close"));
    expect(mockToggleModal).toHaveBeenCalled();
  });

  it("renders the Details On GIPHY button with the correct url", () => {
    const mockToggleModal = jest.fn();
    render(
      <ExpandGifModal
        isOpen={true}
        gif={mockGif}
        toggleModal={mockToggleModal}
      />
    );

    const detailsButton = screen.getByText("Details On GIPHY");
    expect(detailsButton).toBeInTheDocument();
  });
});
