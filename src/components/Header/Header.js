// Copyright © 2021 Jonathan Dean Damiani
import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({isTransparent}) => {
  return (
    <header className={isTransparent ? "header-wrapper-transparent" : "header-wrapper"}>
      <div className="container header-container"> 
        {/* Hidden for SEO */}
        <h1>
          Fresh Meal Plan
        </h1>

        <img className="header-container-image" src="./logo.png" alt="logo"/>

      </div>
    </header>
  )
}

Header.defaultProps = {
  isTransparent: false
}

Header.propTypes = {
  isTransparent: PropTypes.bool
}

export default Header;
