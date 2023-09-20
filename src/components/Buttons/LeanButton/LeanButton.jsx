import PropTypes from "prop-types";

export const LeanButton = ({ openModel }) => {

    return (
        <button type='button' onClick={openModel}>Learn more</button>
    )
}

LeanButton.propTypes = {
  openModel: PropTypes.func.isRequired,
};