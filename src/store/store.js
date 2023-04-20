import React, { useState, createContext } from "react";

const TrendingGifContext = createContext([]);

const getRandomTrendingKey = () => {
  const trendingKeys = [
    "birthday",
    "dog",
    "cat",
    "girl",
    "boy",
    "happy",
    "sad",
    "smart",
    "smile",
    "good job",
    "yoloo",
    "oh my god",
    "children",
    "baby",
    "superman",
    "superwoman",
  ];
  return trendingKeys[Math.floor(Math.random() * trendingKeys.length)];
};

const TrendingGifProvider = ({ children }) => {
  const contextValue = {
    trendingGifs: useState([]),
    defaultFetchLimit: 50,
    defaultFetchOffset: 0,
    defaultSearchKeyword: getRandomTrendingKey(),
  };

  return (
    <TrendingGifContext.Provider value={contextValue}>
      {children}
    </TrendingGifContext.Provider>
  );
};

export { TrendingGifContext, TrendingGifProvider };
