import React from 'react';
import {
  Container,
  Title,
  UnidadeWrapper,
  UnidadeCard,
  UnidadeTitle,       
  MapaWrapper           
} from '../styles/UnidadesStyles';


const UnidadesPage: React.FC = () => {
  return (
    <Container>
      <Title>Nossas Unidades</Title>

      <UnidadeWrapper>
        <UnidadeCard>
          <UnidadeTitle>Matriz - Maracanaú</UnidadeTitle>
          <p>Rua João de Alencar, 113, Centro - Maracanaú/CE</p>

          <MapaWrapper>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.679345471154!2d-38.624095724291585!3d-3.8787585439570114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c753930aeb4d5d%3A0x9beaa284504b7a38!2sInfinity%20Cursos%20Profissionalizantes!5e0!3m2!1spt-BR!2sbr!4v1748557087543!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapaWrapper>
        </UnidadeCard>

        <UnidadeCard>
          <UnidadeTitle>Filial - Caucaia</UnidadeTitle>
          <p>Rua Francisco Sales, 116, Centro - Caucaia/CE</p>

          <MapaWrapper>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.339712105888!2d-38.659040624292714!3d-3.7359434432120806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0b54d3121b201%3A0x68367b7178e49313!2sInfinity%20Cursos%20Profissionalizantes%20-%20Caucaia!5e0!3m2!1spt-BR!2sbr!4v1748557156145!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapaWrapper>
        </UnidadeCard>
      </UnidadeWrapper>
    </Container>
  );
};

export default UnidadesPage;
