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
    { text: 'Blog', href: '/blog' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <img src={logoSrc} alt="Logo" />
        </Logo>

        <Nav>
          {navItems.map((item, index) => (
            <NavItem key={index} href={item.href}>
              {item.text}
            </NavItem>
          ))}
          <ContactButton onClick={() => window.location.href = '/contato'}>
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
        <MobileNavItem as="button" onClick={() => window.location.href = '/contato'}>
          Fale Conosco
        </MobileNavItem>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;