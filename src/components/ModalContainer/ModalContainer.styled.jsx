import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 400;
  overflow-y: scroll;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--secondary-text-color);
  backdrop-filter: blur(1.2px);
`;

export const Content = styled.div`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  max-width: 541px;
  transform: translate(-50%, -50%);

  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 36px;
  padding-right: 36px;
  border-radius: 20px;
  background-color: #ffffff;
  overflow: hidden;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background-color: transparent;
  width: 24px;
  height: 24px;
`;
