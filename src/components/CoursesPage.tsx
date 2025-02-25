import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
} from '../styles/CoursesStyles'

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [visibleCourses, setVisibleCourses] = useState(15);
  const navigate = useNavigate(); // Hook para navegação

  const categories = ['Todos', 'Tecnologia', 'Negócios', 'Saude'];

  // Lista completa de 28 cursos
  const allCourses = [
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
    {
      id: 2,
      title: "Marketing Digital Completo",
      category: "Marketing",
      image: "/curso-marketing.jpg",
      duration: "3 meses",
      students: "230",
      modules: "8",
      price: "997,00",
      installments: "10x de R$ 99,70"
    },
    {
      id: 3,
      title: "Design UI/UX",
      category: "Design",
      image: "/curso-design.jpg",
      duration: "4 meses",
      students: "120",
      modules: "10",
      price: "1.197,00",
      installments: "12x de R$ 99,75"
    },
    {
      id: 4,
      title: "Gestão de Projetos",
      category: "Negócios",
      image: "/curso-gestao.jpg",
      duration: "3 meses",
      students: "180",
      modules: "8",
      price: "897,00",
      installments: "10x de R$ 89,70"
    },
    {
      id: 5,
      title: "Programação em Python",
      category: "Tecnologia",
      image: "/curso-python.jpg",
      duration: "4 meses",
      students: "200",
      modules: "10",
      price: "997,00",
      installments: "10x de R$ 99,70"
    },
    {
      id: 6,
      title: "Análise de Dados",
      category: "Tecnologia",
      image: "/curso-dados.jpg",
      duration: "5 meses",
      students: "130",
      modules: "12",
      price: "1.497,00",
      installments: "12x de R$ 124,75"
    },
    {
      id: 7,
      title: "Contabilidade para Pequenos Negócios",
      category: "Negócios",
      image: "/curso-contabilidade.jpg",
      duration: "2 meses",
      students: "90",
      modules: "6",
      price: "797,00",
      installments: "8x de R$ 99,63"
    },
    {
      id: 8,
      title: "Design Gráfico Profissional",
      category: "Design",
      image: "/curso-grafico.jpg",
      duration: "4 meses",
      students: "160",
      modules: "10",
      price: "1.097,00",
      installments: "10x de R$ 109,70"
    },
    {
      id: 9,
      title: "Social Media e Gestão de Redes Sociais",
      category: "Marketing",
      image: "/curso-social.jpg",
      duration: "3 meses",
      students: "210",
      modules: "8",
      price: "897,00",
      installments: "10x de R$ 89,70"
    },
    {
      id: 10,
      title: "Inglês para Negócios",
      category: "Educação",
      image: "/curso-ingles.jpg",
      duration: "6 meses",
      students: "140",
      modules: "24",
      price: "1.397,00",
      installments: "12x de R$ 116,42"
    },
    {
      id: 11,
      title: "Desenvolvimento Mobile com React Native",
      category: "Tecnologia",
      image: "/curso-mobile.jpg",
      duration: "5 meses",
      students: "110",
      modules: "12",
      price: "1.297,00",
      installments: "12x de R$ 108,08"
    },
    {
      id: 12,
      title: "Fotografia Profissional",
      category: "Design",
      image: "/curso-fotografia.jpg",
      duration: "3 meses",
      students: "95",
      modules: "8",
      price: "997,00",
      installments: "10x de R$ 99,70"
    },
    {
      id: 13,
      title: "E-commerce e Vendas Online",
      category: "Negócios",
      image: "/curso-ecommerce.jpg",
      duration: "3 meses",
      students: "170",
      modules: "9",
      price: "1.097,00",
      installments: "10x de R$ 109,70"
    },
    {
      id: 14,
      title: "Edição de Vídeo Profissional",
      category: "Design",
      image: "/curso-video.jpg",
      duration: "4 meses",
      students: "85",
      modules: "10",
      price: "1.197,00",
      installments: "12x de R$ 99,75"
    },
    {
      id: 15,
      title: "Copywriting e Redação Persuasiva",
      category: "Marketing",
      image: "/curso-copy.jpg",
      duration: "2 meses",
      students: "220",
      modules: "6",
      price: "797,00",
      installments: "8x de R$ 99,63"
    },
    {
      id: 16,
      title: "Inteligência Artificial Aplicada",
      category: "Tecnologia",
      image: "/curso-ia.jpg",
      duration: "4 meses",
      students: "95",
      modules: "10",
      price: "1.497,00",
      installments: "12x de R$ 124,75"
    },
    {
      id: 17,
      title: "Liderança e Gestão de Equipes",
      category: "Negócios",
      image: "/curso-lideranca.jpg",
      duration: "3 meses",
      students: "130",
      modules: "8",
      price: "1.197,00",
      installments: "12x de R$ 99,75"
    },
    {
      id: 18,
      title: "Produção Musical",
      category: "Design",
      image: "/curso-musica.jpg",
      duration: "5 meses",
      students: "75",
      modules: "15",
      price: "1.597,00",
      installments: "12x de R$ 133,08"
    },
    {
      id: 19,
      title: "SEO e Marketing de Conteúdo",
      category: "Marketing",
      image: "/curso-seo.jpg",
      duration: "3 meses",
      students: "180",
      modules: "9",
      price: "997,00",
      installments: "10x de R$ 99,70"
    },
    {
      id: 20,
      title: "Administração Financeira",
      category: "Negócios",
      image: "/curso-financas.jpg",
      duration: "4 meses",
      students: "110",
      modules: "10",
      price: "1.097,00",
      installments: "10x de R$ 109,70"
    },
    {
      id: 21,
      title: "Cibersegurança Básica",
      category: "Tecnologia",
      image: "/curso-seguranca.jpg",
      duration: "3 meses",
      students: "90",
      modules: "8",
      price: "1.297,00",
      installments: "12x de R$ 108,08"
    },
    {
      id: 22,
      title: "Ilustração Digital",
      category: "Design",
      image: "/curso-ilustracao.jpg",
      duration: "4 meses",
      students: "85",
      modules: "10",
      price: "1.197,00",
      installments: "12x de R$ 99,75"
    },
    {
      id: 23,
      title: "Técnicas de Vendas Avançadas",
      category: "Negócios",
      image: "/curso-vendas.jpg",
      duration: "2 meses",
      students: "150",
      modules: "6",
      price: "897,00",
      installments: "10x de R$ 89,70"
    },
    {
      id: 24,
      title: "Desenvolvimento de Games",
      category: "Tecnologia",
      image: "/curso-games.jpg",
      duration: "6 meses",
      students: "70",
      modules: "15",
      price: "1.697,00",
      installments: "12x de R$ 141,42"
    },
    {
      id: 25,
      title: "Primeiros Socorros e Saúde Básica",
      category: "Saúde",
      image: "/curso-primeirossocorros.jpg",
      duration: "2 meses",
      students: "120",
      modules: "6",
      price: "697,00",
      installments: "6x de R$ 116,17"
    },
    {
      id: 26,
      title: "Gestão de Mídias Sociais",
      category: "Marketing",
      image: "/curso-midias.jpg",
      duration: "3 meses",
      students: "190",
      modules: "8",
      price: "997,00",
      installments: "10x de R$ 99,70"
    },
    {
      id: 27,
      title: "Modelagem 3D",
      category: "Design",
      image: "/curso-3d.jpg",
      duration: "5 meses",
      students: "65",
      modules: "12",
      price: "1.397,00",
      installments: "12x de R$ 116,42"
    },
    {
      id: 28,
      title: "Excel Avançado para Negócios",
      category: "Negócios",
      image: "/curso-excel.jpg",
      duration: "3 meses",
      students: "200",
      modules: "8",
      price: "897,00",
      installments: "10x de R$ 89,70"
    },
  ];

  const handleLoadMore = () => {
    // Mostra todos os 28 cursos quando clicar no botão
    setVisibleCourses(28);
  };

  // Função para navegar para a página de demonstração do curso
  const handleCourseClick = (courseId: number) => {
    navigate(`/curso/${courseId}`); // Navega para a página de detalhes do curso
  };

  // Filtra os cursos baseado na pesquisa e categoria
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Limita o número de cursos visíveis
  const displayedCourses = filteredCourses.slice(0, visibleCourses);
  
  // Verifica se há mais cursos para mostrar
  const hasMoreCoursesToShow = filteredCourses.length > displayedCourses.length;



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
          {displayedCourses.map((course) => (
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
                <CourseButton onClick={() => handleCourseClick(course.id)}>
                  Saiba Mais
                </CourseButton>
              </CourseContent>
            </CourseCard>
          ))}
        </CoursesGrid>

        {hasMoreCoursesToShow && (
          <LoadMoreButton onClick={handleLoadMore}>Ver Mais Cursos</LoadMoreButton>
        )}
      </CoursesSection>
    </PageContainer>
  );
  
};


export default CoursesPage;