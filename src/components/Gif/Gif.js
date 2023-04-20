import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Proptypes from "prop-types";

import "./Gif.scss";
import { useState } from "react";

const cls = "gif";
const gifTitleCls = "title";
const loadingSpinnerCls = "load-spinner";
const gifReviewCls = "gif-review";

export const Gif = ({ data, onClick }) => {
  const [isLoading, setLoading] = useState(true);
  let navigate = useNavigate();
  const handleClickOnGif = () => {
    navigate(`/gif-detail/${data.id}`);
  };

  const handleOnLoadGif = () => {
    setLoading(false);
  };

  const {
    fixed_height: { height },
    fixed_width: { width },
  } = data.images;

  return (
    <div className={cls}>
      <p className={gifTitleCls}>{data.title}</p>
      <div className={gifReviewCls}>
        {isLoading && (
          <FontAwesomeIcon
            className={loadingSpinnerCls}
            icon={faSpinner}
            spin
          />
        )}
        <img
          height="250px"
          width="250px"
          src={data.images.fixed_width.url}
          alt="GIF preview"
          onClick={handleClickOnGif}
          onLoad={handleOnLoadGif}
        />
      </div>
    </div>
  );
};

Gif.propTypes = {
  data: Proptypes.object,
};
