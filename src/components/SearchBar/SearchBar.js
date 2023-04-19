import { Input, Button } from "reactstrap";
import PropTypes from "prop-types";

import "./SearchBar.scss";

const cls = "search-bar";
const searchInputCls = `${cls}__input`;
const searchBtnCls = `${cls}__button`;

export const SearchBar = ({ value = "", onChange, onSearch }) => {
  return (
    <div className={cls}>
      <Input
        className={searchInputCls}
        placeholder="Search GIFs"
        value={value}
        onChange={onChange}
      />
      <Button className={searchBtnCls} onClick={onSearch}>
        Search
      </Button>
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
};
