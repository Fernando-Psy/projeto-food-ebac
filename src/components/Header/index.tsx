import React from 'react';
import { HeaderContainer, LogoHeader, TaglineSecondary } from './styles';
import logo from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoHeader src={logo} alt="Logo Cheff" />
      <p>
        Viva experiências gastronômicas <br />
        no conforto de sua casa
      </p>
      <TaglineSecondary></TaglineSecondary>
    </HeaderContainer>
  );
};

export default Header;
