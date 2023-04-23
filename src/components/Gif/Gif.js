import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Proptypes from "prop-types";
import classNames from "classnames";

import "./Gif.scss";
import { useState } from "react";

const cls = "gif";
const gifTitleCls = "title";
const loadingSpinnerCls = "load-spinner";
const gifReviewCls = "gif-review";

export const Gif = ({ className, data, onClick }) => {
  const [isLoading, setLoading] = useState(true);
  const {
    preview_gif: { url },
  } = data.images;

  return (
    <div className={classNames(className, cls)}>
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
          height="256px"
          width="256px"
          src={url}
          alt="GIF preview"
          onClick={() => onClick(data)}
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
};

Gif.defaultProps = {
  className: "",
};

Gif.propTypes = {
  className: Proptypes.string,
  data: Proptypes.object,
  onClick: Proptypes.func,
};
