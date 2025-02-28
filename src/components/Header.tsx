// components/Header.tsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Nav,
  NavItem,
  ContactButton,
  MobileMenuButton,
  MobileMenu,
  MobileNavItem
} from '../styles/HeaderStyles';

interface HeaderProps {
  logoSrc: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { text: 'Início', href: '/' },
    { text: 'Cursos', href: '/cursos' },
    { text: 'Sobre', href: '/sobre' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={() => window.location.href = '/'}>
          <img src={logoSrc} alt="Logo" />
        </Logo>

        <Nav>
          {navItems.map((item, index) => (
            <NavItem key={index} href={item.href}>
              {item.text}
            </NavItem>
          ))}
          <ContactButton onClick={() => window.location.href = `https://wa.me/5585991154215?text=${encodeURIComponent("Oi, Gostaria de mais informações sobre os cursos")}`}>
            Fale Conosco
          </ContactButton>
        </Nav>

        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </HeaderContent>

      <MobileMenu isOpen={isMobileMenuOpen}>
        {navItems.map((item, index) => (
          <MobileNavItem key={index} href={item.href}>
            {item.text}
          </MobileNavItem>
        ))}
        <MobileNavItem as="button" onClick={() => window.location.href = `https://wa.me/5585991154215?text=${encodeURIComponent("Oi, Gostaria de mais informações sobre os cursos")}`}>
          Fale Conosco
        </MobileNavItem>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;