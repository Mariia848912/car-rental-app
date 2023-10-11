import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 274px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 28px;

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
