/* eslint-disable @typescript-eslint/no-unused-vars */
// CoursePresentation.tsx
import React, { useState } from 'react';
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Module {
  id: number;
  title: string;
  lessons: string[];
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

interface CourseProps {
  id: string;
}

const CoursePresentation: React.FC<CourseProps> = ({ id }) => {
  // Simulação de dados - normalmente seriam carregados de uma API
  const course = {
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
  };

  const instructor: Instructor = {
    id: 1,
    name: "Mariana Silva",
    role: "Desenvolvedora Full Stack Sênior",
    bio: "Mariana tem mais de 10 anos de experiência em desenvolvimento web e trabalhou em projetos para grandes empresas como Google e Microsoft. Ela é especialista em React, Node.js e TypeScript.",
    image: "/images/instructor-mariana.jpg"
  };

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Este curso transformou minha vida! Em 6 meses, consegui meu primeiro emprego como desenvolvedor, triplicando meu salário anterior.",
      author: "Carlos Mendes",
      role: "Desenvolvedor Frontend"
    },
    {
      id: 2,
      text: "Conteúdo completo e didático. Os projetos práticos me ajudaram a construir um portfólio incrível que impressionou os recrutadores.",
      author: "Ana Luiza",
      role: "Desenvolvedora Full Stack"
    }
  ];

  const relatedCourses: RelatedCourse[] = [
    {
      id: 1,
      title: "UX/UI Design Avançado",
      category: "Design",
      image: "/images/course-uxui.jpg"
    },
    {
      id: 2,
      title: "Desenvolvimento Mobile com React Native",
      category: "Mobile",
      image: "/images/course-reactnative.jpg"
    },
    {
      id: 3,
      title: "DevOps e CI/CD",
      category: "Infraestrutura",
      image: "/images/course-devops.jpg"
    }
  ];

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "Preciso ter conhecimento prévio para fazer o curso?",
      answer: "Não é necessário conhecimento prévio em programação, mas familiaridade com computadores e interesse em tecnologia são recomendados. O curso começa do básico e avança gradualmente."
    },
    {
      id: 2,
      question: "Qual é a carga horária semanal recomendada?",
      answer: "Recomendamos dedicar pelo menos 15 horas por semana para obter o melhor aproveitamento do curso. Isso inclui aulas, exercícios e projetos práticos."
    },
    {
      id: 3,
      question: "O certificado é reconhecido pelo mercado?",
      answer: "Sim! Nosso certificado é reconhecido pelas principais empresas de tecnologia e pode ser incluído no seu currículo e perfil do LinkedIn."
    }
  ];

  const [activeTab, setActiveTab] = useState<string>("descricao");
  const [openModule, setOpenModule] = useState<number | null>(1);

  const toggleModule = (moduleId: number) => {
    if (openModule === moduleId) {
      setOpenModule(null);
    } else {
      setOpenModule(moduleId);
    }
  };

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
          {relatedCourses.map((course) => (
            <RelatedCourseCard key={course.id}>
              <RelatedCourseImage src={course.image} alt={course.title} />
              <RelatedCourseInfo>
                <RelatedCourseCategory>{course.category}</RelatedCourseCategory>
                <RelatedCourseTitle>{course.title}</RelatedCourseTitle>
              </RelatedCourseInfo>
            </RelatedCourseCard>
          ))}
        </div>
      </RelatedCoursesSection>

      <CallToAction>
        <h2>Comece sua carreira em desenvolvimento web hoje mesmo!</h2>
        <p>Mais de 2.000 alunos já transformaram suas vidas através deste curso.</p>
        <EnrollButton>MATRICULE-SE AGORA</EnrollButton>
      </CallToAction>
    </CourseContainer>
  );
};

export default CoursePresentation;