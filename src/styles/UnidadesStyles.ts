import styled from 'styled-components';

export const Container = styled.div`
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #73b809;
  margin-bottom: 3rem;
`;

export const UnidadeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

export const UnidadeCard = styled.div`
  flex: 1;
  background: #f9f9f9;
  border-left: 5px solid #73b809;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

export const UnidadeTitle = styled.h2`
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 0.5rem;
`;

export const UnidadeEndereco = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.5;
`;

export const MapaWrapper = styled.div`
  margin-top: 3rem;
  iframe {
    width: 100%;
    height: 450px;
    border: none;
    border-radius: 10px;
  }
`;
