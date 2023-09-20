import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 400;
  overflow-y: scroll;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(97, 97, 97, 0.2);
  backdrop-filter: blur(1.2px);
  
`;

export const Content = styled.div`
 position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 280px;
  width: 100%;
  padding: 12px;
  border-radius: 20px;
  background-color: #ffffff;
  overflow: scroll;
  @media screen and (min-width: 768px) {
    max-width: 681px;
    padding: 32px;
    padding-bottom: 24px;
    overflow: hidden;
  }
  
`;

export const CloseBtn  = styled.button`
 position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background-color: inherit;
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
  
`;