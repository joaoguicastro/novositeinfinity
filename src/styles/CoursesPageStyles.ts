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

export const FiltersContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0 1rem;
`;

export const SearchBar = styled.div`
  flex: 1;
  max-width: 400px;
  position: relative;

  input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #73b809;
      box-shadow: 0 0 0 2px rgba(115, 184, 9, 0.1);
    }
  }

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
  }
`;

export const CategoryFilters = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const CategoryButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  border: 1px solid ${props => props.active ? '#73b809' : '#e0e0e0'};
  background: ${props => props.active ? '#73b809' : 'transparent'};
  color: ${props => props.active ? 'white' : '#666'};
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#629c07' : '#f5f5f5'};
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

export const LoadMoreButton = styled.button`
  display: block;
  margin: 3rem auto 0;
  padding: 1rem 2.5rem;
  background-color: transparent;
  border: 2px solid #73b809;
  color: #73b809;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #73b809;
    color: white;
  }
`;