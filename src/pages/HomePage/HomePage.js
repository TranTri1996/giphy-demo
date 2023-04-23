import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import classNames from "classnames";

import { fetchNewGifs } from "../../api";
import { getRandomSearchKey } from "../../utils";
import { SearchBar, GifList, ExpandGifModal } from "../../components";

import "./HomePage.scss";

const DEFAULT_LIMIT = 25;
const DEFAULT_OFFSET = 0;

const cls = "home-page";
const tooBarCls = "toolbar";
const uploadBtnCls = "upload-btn";

export const HomePage = ({ className }) => {
  const navigate = useNavigate();

  const [gifs, setGifs] = useState([]);
  const [inputText, setInputText] = useState("");
  const [expandedGif, setExpandedGif] = useState();
  const [hasMoreGif, setHasMoreGif] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [offset, setOffset] = useState(DEFAULT_OFFSET);

  useEffect(() => {
    const fetchDefaultGifs = async () => {
      const gifs = await fetchNewGifs({
        offset: DEFAULT_OFFSET,
        limit: DEFAULT_LIMIT,
        searchText: getRandomSearchKey(),
      });
      setGifs(gifs);
    };
    fetchDefaultGifs();
  }, []);

  useEffect(() => {
    const typingTimeout = setTimeout(async () => {
      if (inputText && inputText.length > 0) {
        const newGifs = await fetchNewGifs({
          searchText: inputText,
          offset: DEFAULT_OFFSET,
          limit: DEFAULT_LIMIT,
        });
        setGifs(newGifs);
        setOffset(DEFAULT_OFFSET);
      }
    }, 800);
    return () => clearTimeout(typingTimeout);
  }, [inputText]);

  useEffect(() => {
    setHasMoreGif(gifs.length > 0);
  }, [gifs]);

  const handleClickSearch = async () => {
    setOffset(DEFAULT_OFFSET);

    const newGifs = await fetchNewGifs({
      searchText: inputText,
      offset: DEFAULT_OFFSET,
      limit: DEFAULT_LIMIT,
    });
    setGifs(newGifs);
  };

  const fetchMoreGifs = () => {
    setTimeout(async () => {
      const newGifs = await fetchNewGifs({
        offset: offset + DEFAULT_LIMIT,
        limit: DEFAULT_LIMIT,
        searchText: inputText ? inputText : getRandomSearchKey(),
      });
      setGifs((currGifs) => [...currGifs, ...newGifs]);
      setOffset(offset + DEFAULT_LIMIT);
    }, 1500);
  };

  const handleChangeInput = (e) => {
    setInputText(e.target.value);
  };

  const handleExpandGif = (gif) => {
    setOpenModal(true);
    setExpandedGif(gif);
  };

  const navigateToUploadPage = () => {
    navigate("/upload");
  };

  return (
    <div className={classNames(className, cls)}>
      <div className={tooBarCls}>
        <SearchBar
          value={inputText}
          onChange={handleChangeInput}
          onSearch={handleClickSearch}
        />
        <Button className={uploadBtnCls} onClick={navigateToUploadPage}>
          UPLOAD
        </Button>
      </div>
      <ExpandGifModal
        isOpen={openModal}
        gif={expandedGif}
        toggleModal={() => setOpenModal(!openModal)}
      />
      <GifList
        gifs={gifs}
        hasMore={hasMoreGif}
        fetchMore={fetchMoreGifs}
        expandGif={handleExpandGif}
      />
    </div>
  );
};

HomePage.defaultProps = {
  className: "",
};

HomePage.propTypes = {
  className: PropTypes.string,
};
