// src/components/HeaderInternal/index.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, LogoHeader, NavLink, HeaderContent } from './styles';
import logo from '../../assets/images/logo.svg';
import { useCart } from '../../contexts/CartContext';

const HeaderInternal: React.FC = () => {
  const { toggleCart, cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink as={Link} to="/">
          Restaurantes
        </NavLink>

        <LogoHeader src={logo} alt="Logo Cheff" />

        <NavLink href="#" onClick={toggleCart}>
          {cartQuantity} produto(s) no carrinho
        </NavLink>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default HeaderInternal;
