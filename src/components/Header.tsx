import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
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
import logo from '../../public/Logotipo-vertical-normal.png' 

interface HeaderProps {
  logoSrc: string;
}

const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

const navItems = [
  { text: 'Início', href: '#inicio' },
  { text: 'Cursos', href: '/cursos' },
  { text: 'Sobre', href: '#sobre' },
  { text: 'Unidades', href: '/unidades' },
  { text: 'Área administrativa', href: '/login' },
  { text: 'Área do aluno', href: 'https://www.sistemasqis.com.br/supercursos_areaaluno/', external: true }
];


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (href: string, e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    
    if (href.startsWith('http://') || href.startsWith('https://')) {
      window.open(href, '_blank', 'noopener,noreferrer');
      setIsMobileMenuOpen(false);
      return;
    }
    
    if (href.includes('#')) {
      const targetId = href.split('#')[1];
      
      if (location.pathname === '/') {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          setIsMobileMenuOpen(false);
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={(e) => handleNavigation('#inicio', e)}>
          <img src={logo} alt="Logo" />
        </Logo>

        <Nav>
          {navItems.map((item, index) => (
            <NavItem 
              key={index} 
              href={item.href}
              onClick={(e) => handleNavigation(item.href, e)}
            >
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

      <MobileMenu $isOpen={isMobileMenuOpen}>
        {navItems.map((item, index) => (
          <MobileNavItem 
            key={index} 
            href={item.href}
            onClick={(e) => handleNavigation(item.href, e)}
          >
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