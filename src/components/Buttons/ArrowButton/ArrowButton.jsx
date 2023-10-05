import PropTypes from "prop-types";
import { ArrowDownIcon, ArrowUpIcon } from "../../../utils/icons";
import { Button } from "./ArrowButton.styled";



export const ArrowButton = ({ isOpen }) => {
  return (
    <Button
      type="button"
    >
      {isOpen ? (
        <ArrowDownIcon/>
      ) : (
          <ArrowUpIcon  />
      )}
    </Button>
  );
};

ArrowButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
