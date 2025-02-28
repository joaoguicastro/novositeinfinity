// CoursePresentation.styles.ts
import styled from 'styled-components';

// Cores principais
const colors = {
  primary: '#73b809',
  white: '#ffffff',
  black: '#000000',
};

// Breakpoints para responsividade
const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px'
};

export const CourseContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  color: ${colors.black};
  
  @media (max-width: ${breakpoints.sm}) {
    padding: 1rem;
  }
`;

export const CourseHero = styled.div`
  position: relative;
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${breakpoints.sm}) {
    height: 300px;
    border-radius: 12px;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: ${breakpoints.xs}) {
    height: 250px;
  }
`;

export const CourseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CourseOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem;
  color: ${colors.white};
  
  @media (max-width: ${breakpoints.sm}) {
    padding: 1.5rem;
  }
  
  @media (max-width: ${breakpoints.xs}) {
    padding: 1rem;
  }
`;

export const CourseTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  
  @media (max-width: ${breakpoints.md}) {
    font-size: 2rem;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.8rem;
  }
  
  @media (max-width: ${breakpoints.xs}) {
    font-size: 1.5rem;
  }
`;

export const CourseSubtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${colors.primary};
  margin-bottom: 1rem;
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: ${breakpoints.xs}) {
    font-size: 1rem;
  }
`;

export const CourseMetaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  
  @media (max-width: ${breakpoints.sm}) {
    margin-bottom: 1.5rem;
    gap: 0.8rem;
  }
`;

export const CourseMeta = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  
  svg {
    margin-right: 0.5rem;
    color: ${colors.primary};
  }
  
  @media (max-width: ${breakpoints.sm}) {
    margin-right: 1rem;
    font-size: 0.9rem;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const CourseNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  
  @media (max-width: ${breakpoints.sm}) {
    overflow-x: auto;
    white-space: nowrap;
    flex-wrap: nowrap;
    margin-bottom: 1.5rem;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  }
`;

export const NavItem = styled.button<{ active: boolean }>`
  padding: 1rem 2rem;
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.active ? colors.primary : colors.black};
  position: relative;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 3px;
    background-color: ${props => props.active ? colors.primary : 'transparent'};
    transition: background-color 0.3s;
  }
  
  &:hover::after {
    background-color: ${colors.primary};
  }
  
  @media (max-width: ${breakpoints.sm}) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: ${breakpoints.xs}) {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }
`;

export const CourseContent = styled.div`
  margin-bottom: 3rem;
  
  @media (max-width: ${breakpoints.sm}) {
    margin-bottom: 2rem;
  }
`;

export const CourseDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  white-space: pre-line;
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

export const CourseModulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModuleCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s;
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
`;

export const ModuleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  background-color: rgba(115, 184, 9, 0.05);
  cursor: pointer;
  
  @media (max-width: ${breakpoints.sm}) {
    padding: 1rem;
  }
`;

export const ModuleTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 1rem;
  }
`;

export const ModuleContent = styled.div`
  padding: 1.2rem;
  
  @media (max-width: ${breakpoints.sm}) {
    padding: 1rem;
  }
`;

export const ModuleLessons = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LessonItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
  
  svg {
    color: ${colors.primary};
    margin-right: 0.8rem;
    flex-shrink: 0;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    padding: 0.7rem 0;
    font-size: 0.9rem;
    
    svg {
      width: 16px;
      height: 16px;
      margin-right: 0.6rem;
    }
  }
`;

export const InstructorSection = styled.div`
  margin-bottom: 2rem;
`;

export const InstructorCard = styled.div`
  display: flex;
  gap: 2rem;
  background-color: rgba(115, 184, 9, 0.05);
  border-radius: 12px;
  padding: 2rem;
  
  @media (max-width: ${breakpoints.md}) {
    gap: 1.5rem;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    align-items: center;
    text-align: center;
  }
`;

export const InstructorImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${colors.primary};
  
  @media (max-width: ${breakpoints.sm}) {
    width: 100px;
    height: 100px;
  }
`;

export const InstructorInfo = styled.div`
  flex: 1;
  
  .instructor-role {
    color: ${colors.primary};
    margin-bottom: 1rem;
    font-weight: 500;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    .instructor-role {
      margin-bottom: 0.8rem;
    }
  }
`;

export const InstructorName = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
  }
`;

