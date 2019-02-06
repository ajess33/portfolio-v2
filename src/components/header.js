import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import headshot from '../images/headshot-sm.png';

// STILL NEED TO MAKE RESPONSIVE

const Header = ({ siteTitle }) => (
  <header>
    <img src={headshot} alt="Headshot of Austin Jess" />
    <nav>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul>
        <li>
          <Link to="/Portfolio/">PORTFOLIO</Link>
        </li>
        <li>
          <Link to="/Toolbox/">TOOLBOX</Link>
        </li>{' '}
        <li>
          <Link to="/Contact/">CONTACT</Link>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
