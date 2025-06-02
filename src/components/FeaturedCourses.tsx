// components/FeaturedCourses.tsx
import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import desenvolvedroFullStack from '../assets/cursos/desenvolvedorfullstack.jpg'
import marketingDigital from '../assets/cursos/marketingdigital.jpg'
import empreendedorismo from '../assets/cursos/empreendedorismo.png'
import {
  CoursesSection,
  SectionHeader,
  CoursesGrid,
  CourseCard,
  CourseImage,
  CourseCategory,
  CourseContent,
  CourseTitle,
  CourseInfo,
  CourseButton,
  ViewAllButton
} from '../styles/CoursesStyles';

interface Course {
  id: number;
  title: string;
  category: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  installments: number;
}

const FeaturedCourses: React.FC = () => {
  const courses: Course[] = [
    {
      id: 2,
      title: "Desenvolvimento Full Stack",
      category: "Tecnologia",
      image: desenvolvedroFullStack,
      duration: "8 meses",
      students: 200,
      rating: 4.8,
      installments: 12
    },
    {
      id: 6,
      title: "Marketing Digital",
      category: "Tecnologia",
      image: marketingDigital,
      duration: "8 meses",
      students: 200,
      rating: 4.7,
      installments: 12
    },
    {
      id: 8,
      title: "Empreendedorismo",
      category: "Negócios",
      image: empreendedorismo,
      duration: "8 meses",
      students: 200,
      rating: 4.9,
      installments: 12
    }
  ];

  return (
    <CoursesSection>
      <SectionHeader>
        <h2>Cursos em <span>Destaque</span></h2>
        <p>Escolha entre nossos cursos mais populares e comece sua jornada de transformação profissional hoje mesmo.</p>
      </SectionHeader>

      <CoursesGrid>
        {courses.map((course) => (
          <CourseCard key={course.id}>
            <CourseImage>
              <img src={course.image} alt={course.title} />
              <CourseCategory>{course.category}</CourseCategory>
            </CourseImage>

            <CourseContent>
              <CourseTitle>{course.title}</CourseTitle>

              <CourseInfo>
                <div>
                  <Clock size={16} />
                  <span>{course.duration}</span>
                </div>
                <div>
                  <Users size={16} />
                  <span>{course.students} alunos</span>
                </div>
                <div>
                  <Star size={16} />
                  <span>{course.rating}</span>
                </div>
              </CourseInfo>
              <CourseButton onClick={() => window.location.href = `/curso/${course.id}`}>
                Saiba Mais
              </CourseButton>
            </CourseContent>
          </CourseCard>
        ))}
      </CoursesGrid>
      
      <ViewAllButton onClick={() => window.location.href = '/cursos'}>
        Ver Todos os Cursos
      </ViewAllButton>
    </CoursesSection>
  );
};

export default FeaturedCourses;