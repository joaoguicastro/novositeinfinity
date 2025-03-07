import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
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
            <li><a href="/cursos">Nossos Cursos</a></li>
            <li><a href="#historias">Histórias de Sucesso</a></li>
            <li><a href="https://infinity.curso.study/metodo/login.php">Área do Aluno</a></li>
            <li><a href="">Contato</a></li>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <h3>Contato</h3>
          <ContactInfo>
            <div>
              <MapPin size={20} />
              <span>Rua Joao de Alencar, 113 - Maracanau</span>
            </div>
            <div>
              <Phone size={20} />
              <span>(85) 9 9115-4215</span>
            </div>
            <div>
              <Mail size={20} />
              <span>redeinfinitycursos@gmail.com</span>
            </div>
          </ContactInfo>
        </FooterColumn>

        <FooterColumn>
          <h3>Redes Sociais</h3>
          <p>Siga-nos nas redes sociais e fique por dentro das novidades.</p>
          <SocialLinks>
            <a href="https://www.instagram.com/infinitycursosofc/" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="" aria-label="LinkedIn">
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