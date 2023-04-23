import { useRouteError, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./ErrorPage.scss";

const cls = "error-page";
const wrapperErrCls = "error-wrapper";
const backBtnCls = `${wrapperErrCls}__back-btn`;

export const ErrorPage = ({ className }) => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error(error);

  const backToHomePage = () => {
    navigate("/");
  };

  return (
    <div className={classNames(className, cls)}>
      <div className={wrapperErrCls}>
        <h1>404 PAGE NOT FOUND!</h1>
        <Button className={backBtnCls} onClick={backToHomePage}>
          Back to Home
        </Button>
      </div>
    </div>
  );
};

ErrorPage.defaultProps = {
  className: "",
};

ErrorPage.propTypes = {
  className: PropTypes.string,
};
