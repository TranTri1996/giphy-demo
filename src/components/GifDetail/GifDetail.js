import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchGifDetail } from "../../api";

import "./GifDetail.scss";

const cls = "gift-detail";

export const GifDetail = () => {
  const { gifId } = useParams();
  const [gifData, setGifData] = useState();

  useEffect(() => {
    const fetchGifData = async () => {
      if (gifId) {
        const gif = await fetchGifDetail(gifId);
        setGifData(gif);
      }
    };

    fetchGifData();
  }, [gifId]);

  return (
    <div className={cls}>
      <p>{`This is GIF id: ${gifId}`}</p>
      <p>{JSON.stringify(gifData)}</p>
    </div>
  );
};
