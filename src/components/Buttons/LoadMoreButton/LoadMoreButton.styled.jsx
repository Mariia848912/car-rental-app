import styled from "styled-components";

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  text-decoration: underline;
  border: none;
  color: var(--primary-bt-bg-color);
  font-size: 14px;
  font-family: "Manrope-SemiBold";
  font-weight: 600;
  line-height: 1.4;
  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`;
export const ButtonThumb = styled.div`
  text-align: center;
`;
