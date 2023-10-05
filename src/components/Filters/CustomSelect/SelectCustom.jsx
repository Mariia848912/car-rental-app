import PropTypes from "prop-types";
import { useState } from "react";
import { DropDown, Label, Select, Wrapper } from "./SelectCustom.styled";
import { ArrowButton } from "../../Buttons/ArrowButton/ArrowButton";

export const SelectCustom = ({ list, label }) => {
  const initialValue = label === "Car brand" ? "Enter the text" : "To $";
  const [value, setvalue] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);
  const getValue = (string) => {
    setvalue(string);
    setIsOpen((prev) => !prev);
  };
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Select onClick={() => setIsOpen((prev) => !prev)}>
        {value} <ArrowButton isOpen={isOpen} />
      </Select>
      {isOpen && (
        <DropDown>
          {list.map((item) => {
            return (
              <div key={item} onClick={() => getValue(item)}>
                {item}
              </div>
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
};
