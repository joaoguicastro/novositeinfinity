// components/FeaturedCourses.tsx
import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
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
  CoursePrice,
  CourseButton
} from '../styles/CoursesStyles';

interface Course {
  id: number;
  title: string;
  category: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  price: number;
  installments: number;
}

const FeaturedCourses: React.FC = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "Desenvolvimento Web Full Stack",
      category: "Tecnologia",
      image: "/path/to/web-dev-image.jpg",
      duration: "6 meses",
      students: 1500,
      rating: 4.8,
      price: 1997,
      installments: 12
    },
    {
      id: 2,
      title: "Marketing Digital Completo",
      category: "Marketing",
      image: "/path/to/marketing-image.jpg",
      duration: "4 meses",
      students: 1200,
      rating: 4.7,
      price: 1497,
      installments: 12
    },
    {
      id: 3,
      title: "Gestão de Projetos",
      category: "Negócios",
      image: "/path/to/management-image.jpg",
      duration: "3 meses",
      students: 980,
      rating: 4.9,
      price: 1297,
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

              <CoursePrice>
                <div>
                  <div className="price">R$ {course.price.toLocaleString()}</div>
                  <div className="installments">
                    ou {course.installments}x de R$ {(course.price / course.installments).toFixed(2)}
                  </div>
                </div>
              </CoursePrice>

              <CourseButton onClick={() => window.location.href = `/curso/${course.id}`}>
                Saiba Mais
              </CourseButton>
            </CourseContent>
          </CourseCard>
        ))}
      </CoursesGrid>
    </CoursesSection>
  );
};

export default FeaturedCourses;