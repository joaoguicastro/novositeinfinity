// components/Hero.tsx
import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroText,
  CTAButtons,
  PrimaryButton,
  SecondaryButton,
  HeroImageContainer,
  Highlight
} from '../styles/HeroStyles';

const Hero: React.FC = () => {
  return (
    <div id='inicio'>
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <h1>
            Construa seu <span>futuro</span> com excelência profissional
          </h1>
          <p>
            Transforme sua carreira com cursos práticos e atualizados. 
            Metodologia focada no mercado de trabalho e professores especialistas.
          </p>

          <Highlight>
            <p>✨ Certificação reconhecida pelo mercado | Aulas práticas | Mentoria individual</p>
          </Highlight>

          <CTAButtons>
            <PrimaryButton onClick={() => window.location.href = '/cursos'}>
              Comece Agora
            </PrimaryButton>
            <SecondaryButton onClick={() => window.location.href = `https://wa.me/5585991154215?text=${encodeURIComponent("Oi, Gostaria de mais informações sobre os cursos")}`}>
              Falar com Consultor
            </SecondaryButton>
          </CTAButtons>
        </HeroText>

        <HeroImageContainer>
          <img 
            src="/Logotipo-vertical-normal.png"
            alt="Alunos em ambiente profissional" 
          />
        </HeroImageContainer>
      </HeroContent>
    </HeroContainer>
    </div>
  );
};

export default Hero;