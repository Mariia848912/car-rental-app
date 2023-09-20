import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "../../utils/icons";
import { Backdrop, CloseBtn, Content } from "./ModalContainer.styled";

const modalContainer = document.getElementById("modal-root");

export const ModalContainer = ({ toggle, children }) => {
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    }
  }, [toggle]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        toggle();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  const onBackdroplOpen = (event) => {
    if (event.target === event.currentTarget) {
      toggle();
    }
  };
  return createPortal(
    <>
      <Backdrop onClick={onBackdroplOpen}>
        <Content>
          <CloseBtn type="button" onClick={toggle}>
            <CloseIcon />
          </CloseBtn>
          {children}
        </Content>
      </Backdrop>
    </>,
    modalContainer
  );
};

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
  toggle: PropTypes.func.isRequired,
};
