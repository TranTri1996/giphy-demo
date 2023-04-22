import classNames from "classnames";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "./ExpandGifModal.scss";

const cls = "expand-gif-modal";
const modalWrapperCls = "modal-wrapper";

export const ExpandGifModal = ({
  className,
  isOpen,
  toggleModal,
  gif,
  height,
  width,
}) => {
  return (
    <div className={classNames(className, cls)}>
      <Modal
        backdrop
        isOpen={isOpen}
        toggle={toggleModal}
        className={modalWrapperCls}
      >
        <ModalHeader>{gif?.title}</ModalHeader>
        <ModalBody>
          {gif?.images && (
            <img
              height={height}
              width={width}
              src={gif.images.fixed_width.url}
              alt={gif?.title ?? "GIF detail"}
            />
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ExpandGifModal.defaultProps = {
  className: "",
  isOpen: false,
  height: "400px",
  width: "560px",
};

ExpandGifModal.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  gif: PropTypes.object,
  toggleModal: PropTypes.func.isRequired,
};
