import PropTypes from "prop-types";
import { useField } from "formik";

export const Select = ({ label, title, constant, ...props }) => {
    const [field] = useField(props);
    return (
    <>
          <label>
              <span>{label}</span>
                <select {...field} {...props}>
        <option value="" disabled selected hidden>
          {title}
                  </option>
                  {constant.map((value) => (
                      <option key={value} value={value}>{value}</option>
                  ))}
        
        
              </select>
              </label>
    </>
  );
};

Select.propTypes = {
  constant: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

};
