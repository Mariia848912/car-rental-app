import PropTypes from "prop-types";
import { Button, ButtonThumb } from "./LoadMoreButton.styled";

export const LoadMoreButton = ({ changePage }) => {
  return (
    <ButtonThumb>
      <Button type="button" onClick={changePage}>
        Load more
      </Button>
    </ButtonThumb>
  );
};
LoadMoreButton.propTypes = {
  changePage: PropTypes.func.isRequired,
};
