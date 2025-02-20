// styles/TestimonialsStyles.ts
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TestimonialsSection = styled.section`
  padding: 6rem 2rem;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
`;

export const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeIn} 1s ease;

  h2 {
    font-size: 2.5rem;
    color: #000000;
    margin-bottom: 1rem;
    font-weight: 700;

    span {
      color: #73b809;
    }
  }

  p {
    font-size: 1.2rem;
    color: #666;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

export const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  margin: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: '"';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 4rem;
    color: #73b809;
    opacity: 0.2;
    font-family: serif;
  }
`;

export const TestimonialContent = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
`;

export const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AuthorInfo = styled.div`
  h4 {
    color: #000000;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
    font-weight: 600;
  }

  p {
    color: #73b809;
    font-size: 0.9rem;
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const NavButton = styled.button<{ isActive?: boolean }>`
  background: ${props => props.isActive ? '#73b809' : 'transparent'};
  border: 2px solid #73b809;
  color: ${props => props.isActive ? 'white' : '#73b809'};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #73b809;
    color: white;
  }
`;

export const TestimonialsSlider = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`;