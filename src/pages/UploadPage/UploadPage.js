import { useState } from "react";
import { Button } from "reactstrap";
import classNames from "classnames";
import PropTypes from "prop-types";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { uploadGif } from "../../api";
import "./UploadPage.scss";

const cls = "upload-page";
const titleCls = `${cls}__title`;
const uploadErrorCls = `${cls}__error`;
const loadIconCls = `${cls}__spinner`;

const uploadWrapperCls = "upload-wrapper";
const inputCls = `${uploadWrapperCls}__input`;
const uploadBtnCls = `${uploadWrapperCls}__upload-btn`;

export const UploadPage = ({ className }) => {
  const [file, setFile] = useState();
  const [isUploading, setLoading] = useState(false);
  const [uploadErrorMsg, setUploadErrorMsg] = useState();

  const handleSelectFile = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    setLoading(true);
    uploadGif({ file })
      .then((res) => {
        setLoading(false);
        console.log(res);
      })
      .catch((e) => {
        setLoading(false);
        setUploadErrorMsg("Fail when upload GIF!");
      });
  };

  return (
    <div className={classNames(className, cls)}>
      <p className={titleCls}>Upload GIF</p>
      <div className={uploadWrapperCls}>
        <input className={inputCls} type="file" onChange={handleSelectFile} />
        <Button className={uploadBtnCls} onClick={handleUpload}>
          Upload
        </Button>
      </div>
      {isUploading && (
        <FontAwesomeIcon className={loadIconCls} icon={faSpinner} spin />
      )}
      {!isUploading && uploadErrorMsg && (
        <p className={uploadErrorCls}>{uploadErrorMsg}</p>
      )}
    </div>
  );
};

UploadPage.defaultProps = {
  className: "",
};

UploadPage.propTypes = {
  className: PropTypes.string,
};
