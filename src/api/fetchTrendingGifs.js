import axios from "axios";

export const fetchTrendingGifs = async ({
  searchText = "",
  limit = 10,
  offset = 0,
}) => {
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

const formatGifData = (gif) => {
  return {
    id: gif.id,
    url: gif.url,
    username: gif.username,
    source: gif.source,
    title: gif.title,
    rating: gif.rating,
    content_url: gif.content_url,
    images: gif.images,
    analytics: gif.analytics,
  };
};
