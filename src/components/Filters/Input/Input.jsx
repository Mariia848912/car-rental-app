import PropTypes from "prop-types";
import { useField } from "formik";
import { changeMileage } from "../../../utils/changeMileage";
import { InputField, Label, Text } from "./Input.styled";

export const Input = ({ title, ...props }) => {
  const [field, helpers] = useField(props);
  const styleMileageFrom = {
    borderRadius: "14px 0px 0px 14px",
    borderRight: "1px solid rgba(138, 138, 137, 0.20)",
  };
  const stylemileageTo = {
    borderRadius: "0px 14px 14px 0px",
  };

  const test = (e) => {
    let changeValue = changeMileage(e.target.value);
    helpers.setValue(changeValue);
  };
  return (
    <Label>
      <InputField
        {...field}
        {...props}
        onChange={test}
        style={field.name === "mileageFrom" ? styleMileageFrom : stylemileageTo}
      />
      <Text>{title}</Text>
    </Label>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
