import axios from "axios";

export const fetchGifDetail = async (gifId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_GIPHY_GIF_DETAIL_ENDPOINT}/${gifId}`,
      {
        params: {
          api_key: process.env.REACT_APP_GIPHY_API_KEY,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    console.error("error when fetch gif detail");
  }
};
