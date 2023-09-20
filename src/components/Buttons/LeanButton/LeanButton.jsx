import PropTypes from "prop-types";
import { Button } from "./LeanButton.styled";

export const LeanButton = ({ openModel }) => {
  return (
    <Button type="button" onClick={openModel}>
      Learn more
    </Button>
  );
};

LeanButton.propTypes = {
  openModel: PropTypes.func.isRequired,
};
