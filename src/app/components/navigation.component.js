import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./navigation.theme.css";

const NavigationComponent = ({ links }) => {
  return (
    <nav styleName="parent-navigation">
      {links.map((anchor, iteration) => {
        return (
          <li key={`nav-${iteration}`}>
            <Link to={anchor.path}>{anchor.name}</Link>
          </li>
        );
      })}
    </nav>
  );
};

NavigationComponent.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object)
};

export default NavigationComponent;
