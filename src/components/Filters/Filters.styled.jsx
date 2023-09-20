import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  gap: 18px;
justify-content: center;
  align-items: flex-end;
  margin-bottom: 50px;
`;

export const Title = styled.p`
  color: var(--title-secondary-color);
  font-family: "Manrope-Medium";
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 8px;
`;

export const InputBox = styled.div`
  display: flex;
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
