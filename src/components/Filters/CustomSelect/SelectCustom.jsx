import PropTypes from "prop-types";
import {  useState } from "react";
import { DropDown, Item, Label, Select, Wrapper } from "./SelectCustom.styled";
import { ArrowButton } from "../../Buttons/ArrowButton/ArrowButton";

export const SelectCustom = ({ list, label, value, textFirstPart, textSecondPart, getValue, wrapperStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (string) => {
    getValue(string);
    setIsOpen((prev) => !prev);
    };
  return (
      <Wrapper style={wrapperStyle}>
      <Label>{label}</Label>
      <Select onClick={() => setIsOpen((prev) => !prev)} >
              {textFirstPart} {value}{textSecondPart} <ArrowButton isOpen={isOpen}  />
      </Select>
      {isOpen && (
        <DropDown style={{marginTop: '4px'}}>
          {list.map((item) => {
            return (
              <Item key={item} onClick={() => handleClick(item)}>
                {item}
              </Item>
            );
          })}
        </DropDown>
      )}
    </Wrapper>
  );
};

SelectCustom.propTypes = {
  list: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    textFirstPart: PropTypes.string,
    textSecondPart: PropTypes.string,
    getValue: PropTypes.func.isRequired,
    wrapperStyle:PropTypes.object,
  
};
