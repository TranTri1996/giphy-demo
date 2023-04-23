import React, { createContext } from "react";
import PropTypes from "prop-types";
const TrendingGifContext = createContext();

const TrendingGifProvider = ({ children }) => {
  const providedValue = {};

  return (
    <TrendingGifContext.Provider value={providedValue}>
      {children}
    </TrendingGifContext.Provider>
  );
};

TrendingGifProvider.propTypes = {
  children: PropTypes.node,
};

export { TrendingGifContext, TrendingGifProvider };
