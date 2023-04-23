import axios from "axios";
import { fetchNewGifs } from "./fetchNewGifs";

jest.mock("axios");

describe("fetchNewGifs", () => {
  it("fetches new gifs successfully", async () => {
    const mockResponse = { data: { data: [{ id: 1, title: "gif1" }] } };
    axios.get.mockResolvedValue(mockResponse);

    const result = await fetchNewGifs({
      searchText: "cats",
      limit: 10,
      offset: 0,
    });

    expect(result).toEqual(mockResponse.data.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      process.env.REACT_APP_GIPHY_TRENDING_ENDPOINT,
      {
        params: {
          api_key: process.env.REACT_APP_GIPHY_API_KEY,
          limit: 10,
          offset: 0,
          q: "cats",
          rating: "g",
          lang: "en",
        },
      }
    );
  });

  it("handles errors when fetching new gifs", async () => {
    const mockError = new Error("Network Error");
    axios.get.mockRejectedValue(mockError);

    const spy = jest.spyOn(console, "error").mockImplementation(() => {});

    await fetchNewGifs({ searchText: "cats", limit: 10, offset: 0 });

    expect(spy).toHaveBeenCalledWith("error when fetch gif trending gif!!");
    expect(axios.get).toHaveBeenCalledTimes(1);

    spy.mockRestore();
  });
});
