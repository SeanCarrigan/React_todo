import PropTypes from "prop-types";

export default function Another(props) {
  return <div>Another Component, {props.name}</div>;
}
Another.propTypes = {
  name: PropTypes.string.isRequired,
};
