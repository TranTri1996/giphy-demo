import axios from "axios";

export const fetchTrendingGifs = async ({
  searchText = "",
  limit = 2,
  offset = 0,
}) => {
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
