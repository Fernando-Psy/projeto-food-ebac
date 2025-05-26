import React from 'react';
import { HeaderContainer, Logo, Tagline, TaglineSecondary } from './styles';
import logo from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo Cheff" />
      <Tagline>Viva experiências gastronômicas </Tagline>
      <TaglineSecondary>no conforto de sua casa</TaglineSecondary>
    </HeaderContainer>
  );
};

export default Header;
