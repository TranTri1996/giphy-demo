import { useContext, useEffect, useState } from "react";

import { SearchBar, GifList } from "../../components";
import { TrendingGifContext } from "../../store";
import { fetchTrendingGifs } from "../../api";

import "./Home.scss";

const cls = "home";

export const Home = () => {
  const {
    defaultFetchLimit,
    defaultFetchOffset,
    defaultSearchKeyword,
    trendingGifs: [gifs, setGifs],
  } = useContext(TrendingGifContext);

  const [inputText, setInputText] = useState("");
  const [offset, setOffset] = useState(defaultFetchOffset);

  const handleClickSearch = async () => {
    setOffset(defaultFetchOffset);

    const newGifs = await fetchTrendingGifs({
      searchText: inputText,
      offset: defaultFetchOffset,
      limit: defaultFetchLimit,
    });

    setGifs(newGifs);
  };

  useEffect(() => {
    const fetchDefaultTrendingGifs = async () => {
      const gifs = await fetchTrendingGifs({
        offset: defaultFetchOffset,
        limit: defaultFetchLimit,
        searchText: defaultSearchKeyword,
      });
      setGifs(gifs);
    };
    fetchDefaultTrendingGifs();
  }, []);

  const fetchMoreTrendingGifs = () => {
    setTimeout(async () => {
      const newGifs = await fetchTrendingGifs({
        offset: offset + defaultFetchLimit,
        limit: defaultFetchLimit,
        searchText: inputText ? inputText : defaultSearchKeyword,
      });

      setGifs((currGifs) => [...currGifs, ...newGifs]);
      setOffset(offset + defaultFetchLimit);
    }, 1500);
  };

  useEffect(() => {
    const typingTimeout = setTimeout(async () => {
      if (inputText && inputText.length > 0) {
        const newGifs = await fetchTrendingGifs({
          searchText: inputText,
          offset: defaultFetchOffset,
          limit: defaultFetchLimit,
        });

        setGifs(newGifs);
        setOffset(defaultFetchOffset);
      }
    }, 700);
    return () => clearTimeout(typingTimeout);
  }, [inputText, defaultFetchOffset, defaultFetchLimit]);

  const handleChangeInput = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className={cls}>
      <SearchBar
        value={inputText}
        onChange={handleChangeInput}
        onSearch={handleClickSearch}
      />
      <GifList fetchMore={fetchMoreTrendingGifs} gifs={gifs} />
    </div>
  );
};
