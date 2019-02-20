import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import headshot from '../images/headshot-sm.png';
import { IoMdMenu } from 'react-icons/io';

class Header extends React.Component {
  componentDidMount() {
    let menuFull = document.getElementById('js-main-nav');
    let menuMobile = document.getElementById('js-menu-mobile');

    menuMobile.addEventListener('click', () => {
      menuFull.classList.toggle('active');
    });
  }

  render() {
    return (
      <header>
        <img src={headshot} alt="Headshot of Austin Jess" />
        <nav>
          <h1>
            <Link to="/">Austin Jess</Link>
          </h1>
          <div id="js-menu-mobile" className="menu-mobile">
            <IoMdMenu size={35} />
          </div>
          <ul id="js-main-nav">
            <li>
              <Link to="/Portfolio/" activeClassName="active">
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link to="/Toolbox/" activeClassName="active">
                TOOLBOX
              </Link>
            </li>{' '}
            <li>
              <Link to="/Contact/" activeClassName="active">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
