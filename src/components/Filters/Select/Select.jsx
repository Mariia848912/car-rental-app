import PropTypes from "prop-types";
import { useField } from "formik";
import { Label, SelectStyle, Title } from "./Select.styled";

export const Select = ({ label, title, constant, ...props }) => {
  const [field] = useField(props);
  console.log(field.name);
  return (
    <>
      <Label>
        <Title>{label}</Title>
        <SelectStyle
          {...field}
          {...props}
          style={
            field.name === "price" ? { width: "125px" } : { width: "224px" }
          }
        >
          <option value="" disabled hidden>
            {title}
          </option>
          {constant.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </SelectStyle>
      </Label>
    </>
  );
};

Select.propTypes = {
  constant: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
// );props.name === 'price' ? {width: '125px'} : {width: '224px'}