export const InstructorBio = styled.p`
  line-height: 1.6;
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

export const PriceTag = styled.div`
  background-color: rgba(115, 184, 9, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 1.5rem;
  
  .price-main {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${colors.primary};
    margin-bottom: 0.5rem;
  }
  
  .price-installment {
    font-size: 1.1rem;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    padding: 1.2rem;
    
    .price-main {
      font-size: 2rem;
    }
    
    .price-installment {
      font-size: 1rem;
    }
  }
`;

export const EnrollButton = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  border-radius: 8px;
  padding: 1.2rem 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  display: block;
  width: 100%;
  text-align: center;
  
  &:hover {
    background-color: #669e07;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: ${breakpoints.sm}) {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
`;

export const TestimonialsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const TestimonialCard = styled.div`
  background-color: ${colors.white};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: 5rem;
    color: rgba(115, 184, 9, 0.1);
    font-family: Georgia, serif;
    line-height: 1;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    padding: 1.5rem;
    
    &::before {
      font-size: 4rem;
      top: 5px;
      left: 10px;
    }
  }
`;

export const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
  
  strong {
    font-weight: 600;
    margin-bottom: 0.2rem;
  }
  
  span {
    color: ${colors.primary};
    font-size: 0.9rem;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    strong {
      font-size: 0.95rem;
    }
    
    span {
      font-size: 0.85rem;
    }
  }
`;

export const RelatedCoursesSection = styled.div`
  margin: 3rem 0;
  
  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    font-weight: 700;
  }
  
  .related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  @media (max-width: ${breakpoints.md}) {
    margin: 2.5rem 0;
    
    h2 {
      font-size: 1.6rem;
      margin-bottom: 1.2rem;
    }
    
    .related-grid {
      gap: 1.5rem;
    }
  }
  
  @media (max-width: ${breakpoints.sm}) {
    margin: 2rem 0;
    
    h2 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
    
    .related-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
    }
  }
  
  @media (max-width: ${breakpoints.xs}) {
    .related-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export const RelatedCourseCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: ${breakpoints.sm}) {
    border-radius: 8px;
  }
`;

export const RelatedCourseImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  
  @media (max-width: ${breakpoints.sm}) {
    height: 140px;
  }
`;

export const RelatedCourseInfo = styled.div`
  padding: 1.5rem;
  
  @media (max-width: ${breakpoints.sm}) {
    padding: 1.2rem;
  }
`;

export const RelatedCourseCategory = styled.div`
  color: ${colors.primary};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.85rem;
    margin-bottom: 0.3rem;
  }
`;

export const RelatedCourseTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  font-weight: 600;
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.1rem;
  }
`;

export const FAQSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FAQItem = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1.5rem;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    padding-bottom: 1.2rem;
  }
`;

export const FAQQuestion = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: ${colors.black};
  display: flex;
  align-items: center;
  
  &::before {
    content: 'Q:';
    color: ${colors.primary};
    font-weight: 700;
    margin-right: 0.5rem;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: ${breakpoints.xs}) {
    font-size: 1rem;
  }
`;

export const FAQAnswer = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  padding-left: 1.5rem;
  position: relative;
  
  &::before {
    content: 'R:';
    color: ${colors.primary};
    font-weight: 700;
    position: absolute;
    left: 0;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.95rem;
    line-height: 1.5;
    padding-left: 1.2rem;
  }
`;

export const CallToAction = styled.div`
  background-color: rgba(115, 184, 9, 0.1);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  margin-top: 3rem;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: rgba(0, 0, 0, 0.7);
  }
  
  ${EnrollButton} {
    max-width: 400px;
    margin: 0 auto;
  }
  
  @media (max-width: ${breakpoints.md}) {
    padding: 2.5rem;
    margin-top: 2.5rem;
    
    h2 {
      font-size: 1.8rem;
    }
    
    p {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
    }
    
    ${EnrollButton} {
      max-width: 100%;
    }
  }
  
  @media (max-width: ${breakpoints.sm}) {
    padding: 2rem 1.5rem;
    margin-top: 2rem;
    border-radius: 12px;
    
    h2 {
      font-size: 1.6rem;
      margin-bottom: 0.8rem;
    }
    
    p {
      font-size: 1rem;
      margin-bottom: 1.2rem;
    }
  }
`;