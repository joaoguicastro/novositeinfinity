import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom'; // IMPORTANTE
import { BotaoUnidades } from '../styles/FooterStyles';


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
            <li><Link to="/cursos">Nossos Cursos</Link></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="https://www.sistemasqis.com.br/supercursos_areaaluno/" target="_blank" rel="noopener noreferrer">Área do Aluno</a></li>
            <li><a href="https://wa.me/5585991154215">Contato</a></li>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <h3>Contato</h3>
          <ContactInfo>
            <div>
              <MapPin size={20} />
              <span>
                Rua João de Alencar, 113, Centro - Maracanaú/CE - MATRIZ<br />
                Rua Francisco Sales, 116, Centro - Caucaia/CE - FILIAL
              </span>
            </div>
            <div>
              <Phone size={20} />
              <span>(85) 9 9115-4215</span>
            </div>
            <div>
              <Mail size={20} />
              <span>redeinfinitycursos@gmail.com</span>
            </div>
            <BotaoUnidades to="/unidades">
              Ver Unidades
            </BotaoUnidades>
          </ContactInfo>
        </FooterColumn>

        <FooterColumn>
          <h3>Redes Sociais</h3>
          <p>Siga-nos nas redes sociais e fique por dentro das novidades.</p>
          <SocialLinks>
            <a href="https://www.instagram.com/infinitycursosofc/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
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
