import styled from "styled-components";

export const Img = styled.img`
  max-height: 240px;
  object-fit: cover;
  border-radius: 12px;
  width: 100%;
`;
export const ImgThumb = styled.div`
  height: 240px;
  margin-bottom: 12px;
`;
export const Title = styled.h2`
  font-family: "Manrope-Medium";
  font-weight: 500;
  line-height: 1.5;
  font-size: 18px;
`;
export const Model = styled.span`
  color: var(--primary-bt-bg-color);
`;

export const TitleThumb = styled.div`
  position: relative;
  margin-bottom: 12px;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;

  color: var(--secondary-text-color);
  font-size: 12px;
`;

export const InfoListItem = styled.li`
  &:not(:last-child) {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
`;

export const Text = styled.p`
  font-size: 12px;
  margin-top: 14px;
`;

export const TitleSecondInfo = styled.h3`
  margin-top: 24px;
  margin-bottom: 8px;

  font-family: "Manrope-Medium";
  font-weight: 500;
  line-height: 1.4;
  font-size: 14px;
`;

export const ItemConditions = styled.li`
  padding: 7px 14px;
  border-radius: 35px;

  letter-spacing: -0.24px;
  background-color: #f9f9f9;
`;
export const Number = styled.span`
  color: var(--primary-bt-bg-color);
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 168px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 24px;
  border-radius: 12px;

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
