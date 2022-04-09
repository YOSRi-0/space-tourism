import React, { useState } from 'react';
import { NavLink } from '../buttons/Buttons';
import {
  Line,
  LogoContainer,
  MobileToggle,
  NavEl,
  NavList,
} from './Header.styles';
import { ReactComponent as Logo } from '../../assets/shared/logo.svg';
import hamburgerIcon from '../../assets/shared/icon-hamburger.svg';
import closeIcon from '../../assets/shared/icon-close.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <NavEl>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MobileToggle
        onClick={() => setActive(!active)}
        url={active ? closeIcon : hamburgerIcon}
      />
      <NavList active={active}>
        <NavLink>
          <Link to="/home">
            <span>00</span>home
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/destination">
            <span>01</span>destination
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/crew">
            <span>02</span>crew
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/technology">
            <span>03</span>technology
          </Link>
        </NavLink>
      </NavList>
      <Line />
    </NavEl>
  );
};

export default Header;
