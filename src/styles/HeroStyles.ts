// styles/HeroStyles.ts
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const floatingAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

export const HeroContainer = styled.section`
  min-height: 100vh;
  padding-top: 80px;
  background: linear-gradient(135deg, #f2f2f2 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/path-to-subtle-pattern.png');
    opacity: 0.1;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 4rem 2rem;
  }
`;

export const HeroText = styled.div`
  animation: ${fadeInUp} 1s ease;

  h1 {
    font-size: 4rem;
    font-weight: 800;
    color: #000000;
    margin-bottom: 1.5rem;
    line-height: 1.1;

    span {
      color: #73b809;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: #73b809;
        border-radius: 2px;
      }
    }

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.4rem;
    color: #555;
    margin-bottom: 2.5rem;
    line-height: 1.6;
    font-weight: 400;
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const PrimaryButton = styled.button`
  background-color: #73b809;
  color: white;
  padding: 1.2rem 2.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(115, 184, 9, 0.2);

  &:hover {
    background-color: #629c07;
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(115, 184, 9, 0.3);
  }
`;

export const SecondaryButton = styled.button`
  background-color: transparent;
  color: #000000;
  padding: 1.2rem 2.5rem;
  border: 2px solid #73b809;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #73b809;
    color: white;
    transform: translateY(-2px);
  }
`;

export const HeroImageContainer = styled.div`
  position: relative;
  animation: ${floatingAnimation} 6s ease-in-out infinite;

  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 30px 30px 60px rgba(0, 0, 0, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100%;
    height: 100%;
    border: 3px solid #73b809;
    border-radius: 20px;
    z-index: -1;
  }
`;

export const Highlight = styled.div`
  background-color: rgba(115, 184, 9, 0.1);
  border-left: 4px solid #73b809;
  padding: 1rem 1.5rem;
  margin-top: 2rem;
  border-radius: 0 8px 8px 0;

  p {
    font-size: 1.1rem;
    margin: 0;
    color: #444;
  }
`;