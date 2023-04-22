import React, { createContext } from "react";

const TrendingGifContext = createContext();

const TrendingGifProvider = ({ children }) => {
  const providedValue = {};

  return (
    <TrendingGifContext.Provider value={providedValue}>
      {children}
    </TrendingGifContext.Provider>
  );
};

export { TrendingGifContext, TrendingGifProvider };
