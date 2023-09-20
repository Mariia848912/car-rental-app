import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
`;
export const MainTitle = styled.h1`
  margin-bottom: 60px;
  font-family: "Manrope-SemiBold";
  font-weight: 600;
`;

export const ListTitle = styled.h2`
  margin-bottom: 40px;
`;
export const List = styled.ul`
  display: flex;
  gap: 28px;
  margin-bottom: 60px;
`;

export const Item = styled.li`
  width: 270px;
`;

export const IconThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 40px;
  height: 40px;
  background-color: #f5f4fa;
  border-radius: 50%;
`;

export const CardTitle = styled.h3`
  margin-bottom: 10px;
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 274px;
  padding-top: 12px;
  padding-bottom: 12px;
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
