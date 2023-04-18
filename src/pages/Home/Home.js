import { useContext, useEffect, useState, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { SearchGif } from "../../components";

import { TrendingGifContext } from "../../store";
import { fetchTrendingGifs } from "../../api";

import "./Home.scss";

export const Home = () => {
  const {
    defaultFetchLimit,
    defaultFetchOffset,
    defaultGifSearched,
    trendingGifs: [gifs, setGifs],
  } = useContext(TrendingGifContext);

  const [inputText, setInputText] = useState("");
  const [offset, setOffset] = useState(defaultFetchOffset);

  useEffect(() => {
    const typingTimeout = setTimeout(async () => {
      if (inputText && inputText.length > 0) {
        setOffset(defaultFetchOffset);
        const newGifs = await fetchTrendingGifs({
          searchText: inputText,
          offset: defaultFetchOffset,
          limit: defaultFetchLimit,
        });
        setGifs(newGifs);
      }
    }, 700);
    return () => clearTimeout(typingTimeout);
  }, [inputText, defaultFetchOffset, defaultFetchLimit, setGifs]);

  const handleChangeInput = useCallback((e) => {
    setInputText(e.target.value);
  }, []);

  const handleClickSearch = useCallback(async () => {
    setOffset(defaultFetchOffset);

    const newGifs = await fetchTrendingGifs({
      searchText: inputText,
      offset: defaultFetchOffset,
      limit: defaultFetchLimit,
    });

    setGifs(newGifs);
  }, [defaultFetchOffset, defaultFetchLimit, inputText, setGifs]);

  const fetchMoreTrendingGifs = () =>
    setTimeout(async () => {
      const newGifs = await fetchTrendingGifs({
        offset: offset + defaultFetchLimit,
        limit: defaultFetchLimit,
        searchText: inputText ? inputText : defaultGifSearched,
      });

      setGifs((currGifs) => [...currGifs, ...newGifs]);

      setOffset(offset + defaultFetchLimit);
    }, 1500);

  return (
    <div className="home">
      <SearchGif
        value={inputText}
        onChange={handleChangeInput}
        onSearch={handleClickSearch}
      />
      <p>{`Number of gif: ${gifs.length}`}</p>
      <InfiniteScroll
        dataLength={gifs.length}
        next={fetchMoreTrendingGifs}
        hasMore
        loader={<h4>Loading...</h4>}
      >
        {gifs.map((item) => (
          <div id={item.id}>{JSON.stringify(item)}</div>
        ))}
      </InfiniteScroll>
    </div>
  );
};
