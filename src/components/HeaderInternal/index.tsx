import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, LogoHeader, NavLink, HeaderContent } from './styles';
import logo from '../../assets/images/logo.svg';

const HeaderInternal: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink as={Link} to="/">
          Restaurantes
        </NavLink>

        <LogoHeader src={logo} alt="Logo Cheff" />

        <NavLink href="#" onClick={() => console.log('Carrinho clicado')}>
          0 produto(s) no carrinho
        </NavLink>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default HeaderInternal;
