import styled from "styled-components";

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
gap: 8px;

  font-family: "Manrope-Medium";
  font-weight: 500;
  line-height: 1.11;
  font-size: 18px;
`;
export const Title = styled.span`
 color: var(--title-secondary-color);
  font-family: "Manrope-Medium";
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
`;


export const Input = styled.input`
 padding-top: 14px;
 padding-bottom: 14px;
 width: 160px;
height: 48px;
border: none;
background-color: var(--secondary-bg-secondary);
outline: none;


`;

export const Text = styled.span`
  position: absolute;
bottom: 14px;
left: 24px;
`;