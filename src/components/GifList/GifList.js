import classNames from "classnames";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

import { Gif } from "../Gif";
import "./GifList.scss";

const cls = "gifs";

export const GifList = ({ className, gifs, fetchMore, expandGif, hasMore }) => {
  const renderLoadingIcon = () => {
    return <p style={{ color: "white", letterSpacing: "2px" }}>Loading...</p>;
  };

  return (
    <div className={classNames(className, cls)}>
      <InfiniteScroll
        dataLength={gifs.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={renderLoadingIcon()}
      >
        {gifs.map((item, index) => (
          <Gif key={`${item.id}-${index}`} data={item} onClick={expandGif} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

GifList.defaultProps = {
  gifs: [],
  className: "",
  hasMore: true,
};

GifList.propTypes = {
  hasMore: PropTypes.bool,
  fetchMore: PropTypes.func.isRequired,
  expandGif: PropTypes.func.isRequired,
  gifs: PropTypes.arrayOf(PropTypes.object),
};
