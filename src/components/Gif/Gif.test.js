import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Gif } from "./Gif";

describe("Gif component", () => {
  const data = {
    title: "GIF title",
    images: {
      preview_gif: { url: "https://example.com/image.gif" },
    },
  };
  const onClick = jest.fn();

  it("renders the GIF preview image", () => {
    render(<Gif data={data} onClick={onClick} />);

    const gifImage = screen.getByRole("img");
    expect(gifImage).toHaveAttribute("src", "https://example.com/image.gif");
    expect(gifImage).toHaveAttribute("alt", "GIF preview");
  });

  it("calls onClick handler when image is clicked", () => {
    render(<Gif data={data} onClick={onClick} />);

    const gifImage = screen.getByRole("img");
    userEvent.click(gifImage);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(data);
  });
});
