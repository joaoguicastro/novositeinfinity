// components/Stats.tsx
import React from 'react';
import { Users, Award, BookOpen, Briefcase, Clock, Star, Shield } from 'lucide-react';
import {
  StatsSection,
  StatsContainer,
  StatsHeader,
  StatsGrid,
  StatCard,
  DifferentialsGrid,
  DifferentialCard
} from '../styles/StatsStyles';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Users size={40} />,
      number: "15.000+",
      text: "Alunos Formados"
    },
    {
      icon: <Award size={40} />,
      number: "98%",
      text: "Taxa de Aprovação"
    },
    {
      icon: <BookOpen size={40} />,
      number: "100+",
      text: "Cursos Disponíveis"
    },
    {
      icon: <Briefcase size={40} />,
      number: "85%",
      text: "Empregabilidade"
    }
  ];

  const differentials = [
    {
      icon: <Clock size={32} />,
      title: "Flexibilidade de Horários",
      description: "Escolha a melhor forma de estudar! Oferecemos aulas presenciais em diversos horários e também aulas gravadas para que você aprenda no seu próprio ritmo."
    },
    {
      icon: <Star size={32} />,
      title: "Professores Especialistas",
      description: "Aprenda com profissionais reconhecidos no mercado e com vasta experiência prática."
    },
    {
      icon: <Shield size={32} />,
      title: "Certificação Reconhecida",
      description: "Receba um certificado valorizado pelo mercado de trabalho e inicie sua carreira profissional."
    }
  ];

  return (
    <div id="sobre">
    <StatsSection>
      <StatsContainer>
        <StatsHeader>
          <h2>Números que <span>Comprovam</span> Nossa Excelência</h2>
          <p>Transformamos a vida de milhares de alunos através da educação profissional de qualidade</p>
        </StatsHeader>

        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <div className="icon">{stat.icon}</div>
              <h3>{stat.number}</h3>
              <p>{stat.text}</p>
            </StatCard>
          ))}
        </StatsGrid>

        <DifferentialsGrid>
          {differentials.map((differential, index) => (
            <DifferentialCard key={index}>
              <div className="icon">{differential.icon}</div>
              <h4>{differential.title}</h4>
              <p>{differential.description}</p>
            </DifferentialCard>
          ))}
        </DifferentialsGrid>
      </StatsContainer>
    </StatsSection>
    </div>
  );
};

export default Stats;