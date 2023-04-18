import { Input, Button } from "reactstrap";
import PropTypes from "prop-types";

import "./SearchGif.scss";

const cls = "search-gif";
const searchInput = `${cls}__input`;

export const SearchGif = ({ value = "", onChange, onSearch }) => {
  return (
    <div className={cls}>
      <Input className={searchInput} value={value} onChange={onChange} />
      <Button onClick={onSearch}>Search</Button>
    </div>
  );
};

SearchGif.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
};
