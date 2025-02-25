import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Clock, Users, BookOpen } from 'lucide-react';
import informaticaprofissionalizante from '../assets/cursos/informaticaprof.jpg'
import desenvolvedroFullStack from '../assets/cursos/desenvolvedorfullstack.jpg'
import desenvolvimentoGames from '../assets/cursos/desenvolvedordegames.webp'
import edicaoVideo from '../assets/cursos/edicaodevideo.jpg'
import designerGrafico from '../assets/cursos/designgrafico.png'
import marketingDigital from '../assets/cursos/marketingdigital.jpg'
import empreendedorismo from '../assets/cursos/empreendedorismo.png'
import auxadm from '../assets/cursos/auxadm.png'
import atendenteFarmacia from '../assets/cursos/atendentefarmacia.jpg'
import aph from '../assets/cursos/atendenteprehospitalar.png' 
import heroimirim from '../assets/cursos/bombeiromirim.avif'
import auxvet from '../assets/cursos/auxiliarvet.jpg' 
import coletaSangue from '../assets/cursos/coletasangue.webp'
import agentecomunitario from '../assets/cursos/agentecomunitario.jpg'
import agenteendemias from '../assets/cursos/agenteendemias.jpg'
import agenteportuario from '../assets/cursos/agenteportuario.jpg' 
import auxnecropsia from '../assets/cursos/auxiliarnecropsia.jpg' 
import auxRH from '../assets/cursos/auxiliarrh.jpg' 
import auxSala from '../assets/cursos/auxiliarsala.jpg' 
import saudebucal from '../assets/cursos/saudebucao.webp'
import auxSegurancaTrabalho from '../assets/cursos/auxiliarseguranca.jpeg' 
import auxLaboratorio from '../assets/cursos/auxiliardelaboratorio.jpg'
import cuidadorIdosos from '../assets/cursos/cuidadordeidosos.png'
import defesaCivil from '../assets/cursos/defesacivil.jpeg'
import fiscalMeioAmbiente from '../assets/cursos/ficaldomeioambiente.png'
import gestaoHospitalar from '../assets/cursos/gestaohospitalar.jpg' 
import guardamunicipal from '../assets/cursos/guardamunicipal.jpg'

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

  const categories = ['Todos', 'Tecnologia', 'Negócios', 'Saúde'];

  // Lista completa de 28 cursos
  const allCourses = [
    {
      id: 1,
      title: "Informatica Profissionalizante",
      category: "Tecnologia",
      image: informaticaprofissionalizante,
      duration: "6 meses",
      students: "150",
      modules: "12",
      price: "1.297,00",
      installments: "12x de R$ 108,08"
    },
    {
      id: 2,
      title: "Desenvolvimento Full-Stack",
      category: "Tecnologia",
      image: desenvolvedroFullStack,
      duration: "3 meses",
      students: "230",
      modules: "8",
      price: "997,00",
      installments: "10x de R$ 99,70"
    },
    {
      id: 3,
      title: "Desenvolvimento de Games",
      category: "Tecnologia",
      image: desenvolvimentoGames,
      duration: "4 meses",
      students: "120",
      modules: "10",
      price: "1.197,00",
      installments: "12x de R$ 99,75"
    },
    {
      id: 4,
      title: "Edicao de Video",
      category: "Tecnologia",
      image: edicaoVideo,
      duration: "3 meses",
      students: "180",
      modules: "8",
      price: "897,00",
      installments: "10x de R$ 89,70"
    },
    {
      id: 5,
      title: "Designer Grafico",
      category: "Tecnologia",
      image: designerGrafico,
      duration: "4 meses",
      students: "200",
      modules: "10",
      price: "997,00",
      installments: "10x de R$ 99,70"
    },
    {
      id: 6,
      title: "Marketing Digital",
      category: "Tecnologia",
      image: marketingDigital,
      duration: "5 meses",
      students: "130",
      modules: "12",
      price: "1.497,00",
      installments: "12x de R$ 124,75"
    },
    {
      id: 7,
      title: "Empreendedorismo",
      category: "Negócios",
      image: empreendedorismo,
      duration: "2 meses",
      students: "90",
      modules: "6",
      price: "797,00",
      installments: "8x de R$ 99,63"
    },
    {
      id: 8,
      title: "Auxiliar Administrativo",
      category: "Negócios",
      image: auxadm,
      duration: "4 meses",
      students: "160",
      modules: "10",
      price: "1.097,00",
      installments: "10x de R$ 109,70"
    },
    {
      id: 9,
      title: "Atendente de Farmacia",
      category: "Saúde",
      image: atendenteFarmacia,
      duration: "3 meses",
      students: "210",
      modules: "8",
      price: "897,00",
      installments: "10x de R$ 89,70"
    },
    {
      id: 10,
      title: "Atendimento Pre-Hospitalar",
      category: "Saúde",
      image: aph,
      duration: "6 meses",
      students: "140",
      modules: "24",
      price: "1.397,00",
      installments: "12x de R$ 116,42"
    },
    {
      id: 11,
      title: "Heroi Mirim",
      category: "Saúde",
      image: heroimirim,
      duration: "5 meses",
      students: "110",
      modules: "12",
      price: "1.297,00",
      installments: "12x de R$ 108,08"
    },
    {
      id: 12,
      title: "Auxiliar Veterinario",
      category: "Saúde",
      image: auxvet,
      duration: "3 meses",
      students: "95",
      modules: "8",
      price: "997,00",
      installments: "10x de R$ 99,70"
    },
    {
      id: 13,
      title: "Coleta de Sangue",
      category: "Saúde",
      image: coletaSangue,
      duration: "3 meses",
      students: "170",
      modules: "9",
      price: "1.097,00",
      installments: "10x de R$ 109,70"
    },
    {
      id: 14,
      title: "Agente Comunitario",
      category: "Saúde",
      image: agentecomunitario,
      duration: "4 meses",
      students: "85",
      modules: "10",
      price: "1.197,00",
      installments: "12x de R$ 99,75"
    },
    {
      id: 15,
      title: "Agente de Endemias",
      category: "Saúde",
      image: agenteendemias,
      duration: "2 meses",
      students: "220",
      modules: "6",
      price: "797,00",
      installments: "8x de R$ 99,63"
    },
    {
      id: 16,
      title: "Agente Portuario",
      category: "Negócios",
      image: agenteportuario,
      duration: "4 meses",
      students: "95",
      modules: "10",
      price: "1.497,00",
      installments: "12x de R$ 124,75"
    },
    {
      id: 17,
      title: "Auxiliar de Necropsia",
      category: "Saúde",
      image: auxnecropsia,
      duration: "3 meses",
      students: "130",
      modules: "8",
      price: "1.197,00",
      installments: "12x de R$ 99,75"
    },
    {
      id: 18,
      title: "Auxiliar de RH",
      category: "Negócios",
      image: auxRH,
      duration: "5 meses",
      students: "75",
      modules: "15",
      price: "1.597,00",
      installments: "12x de R$ 133,08"
    },
    {
      id: 19,
      title: "Auxiliar de Sala",
      category: "Negócios",
      image: auxSala,
      duration: "3 meses",
      students: "180",
      modules: "9",
      price: "997,00",
      installments: "10x de R$ 99,70"
    },
    {
      id: 20,
      title: "Auxiliar de Saúde Bucal",
      category: "Saúde",
      image: saudebucal,
      duration: "4 meses",
      students: "110",
      modules: "10",
      price: "1.097,00",
      installments: "10x de R$ 109,70"
    },
    {
      id: 21,
      title: "Auxiliar de Seguranca do Trabalho",
      category: "Negócios",
      image: auxSegurancaTrabalho,
      duration: "3 meses",
      students: "90",
      modules: "8",
      price: "1.297,00",
      installments: "12x de R$ 108,08"
    },
    {
      id: 22,
      title: "Auxiliar de Laboratorio",
      category: "Saúde",
      image: auxLaboratorio,
      duration: "4 meses",
      students: "85",
      modules: "10",
      price: "1.197,00",
      installments: "12x de R$ 99,75"
    },
    {
      id: 23,
      title: "Cuidador de Idosos",
      category: "Saúde",
      image: cuidadorIdosos,
      duration: "2 meses",
      students: "150",
      modules: "6",
      price: "897,00",
      installments: "10x de R$ 89,70"
    },
    {
      id: 24,
      title: "Defesa Civil",
      category: "Saúde",
      image: defesaCivil,
      duration: "6 meses",
      students: "70",
      modules: "15",
      price: "1.697,00",
      installments: "12x de R$ 141,42"
    },
    {
      id: 25,
      title: "Fiscal do Meio Ambeiente",
      category: "Saúde",
      image: fiscalMeioAmbiente,
      duration: "2 meses",
      students: "120",
      modules: "6",
      price: "697,00",
      installments: "6x de R$ 116,17"
    },
    {
      id: 26,
      title: "Gestao Hospitalar",
      category: "Saúde",
      image: gestaoHospitalar,
      duration: "3 meses",
      students: "190",
      modules: "8",
      price: "997,00",
      installments: "10x de R$ 99,70"
    },
    {
      id: 27,
      title: "Guarda Municipal",
      category: "Saúde",
      image: guardamunicipal,
      duration: "5 meses",
      students: "65",
      modules: "12",
      price: "1.397,00",
      installments: "12x de R$ 116,42"
    },
  ];

  const handleLoadMore = () => {
    // Mostra todos os 28 cursos quando clicar no botão
    setVisibleCourses(27);
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