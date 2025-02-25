// CoursePresentation.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  CourseContainer,
  CourseHero,
  CourseImage,
  CourseOverlay,
  CourseTitle,
  CourseSubtitle,
  CourseMetaContainer,
  CourseMeta,
  CourseNav,
  NavItem,
  CourseContent,
  CourseDescription,
  CourseModulesContainer,
  ModuleCard,
  ModuleHeader,
  ModuleTitle,
  ModuleContent,
  ModuleLessons,
  LessonItem,
  InstructorSection,
  InstructorCard,
  InstructorImage,
  InstructorInfo,
  InstructorName,
  InstructorBio,
  EnrollButton,
  PriceTag,
  TestimonialsSection,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
  RelatedCoursesSection,
  RelatedCourseCard,
  RelatedCourseImage,
  RelatedCourseInfo,
  RelatedCourseTitle,
  RelatedCourseCategory,
  FAQSection,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  CallToAction
} from '../styles/CoursePresentation';

// Types
interface Module {
  id: number;
  title: string;
  lessons: string[];
}

interface Course {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  lessons: number;
  level: string;
  price: string;
  priceInstallment: string;
  image: string;
  description: string;
  modules: Module[];
  category: string;
}

interface Instructor {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

interface RelatedCourse {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const CoursePresentation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const courseId = Number(id);
  const [activeTab, setActiveTab] = useState<string>("descricao");
  const [openModule, setOpenModule] = useState<number | null>(1);
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Simulação de dados - normalmente seriam carregados de uma API
  const allCourses: Course[] = [
    {
      id: 1,
      title: "Desenvolvimento Web Full Stack",
      subtitle: "Torne-se um desenvolvedor completo em menos de 6 meses",
      duration: "180 horas",
      lessons: 120,
      level: "Intermediário",
      price: "R$ 1.997,00",
      priceInstallment: "12x de R$ 199,70",
      image: "/images/course-fullstack.jpg",
      description: `
        Este curso completo de Desenvolvimento Web Full Stack vai te transformar em um profissional 
        pronto para o mercado. Você aprenderá desde os fundamentos de HTML, CSS e JavaScript até 
        as tecnologias mais avançadas como React, Node.js, TypeScript e bancos de dados SQL e NoSQL.
        
        Durante o curso, você desenvolverá projetos práticos e construirá um portfólio impressionante 
        que demonstrará suas habilidades para potenciais empregadores. Nossos instrutores são 
        profissionais experientes que trabalham nas melhores empresas de tecnologia do país.
      `,
      category: "Tecnologia",
      modules: [
        {
          id: 1,
          title: "Fundamentos de Desenvolvimento Web",
          lessons: [
            "Introdução ao HTML5",
            "CSS3 e Design Responsivo",
            "JavaScript Básico",
            "Git e GitHub"
          ]
        },
        {
          id: 2,
          title: "Frontend Avançado",
          lessons: [
            "React Fundamentos",
            "Estado e Props",
            "Hooks e Context API",
            "TypeScript com React"
          ]
        },
        {
          id: 3,
          title: "Backend e APIs",
          lessons: [
            "Node.js e Express",
            "Bancos de Dados SQL",
            "MongoDB e NoSQL",
            "Autenticação e Segurança"
          ]
        },
        {
          id: 4,
          title: "Projeto Final e Deploy",
          lessons: [
            "Desenvolvimento de Projeto Fullstack",
            "Deploy e Infraestrutura",
            "Performance e Otimização",
            "Preparação para o Mercado"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Marketing Digital Completo",
      subtitle: "Domine as estratégias de marketing digital mais eficazes",
      duration: "120 horas",
      lessons: 80,
      level: "Iniciante a Intermediário",
      price: "R$ 997,00",
      priceInstallment: "10x de R$ 99,70",
      image: "/curso-marketing.jpg",
      description: `
        O curso de Marketing Digital Completo oferece uma abordagem prática e abrangente para 
        dominar as principais estratégias de marketing online. Você aprenderá como criar campanhas 
        eficazes, otimizar sua presença digital e aumentar suas conversões.

        Este curso é ideal para empreendedores, profissionais de marketing e qualquer pessoa 
        que deseje aprimorar suas habilidades no ambiente digital. Com exemplos práticos e estudos 
        de caso reais, você estará pronto para aplicar o conhecimento imediatamente.
      `,
      category: "Marketing",
      modules: [
        {
          id: 1,
          title: "Fundamentos de Marketing Digital",
          lessons: [
            "Introdução ao Marketing Digital",
            "Comportamento do Consumidor Online",
            "Planejamento de Marketing Digital",
            "Análise de Mercado e Concorrência"
          ]
        },
        {
          id: 2,
          title: "Estratégias de Conteúdo",
          lessons: [
            "Content Marketing",
            "Copywriting para Web",
            "SEO (Otimização para Motores de Busca)",
            "Marketing de Conteúdo nas Redes Sociais"
          ]
        },
        {
          id: 3,
          title: "Marketing em Mídias Sociais",
          lessons: [
            "Estratégias para Facebook e Instagram",
            "Marketing no LinkedIn",
            "YouTube e Marketing de Vídeo",
            "TikTok e Plataformas Emergentes"
          ]
        },
        {
          id: 4,
          title: "Publicidade Digital e Analytics",
          lessons: [
            "Google Ads e Facebook Ads",
            "Email Marketing",
            "Google Analytics",
            "Métricas e KPIs de Marketing Digital"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Design UI/UX",
      subtitle: "Crie interfaces intuitivas e experiências memoráveis",
      duration: "160 horas",
      lessons: 90,
      level: "Intermediário",
      price: "R$ 1.197,00",
      priceInstallment: "12x de R$ 99,75",
      image: "/curso-design.jpg",
      description: `
        O curso de Design UI/UX oferece uma formação completa para criar interfaces e experiências 
        de usuário excepcionais. Você aprenderá metodologias de design centrado no usuário, 
        ferramentas de prototipagem e princípios de design visual.

        Este curso combina teoria e prática, permitindo que você construa um portfólio sólido de projetos 
        de UI/UX. Nossos instrutores são designers experientes que trabalham em grandes empresas e startups.
      `,
      category: "Design",
      modules: [
        {
          id: 1,
          title: "Fundamentos de UX Design",
          lessons: [
            "Introdução ao Design Centrado no Usuário",
            "Pesquisa com Usuários",
            "Personas e Jornadas do Usuário",
            "Arquitetura de Informação"
          ]
        },
        {
          id: 2,
          title: "Princípios de UI Design",
          lessons: [
            "Fundamentos de Design Visual",
            "Tipografia e Cores",
            "Layout e Grid Systems",
            "Componentes de Interface"
          ]
        },
        {
          id: 3,
          title: "Ferramentas e Prototipagem",
          lessons: [
            "Figma Avançado",
            "Adobe XD",
            "Prototipagem Interativa",
            "Design Systems"
          ]
        },
        {
          id: 4,
          title: "Projetos Práticos e Portfolio",
          lessons: [
            "Redesign de Aplicativo",
            "Projeto de Website Responsivo",
            "Testes de Usabilidade",
            "Montagem de Portfolio Profissional"
          ]
        }
      ]
    },
    // Adicione mais cursos conforme necessário...
  ];

  // Simulação de instrutores para cada curso
  const instructors: { [key: number]: Instructor } = {
    1: {
      id: 1,
      name: "Mariana Silva",
      role: "Desenvolvedora Full Stack Sênior",
      bio: "Mariana tem mais de 10 anos de experiência em desenvolvimento web e trabalhou em projetos para grandes empresas como Google e Microsoft. Ela é especialista em React, Node.js e TypeScript.",
      image: "/images/instructor-mariana.jpg"
    },
    2: {
      id: 2,
      name: "Ricardo Oliveira",
      role: "Especialista em Marketing Digital",
      bio: "Ricardo é consultor de Marketing Digital com mais de 8 anos de experiência. Já gerenciou campanhas para grandes marcas nacionais e internacionais, com resultados expressivos em conversão e ROI.",
      image: "/images/instructor-ricardo.jpg"
    },
    3: {
      id: 3,
      name: "Juliana Mendes",
      role: "Designer UX/UI Sênior",
      bio: "Juliana trabalha com design de interfaces há 12 anos e liderou equipes de design em startups e grandes empresas de tecnologia. Especialista em metodologias ágeis e design thinking.",
      image: "/images/instructor-juliana.jpg"
    },
    // Adicione mais instrutores conforme necessário...
  };

  // Depoimentos genéricos que podem ser usados para todos os cursos
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Este curso transformou minha vida! Em poucos meses, consegui meu primeiro emprego na área, triplicando meu salário anterior.",
      author: "Carlos Mendes",
      role: "Ex-aluno"
    },
    {
      id: 2,
      text: "Conteúdo completo e didático. Os projetos práticos me ajudaram a construir um portfólio incrível que impressionou os recrutadores.",
      author: "Ana Luiza",
      role: "Ex-aluna"
    }
  ];

  // FAQs genéricas para todos os cursos
  const faqs: FAQ[] = [
    {
      id: 1,
      question: "Preciso ter conhecimento prévio para fazer o curso?",
      answer: "Não é necessário conhecimento prévio, mas familiaridade com computadores e interesse na área são recomendados. O curso começa do básico e avança gradualmente."
    },
    {
      id: 2,
      question: "Qual é a carga horária semanal recomendada?",
      answer: "Recomendamos dedicar pelo menos 6-8 horas por semana para obter o melhor aproveitamento do curso. Isso inclui aulas, exercícios e projetos práticos."
    },
    {
      id: 3,
      question: "O certificado é reconhecido pelo mercado?",
      answer: "Sim! Nosso certificado é reconhecido pelas principais empresas e pode ser incluído no seu currículo e perfil do LinkedIn."
    }
  ];

  // Função para obter cursos relacionados com base na categoria do curso atual
  const getRelatedCourses = (currentCourse: Course): RelatedCourse[] => {
    return allCourses
      .filter(c => c.id !== currentCourse.id && c.category === currentCourse.category)
      .slice(0, 3)
      .map(c => ({
        id: c.id,
        title: c.title,
        category: c.category,
        image: c.image
      }));
  };

  useEffect(() => {
    // Simulando uma chamada à API para buscar dados do curso
    setLoading(true);
    
    // Encontre o curso pelo ID
    const foundCourse = allCourses.find(c => c.id === courseId);
    
    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      // Fallback para o primeiro curso se o ID não for encontrado
      setCourse(allCourses[0]);
      console.warn(`Curso com ID ${courseId} não encontrado. Exibindo curso padrão.`);
    }
    
    setLoading(false);
  }, [courseId]);

  const toggleModule = (moduleId: number) => {
    if (openModule === moduleId) {
      setOpenModule(null);
    } else {
      setOpenModule(moduleId);
    }
  };

  if (loading || !course) {
    return (
      <CourseContainer>
        <div style={{ padding: '40px', textAlign: 'center' }}>Carregando...</div>
      </CourseContainer>
    );
  }

  // Obter o instrutor para este curso
  const instructor = instructors[courseId] || instructors[1]; // Fallback para o primeiro instrutor
  
  // Obter cursos relacionados
  const relatedCourses = getRelatedCourses(course);

  return (
    <CourseContainer>
      <CourseHero>
        <CourseImage src={course.image} alt={course.title} />
        <CourseOverlay>
          <CourseSubtitle>{course.subtitle}</CourseSubtitle>
          <CourseTitle>{course.title}</CourseTitle>
        </CourseOverlay>
      </CourseHero>

      <CourseMetaContainer>
        <CourseMeta>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.2 16.2L11 13V7H12.5V12.2L17 14.9L16.2 16.2Z" fill="currentColor"/>
          </svg>
          Duração: {course.duration}
        </CourseMeta>
        
        <CourseMeta>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
          </svg>
          {course.lessons} Aulas
        </CourseMeta>
        
        <CourseMeta>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" fill="currentColor"/>
          </svg>
          Nível: {course.level}
        </CourseMeta>
      </CourseMetaContainer>

      <CourseNav>
        <NavItem 
          active={activeTab === "descricao"} 
          onClick={() => setActiveTab("descricao")}
        >
          Descrição
        </NavItem>
        <NavItem 
          active={activeTab === "conteudo"} 
          onClick={() => setActiveTab("conteudo")}
        >
          Conteúdo
        </NavItem>
        <NavItem 
          active={activeTab === "instrutor"} 
          onClick={() => setActiveTab("instrutor")}
        >
          Instrutor
        </NavItem>
        <NavItem 
          active={activeTab === "avaliacoes"} 
          onClick={() => setActiveTab("avaliacoes")}
        >
          Avaliações
        </NavItem>
        <NavItem 
          active={activeTab === "faq"} 
          onClick={() => setActiveTab("faq")}
        >
          FAQ
        </NavItem>
      </CourseNav>

      <CourseContent>
        {activeTab === "descricao" && (
          <>
            <CourseDescription>
              {course.description}
            </CourseDescription>
            
            <PriceTag>
              <div className="price-main">{course.price}</div>
              <div className="price-installment">ou {course.priceInstallment}</div>
            </PriceTag>
            
            <EnrollButton>
              MATRICULE-SE AGORA
            </EnrollButton>
          </>
        )}

        {activeTab === "conteudo" && (
          <CourseModulesContainer>
            {course.modules.map((module) => (
              <ModuleCard key={module.id}>
                <ModuleHeader onClick={() => toggleModule(module.id)}>
                  <ModuleTitle>{module.title}</ModuleTitle>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ 
                      transform: openModule === module.id ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <path d="M7 10L12 15L17 10H7Z" fill="currentColor"/>
                  </svg>
                </ModuleHeader>
                
                {openModule === module.id && (
                  <ModuleContent>
                    <ModuleLessons>
                      {module.lessons.map((lesson, index) => (
                        <LessonItem key={index}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20C16.4 20 20 16.4 20 12C20 7.6 16.4 4 12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20ZM12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2ZM16 16.5L14.8 14.8L12.5 16.3V9H11V17.8L14.1 15.8L15.8 18L16 16.5Z" fill="currentColor"/>
                          </svg>
                          {lesson}
                        </LessonItem>
                      ))}
                    </ModuleLessons>
                  </ModuleContent>
                )}
              </ModuleCard>
            ))}
          </CourseModulesContainer>
        )}

        {activeTab === "instrutor" && (
          <InstructorSection>
            <InstructorCard>
              <InstructorImage src={instructor.image} alt={instructor.name} />
              <InstructorInfo>
                <InstructorName>{instructor.name}</InstructorName>
                <div className="instructor-role">{instructor.role}</div>
                <InstructorBio>{instructor.bio}</InstructorBio>
              </InstructorInfo>
            </InstructorCard>
          </InstructorSection>
        )}

        {activeTab === "avaliacoes" && (
          <TestimonialsSection>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id}>
                <TestimonialText>{testimonial.text}</TestimonialText>
                <TestimonialAuthor>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialsSection>
        )}

        {activeTab === "faq" && (
          <FAQSection>
            {faqs.map((faq) => (
              <FAQItem key={faq.id}>
                <FAQQuestion>{faq.question}</FAQQuestion>
                <FAQAnswer>{faq.answer}</FAQAnswer>
              </FAQItem>
            ))}
          </FAQSection>
        )}
      </CourseContent>

      <RelatedCoursesSection>
        <h2>Cursos Relacionados</h2>
        <div className="related-grid">
          {relatedCourses.map((relatedCourse) => (
            <RelatedCourseCard key={relatedCourse.id}>
              <RelatedCourseImage src={relatedCourse.image} alt={relatedCourse.title} />
              <RelatedCourseInfo>
                <RelatedCourseCategory>{relatedCourse.category}</RelatedCourseCategory>
                <RelatedCourseTitle>{relatedCourse.title}</RelatedCourseTitle>
              </RelatedCourseInfo>
            </RelatedCourseCard>
          ))}
        </div>
      </RelatedCoursesSection>

      <CallToAction>
        <h2>Comece sua carreira em {course.category.toLowerCase()} hoje mesmo!</h2>
        <p>Mais de 2.000 alunos já transformaram suas vidas através dos nossos cursos.</p>
        <EnrollButton>MATRICULE-SE AGORA</EnrollButton>
      </CallToAction>
    </CourseContainer>
  );
};

export default CoursePresentation;