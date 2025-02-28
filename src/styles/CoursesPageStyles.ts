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

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  width: 100%;
`;

export const CoursesSection = styled.section`
  padding: 4rem 1rem;
  background-color: #ffffff;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

export const SectionHeader = styled.div`
  max-width: 800px;
  margin: 0 auto 3rem;
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

export const FiltersContainer = styled.div`
  width: 100%;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
  }
`;

export const SearchBar = styled.div`
  width: 70%;
  max-width: 280px;
  position: relative;
  margin-bottom: 1rem;
  align-self: center;
  
  @media (min-width: 768px) {
    width: 100%;
    flex: 1;
    max-width: 400px;
    margin-bottom: 0;
    align-self: auto;
  }

  input {
    width: 100%;
    padding: 0.6rem 1rem 0.6rem 2.2rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    
    @media (min-width: 768px) {
      padding: 0.75rem 1rem 0.75rem 2.5rem;
      font-size: 1rem;
    }

    &:focus {
      outline: none;
      border-color: #73b809;
      box-shadow: 0 0 0 2px rgba(115, 184, 9, 0.1);
    }
  }

  svg {
    position: absolute;
    left: 0.6rem;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    font-size: 0.9rem;
    
    @media (min-width: 768px) {
      left: 0.75rem;
      font-size: 1rem;
    }
  }
`;

export const CategoryFilters = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  width: 100%;
  
  @media (min-width: 768px) {
    width: auto;
    gap: 1rem;
  }
`;

export const CategoryButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 25px;
  border: 1px solid ${props => props.active ? '#73b809' : '#e0e0e0'};
  background: ${props => props.active ? '#73b809' : 'transparent'};
  color: ${props => props.active ? 'white' : '#666'};
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  
  @media (min-width: 768px) {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
  }

  &:hover {
    background: ${props => props.active ? '#629c07' : '#f5f5f5'};
  }
`;

export const CoursesGrid = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    max-width: 1200px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 2rem auto 0;
  padding: 0.75rem 2rem;
  background-color: transparent;
  border: 2px solid #73b809;
  color: #73b809;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 90%;
  max-width: 250px;
  
  @media (min-width: 768px) {
    margin: 3rem auto 0;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    width: auto;
    max-width: none;
  }

  &:hover {
    background-color: #73b809;
    color: white;
  }
`;