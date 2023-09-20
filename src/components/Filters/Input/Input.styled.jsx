import styled from "styled-components";

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.span`
  color: var(--title-secondary-color);
  font-family: "Manrope-Medium";
  font-weight: 500;
  line-height: 1.3;
`;

export const Text = styled.span`
  position: absolute;
  top: 25%;
  left: 24px;
`;
export const InputField = styled.input`
  padding-left: 64px;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 160px;
  border: none;
  background-color: var(--secondary-bg-secondary);
`;
