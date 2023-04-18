import PropTypes from "prop-types";

export const GifList = ({ gifs }) => {
  return (
    <div>
      <p>This is Gif List component!!</p>
    </div>
  );
};

GifList.propTypes = {
  gifs: PropTypes.arrayOf(PropTypes.object),
};
