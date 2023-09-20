import PropTypes from 'prop-types';
import { Text } from './Empty.styled';

export const Empty = ({ name }) => {
  return <Text>The {name} is empty.</Text>;
};

Empty.propTypes = {
  name: PropTypes.string.isRequired,
};
