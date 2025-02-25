// CoursePresentation.styles.ts
import styled from 'styled-components';

// Cores principais
const colors = {
  primary: '#73b809',
  white: '#ffffff',
  black: '#000000',
};

export const CourseContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  color: ${colors.black};
`;

export const CourseHero = styled.div`
  position: relative;
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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
`;

export const CourseTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

export const CourseSubtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${colors.primary};
  margin-bottom: 1rem;
`;

export const CourseMetaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

export const CourseMeta = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  
  svg {
    margin-right: 0.5rem;
    color: ${colors.primary};
  }
`;

export const CourseNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
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
`;

export const CourseContent = styled.div`
  margin-bottom: 3rem;
`;

export const CourseDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  white-space: pre-line;
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
`;

export const ModuleTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`;

export const ModuleContent = styled.div`
  padding: 1.2rem;
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
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InstructorImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${colors.primary};
`;

export const InstructorInfo = styled.div`
  flex: 1;
  
  .instructor-role {
    color: ${colors.primary};
    margin-bottom: 1rem;
    font-weight: 500;
  }
`;

export const InstructorName = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
`;

export const InstructorBio = styled.p`
  line-height: 1.6;
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
`;

export const TestimonialsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
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
`;

export const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
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
`;

export const RelatedCourseImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const RelatedCourseInfo = styled.div`
  padding: 1.5rem;
`;

export const RelatedCourseCategory = styled.div`
  color: ${colors.primary};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const RelatedCourseTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  font-weight: 600;
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
`;