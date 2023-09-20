import PropTypes from "prop-types";

export const Select = ({ label, title, constant, name }) => {
  return (
    <>
          <label>
              <span>{label}</span>
      <select name={name}>
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
