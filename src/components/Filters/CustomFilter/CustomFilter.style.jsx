import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 50px;
`;


export const InputBox = styled.div`
  display: flex;
  align-items: flex-end;
 
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 136px;
  height: 48px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 12px;
  border: none;
  background-color: var(--primary-bt-bg-color);
  color: var(--primary-bg-color);
  font-size: 14px;
  font-family: "Manrope-SemiBold";
  font-weight: 600;
  line-height: 1.4;
  &:hover,
  &:focus {
    background-color: var(--accent-color);
  }
`;