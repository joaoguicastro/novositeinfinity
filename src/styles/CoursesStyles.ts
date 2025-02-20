// styles/CoursesStyles.ts
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CoursesSection = styled.section`
  padding: 6rem 2rem;
  background-color: #ffffff;
`;

export const SectionHeader = styled.div`
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
  animation: ${fadeInUp} 1s ease;

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
    line-height: 1.6;
  }
`;

export const CoursesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

export const CourseCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  animation: ${fadeInUp} 1s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const CourseImage = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const CourseCategory = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #73b809;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const CourseContent = styled.div`
  padding: 1.5rem;
`;

export const CourseTitle = styled.h3`
  font-size: 1.25rem;
  color: #000000;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const CourseInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  color: #666;
  font-size: 0.875rem;

  svg {
    color: #73b809;
  }
`;

export const CoursePrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;

  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #73b809;
  }

  .installments {
    font-size: 0.875rem;
    color: #666;
  }
`;

export const CourseButton = styled.button`
  width: 100%;
  background-color: #73b809;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #629c07;
  }
`;