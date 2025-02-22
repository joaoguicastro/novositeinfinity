import React, { useState } from 'react';
import { Search, Clock, Users, BookOpen } from 'lucide-react';
import {
  PageContainer,
  CoursesSection,
  SectionHeader,
  FiltersContainer,
  SearchBar,
  CategoryFilters,
  CategoryButton,
  CoursesGrid,
  LoadMoreButton
} from '../styles/CoursesPageStyles';
import {
  CourseCard,
  CourseImage,
  CourseCategory,
  CourseContent,
  CourseTitle,
  CourseInfo,
  CoursePrice,
  CourseButton
} from '../styles/CoursesStyles';

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Tecnologia', 'Negócios', 'Marketing', 'Design'];

  // Exemplo de dados - substitua pelos seus cursos reais
  const courses = [
    {
      id: 1,
      title: "Desenvolvimento Web Full Stack",
      category: "Tecnologia",
      image: "/curso-web.jpg",
      duration: "6 meses",
      students: "150",
      modules: "12",
      price: "1.297,00",
      installments: "12x de R$ 108,08"
    },
    // Adicione mais cursos aqui
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageContainer>
      <CoursesSection>
        <SectionHeader>
          <h2>
            Nossos <span>Cursos</span>
          </h2>
          <p>
            Explore nossa variedade de cursos profissionalizantes e comece sua
            jornada rumo ao sucesso profissional.
          </p>
        </SectionHeader>

        <FiltersContainer>
          <SearchBar>
            <Search size={20} />
            <input
              type="text"
              placeholder="Buscar cursos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBar>

          <CategoryFilters>
            {categories.map((category) => (
              <CategoryButton
                key={category}
                active={category === selectedCategory}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </CategoryButton>
            ))}
          </CategoryFilters>
        </FiltersContainer>

        <CoursesGrid>
          {filteredCourses.map((course) => (
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
                    <BookOpen size={16} />
                    <span>{course.modules} módulos</span>
                  </div>
                </CourseInfo>
                <CoursePrice>
                  <div>
                    <div className="price">R$ {course.price}</div>
                    <div className="installments">{course.installments}</div>
                  </div>
                </CoursePrice>
                <CourseButton>Saiba Mais</CourseButton>
              </CourseContent>
            </CourseCard>
          ))}
        </CoursesGrid>

        <LoadMoreButton>Carregar Mais Cursos</LoadMoreButton>
      </CoursesSection>
    </PageContainer>
  );
};

export default CoursesPage;