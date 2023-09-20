import PropTypes from "prop-types";
import { useField } from "formik";
import { changeMileage } from "../../../utils/changeMileage";

export const Input = ({ title, ...props }) => {
  const [field, meta, helpers] = useField(props);
    // console.log('field',field);
    // console.log('meta',meta);
    // console.log('helpers',helpers);

    const test = (e) => {
        let changeValue = changeMileage(e.target.value)
        console.log(changeValue);
        helpers.setValue(changeValue);
       console.log(e.target.value);
   }
  return (
    <label >
      <span>{title}</span>
          <input {...field} {...props} onChange={test} />
         </label>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};