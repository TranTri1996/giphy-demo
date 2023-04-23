const getRandomSearchKey = () => {
  try {
    const trendingKeys = [
      "Cats",
      "Dogs",
      "Funny",
      "Dancing",
      "Love",
      "Happy",
      "Sad",
      "Angry",
      "Excited",
      "Confused",
      "Pizza",
      "Coffee",
      "Party",
      "Birthday",
      "Thank you",
      "High-five",
      "Hug",
      "Kiss",
      "Thumbs up",
      "Thumbs down",
      "Clapping",
      "Crying",
      "Laughing",
      "Running",
      "Swimming",
      "Driving",
      "Walking",
      "Flying",
      "Cooking",
      "Shopping",
      "Working",
      "Studying",
      "Sleeping",
      "Reading",
      "Writing",
      "Singing",
      "Sunset",
      "Rain",
      "Snow",
      "Beach",
      "Forest",
      "Mountains",
      "City",
      "Travel",
      "Nature",
      "Adventure",
      "Sports",
      "Gaming",
      "Animals",
    ];
    return trendingKeys[Math.floor(Math.random() * trendingKeys.length)];
  } catch (err) {
    throw new Error("err when get random search key");
  }
};

export { getRandomSearchKey };
