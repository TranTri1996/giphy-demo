import axios from "axios";

export const uploadGif = async ({ file = "", tags = [] }) => {
  try {
    const formData = new FormData();
    formData.append("api_key", process.env.REACT_APP_GIPHY_API_KEY);
    formData.append("file", file);
    formData.append("tags", tags);

    const response = await axios.post(
      process.env.REACT_APP_GIPHY_UPLOAD_ENDPOINT,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log("error when upload gif ", error);
    throw error;
  }
};
