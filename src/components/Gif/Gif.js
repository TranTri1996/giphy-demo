import { useNavigate } from "react-router-dom";
import Proptypes from "prop-types";

import "./Gif.scss";

const cls = "gif";
const gifTitleCls = `${cls}__title`;

export const Gif = ({ data, onClick }) => {
  let navigate = useNavigate();
  const handleClickOnGif = () => {
    navigate(`/gif-detail/${data.id}`);
  };

  return (
    <div className={cls}>
      <p className={gifTitleCls}>{data.title}</p>
      <img
        src={data.images.fixed_width.url}
        alt="GIF preview"
        onClick={handleClickOnGif}
      />
    </div>
  );
};

Gif.propTypes = {
  data: Proptypes.object,
};
