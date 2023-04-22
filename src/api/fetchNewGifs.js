import axios from "axios";

export const fetchNewGifs = async ({ searchText, limit, offset }) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_GIPHY_TRENDING_ENDPOINT,
      {
        params: {
          api_key: process.env.REACT_APP_GIPHY_API_KEY,
          limit,
          offset,
          q: searchText,
          rating: "g",
          lang: "en",
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("error when fetch gif trending gif!!");
  }
};
