import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { GifList } from "./GifList";

describe("GifList component", () => {
  it("renders a list of gifs", () => {
    const gifs = [
      {
        id: "1",
        title: "Gif 1",
        images: {
          preview_gif: { url: "https://example.com/gif1.gif" },
        },
      },
      {
        id: "2",
        title: "Gif 2",
        images: {
          preview_gif: { url: "https://example.com/gif2.gif" },
        },
      },
    ];
    const fetchMore = jest.fn();
    const expandGif = jest.fn();
    const hasMore = true;

    render(
      <GifList
        gifs={gifs}
        fetchMore={fetchMore}
        expandGif={expandGif}
        hasMore={hasMore}
      />
    );
  });

  it("displays a message when there are no gifs", () => {
    const fetchMore = jest.fn();
    const expandGif = jest.fn();
    const hasMore = false;

    render(
      <GifList fetchMore={fetchMore} expandGif={expandGif} hasMore={hasMore} />
    );

    const messageElement = screen.getByText("There is no gif to be found");
    expect(messageElement).toBeInTheDocument();
  });
});
