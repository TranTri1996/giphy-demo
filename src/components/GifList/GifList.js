import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

import { Gif } from "../Gif";
import "./GifList.scss";

const cls = "gifs";

export const GifList = ({ gifs = [], fetchMore, hasMore = true }) => {
  return (
    <div className={cls}>
      <p>{`we got ${gifs.length} gifs here`}</p>
      <InfiniteScroll
        dataLength={gifs.length}
        next={fetchMore}
        hasMore={hasMore}
      >
        {gifs.map((item) => (
          <Gif key={item.id} data={item} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

GifList.propTypes = {
  gifs: PropTypes.arrayOf(PropTypes.object),
  hasMore: PropTypes.bool,
  fetchMore: PropTypes.func,
};
