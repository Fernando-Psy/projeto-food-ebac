import React from 'react';
import logo from '../../assets/images/logo.svg';
import { FooterContainer, SocialFooter } from './styles';
import { LogoFooter } from '../Footer/styles';

import instagram from '../../assets/images/instagram-round-svgrepo-com (1) 1.svg';
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.svg';
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.svg';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LogoFooter src={logo} alt="Logo Cheff" />
      <SocialFooter>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="Instagram noreferrer"
        >
          <img src={instagram} alt="Instagram" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="Facebook noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="Twitter noreferrer"
        >
          <img src={twitter} alt="Twitter" />
        </a>
      </SocialFooter>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </p>
    </FooterContainer>
  );
};

export default Footer;
