import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import {
  FooterSection,
  FooterContainer,
  FooterColumn,
  FooterLinks,
  ContactInfo,
  SocialLinks,
  FooterBottom
} from '../styles/FooterStyles';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterColumn>
          <h3>Sobre Nós</h3>
          <p>
            Somos uma escola de cursos profissionalizantes dedicada à excelência
            no ensino e ao desenvolvimento profissional dos nossos alunos,
            oferecendo uma formação completa e atualizada.
          </p>
        </FooterColumn>

        <FooterColumn>
          <h3>Links Rápidos</h3>
          <FooterLinks>
            <li><a href="#">Nossos Cursos</a></li>
            <li><a href="#">Histórias de Sucesso</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Área do Aluno</a></li>
            <li><a href="#">Contato</a></li>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <h3>Contato</h3>
          <ContactInfo>
            <div>
              <MapPin size={20} />
              <span>Rua Example, 123 - Cidade</span>
            </div>
            <div>
              <Phone size={20} />
              <span>(00) 1234-5678</span>
            </div>
            <div>
              <Mail size={20} />
              <span>contato@exemplo.com</span>
            </div>
          </ContactInfo>
        </FooterColumn>

        <FooterColumn>
          <h3>Redes Sociais</h3>
          <p>Siga-nos nas redes sociais e fique por dentro das novidades.</p>
          <SocialLinks>
            <a href="#" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </SocialLinks>
        </FooterColumn>
      </FooterContainer>

      <FooterBottom>
        <p>© {new Date().getFullYear()} Infinity Cursos Profissionalizantes. Todos os direitos reservados.</p>
      </FooterBottom>
    </FooterSection>
  );
};

export default Footer;