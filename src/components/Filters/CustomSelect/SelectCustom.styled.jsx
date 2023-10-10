import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 224px;
`;
export const Select = styled.div`
  display: flex;
  padding: 14px 14px 14px 18px;
  justify-content: center;
  width: 100%;
  align-items: center;
  border-radius: 14px;
  background: var(--secondary-bg-secondary);
  
  font-family: "Manrope-Medium";
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
    cursor: pointer;
`;
export const Label = styled.p`
  margin-bottom: 8px;

  font-family: "Manrope-Medium";
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  color: var(--title-secondary-color);
`;

export const DropDown = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 272px;
  padding: 14px 8px 14px 18px;

  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: var(--primary-bg-color);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  overflow-y: scroll;

  font-family: "Manrope-Medium";
  font-weight: 500;
  color: var(--options-color);

 
`;

export const Item = styled.div`
 
  cursor: pointer;
  &:hover {
    color: var(--primary-text-color);
  }
`;
