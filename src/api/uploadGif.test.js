import axios from "axios";
import { uploadGif } from "./uploadGif";

jest.mock("axios");

describe("uploadGif", () => {
  const file = new File(["test"], "test.gif", { type: "image/gif" });
  const tags = ["test", "gif"];

  it("should upload a gif successfully", async () => {
    const mockResponse = {
      data: {
        id: "abc123",
        url: "https://giphy.com/abc123",
      },
    };
    axios.post.mockResolvedValueOnce(mockResponse);

    const result = await uploadGif({ file, tags });

    expect(result).toEqual(mockResponse.data);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      process.env.REACT_APP_GIPHY_UPLOAD_ENDPOINT,
      expect.any(FormData),
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const formData = axios.post.mock.calls[0][1];
    expect(formData.get("api_key")).toBe(process.env.REACT_APP_GIPHY_API_KEY);
    expect(formData.get("file")).toBe(file);
    expect(formData.get("tags")).toBe(tags.join(","));
  });

  it("should throw an error if the upload fails", async () => {
    const mockError = new Error("Upload failed");
    axios.post.mockRejectedValueOnce(mockError);

    await expect(uploadGif({ file, tags })).rejects.toThrow(mockError);
  });
});
