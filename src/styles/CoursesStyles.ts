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
  padding: 3rem 1rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

export const SectionHeader = styled.div`
  max-width: 800px;
  margin: 0 auto 2.5rem;
  text-align: center;
  animation: ${fadeInUp} 1s ease;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    margin: 0 auto 4rem;
  }

  h2 {
    font-size: 1.8rem;
    color: #000000;
    margin-bottom: 0.75rem;
    font-weight: 700;
    
    @media (min-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    span {
      color: #73b809;
    }
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
    
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

export const CoursesGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 0.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }
`;

export const CourseCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  animation: ${fadeInUp} 1s ease;
  cursor: pointer;
  
  @media (min-width: 768px) {
    border-radius: 15px;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const CourseImage = styled.div`
  position: relative;
  height: 160px;
  overflow: hidden;
  
  @media (min-width: 768px) {
    height: 200px;
  }

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
  top: 0.75rem;
  right: 0.75rem;
  background: #73b809;
  color: white;
  padding: 0.4rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  
  @media (min-width: 768px) {
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;

export const CourseContent = styled.div`
  padding: 1.25rem;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const CourseTitle = styled.h3`
  font-size: 1.1rem;
  color: #000000;
  margin-bottom: 0.5rem;
  font-weight: 600;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const CourseInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0.75rem 0;
  color: #666;
  font-size: 0.8rem;
  flex-wrap: wrap;
  
  @media (min-width: 768px) {
    gap: 1rem;
    margin: 1rem 0;
    font-size: 0.875rem;
  }

  svg {
    color: #73b809;
    font-size: 0.9rem;
    
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const CoursePrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.25rem;
  padding-top: 0.75rem;
  border-top: 1px solid #eee;
  
  @media (min-width: 768px) {
    margin-top: 1.5rem;
    padding-top: 1rem;
  }

  .price {
    font-size: 1.25rem;
    font-weight: 700;
    color: #73b809;
    
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .installments {
    font-size: 0.75rem;
    color: #666;
    
    @media (min-width: 768px) {
      font-size: 0.875rem;
    }
  }
`;

export const CourseButton = styled.button`
  width: 100%;
  background-color: #73b809;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 0.75rem;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  @media (min-width: 768px) {
    padding: 1rem;
    margin-top: 1rem;
    font-size: 1rem;
  }

  &:hover {
    background-color: #629c07;
  }
`;

export const ViewAllButton = styled.button`
  background-color: transparent;
  color: #73b809;
  border: 2px solid #73b809;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    margin-top: 3rem;
  }

  &:hover {
    background-color: #73b809;
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(115, 184, 9, 0.2);
  }
`;