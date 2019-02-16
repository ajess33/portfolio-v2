import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import headshot from '../images/headshot-sm.png';
import { IoMdMenu } from 'react-icons/io';

// STILL NEED TO MAKE RESPONSIVE

// const Header = ({ siteTitle }) => (
//   <header>
//     <img src={headshot} alt="Headshot of Austin Jess" />
//     <nav>
//       <h1>
//         <Link to="/">{siteTitle}</Link>
//       </h1>
//       <div className="menu-mobile">
//         <IoMdMenu size={35} />
//       </div>
//       <ul className="menu-full">
//         <li>
//           <Link to="/Portfolio/">PORTFOLIO</Link>
//         </li>
//         <li>
//           <Link to="/Toolbox/">TOOLBOX</Link>
//         </li>{' '}
//         <li>
//           <Link to="/Contact/">CONTACT</Link>
//         </li>
//       </ul>
//     </nav>
//   </header>
// );

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
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
