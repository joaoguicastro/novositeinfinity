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

interface HeroProps {
  heroImage: string;
}

const Hero: React.FC<HeroProps> = ({ heroImage }) => {
  return (
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
            <SecondaryButton onClick={() => window.location.href = '/consultor'}>
              Falar com Consultor
            </SecondaryButton>
          </CTAButtons>
        </HeroText>

        <HeroImageContainer>
          <img 
            src={heroImage} 
            alt="Alunos em ambiente profissional" 
          />
        </HeroImageContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;