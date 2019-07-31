import React from "react";
import PropTypes from "prop-types";

const CountDisplay = ({ count }) => <p>{count}</p>;

CountDisplay.propTypes = {
    count: PropTypes.number.isRequired,
};

export default CountDisplay;
