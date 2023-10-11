import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;

  border-bottom: 1px solid #ececec;
  background-color: var(--primary-bg-color);
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const IconThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  
  background-color: #f5f4fa;
  border-radius: 50%;
`;
