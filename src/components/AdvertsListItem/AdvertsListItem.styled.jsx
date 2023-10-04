import styled from "styled-components";

export const Item = styled.li`
  position: relative;
   flex-basis: calc((100% - 58px) / 3);
  @media screen and (min-width: 1216px) {
    flex-basis: calc((100% - 87px) / 4);
  }
 
`;
export const Img = styled.img`
  height: 268px;
  object-fit: cover;
  border-radius: 12px;
`;
export const ImgThumb = styled.div`
  border-radius: 12px;
  margin-bottom: 14px;
`;

export const ButtonHeart = styled.button`
  background-color: transparent;
  top: 14px;
  right: 14px;
  border: none;
  position: absolute;
`;

export const Title = styled.h2`
  font-family: "Manrope-Medium";
  font-weight: 500;
  line-height: 1.5;
  font-size: 16px;
`;
export const Model = styled.span`
  color: var(--primary-bt-bg-color);
`;

export const TitleThumb = styled.div`
  position: relative;
`;

export const Price = styled.p`
  position: absolute;
  top: 0;
  right: 9px;

  font-family: "Manrope-Medium";
  font-weight: 500;
  line-height: 1.5;
  font-size: 16px;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  height: 40px;
  overflow: hidden;
  color: var(--secondary-text-color);
`;

export const InfoListItem = styled.li`
  font-size: 12px;

  &:not(:last-child) {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
`;
