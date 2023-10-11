import PropTypes from "prop-types";
import { Input, Label, Text, Title } from "./CustomInput.style";
import { addComma } from "../../../utils/addComma";

export const CustomInput = ({
  name,
  text,
  type,
  title,
  inputStyle,
  getValue,
  values,
}) => {
  return (
    <Label>
      <Title>{title}</Title>
      <Input
        type={type}
        name={name}
        style={inputStyle}
        value={values}
        onChange={(e) => getValue(addComma(e.target.value))}
      />
      <Text>{text}</Text>
    </Label>
  );
};

CustomInput.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  inputStyle: PropTypes.object,
  getValue: PropTypes.func,
  values: PropTypes.string,
};
