import { Input, Button } from "reactstrap";
import PropTypes from "prop-types";

import "./SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

const cls = "search-bar";
const searchInputCls = `${cls}__input`;
const searchBtnCls = `${cls}__button`;

export const SearchBar = ({ className, value, onChange, onSearch }) => {
  return (
    <div className={classNames(className, cls)}>
      <Input
        className={searchInputCls}
        placeholder="Search GIFs"
        value={value}
        onChange={onChange}
      />
      <Button className={searchBtnCls} onClick={onSearch}>
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
      </Button>
    </div>
  );
};

SearchBar.defaultProps = {
  value: "",
  className: "",
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};
