// components/Testimonials.tsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  TestimonialsSection,
  TestimonialsContainer,
  TestimonialsHeader,
  TestimonialCard,
  TestimonialContent,
  TestimonialAuthor,
  AuthorImage,
  AuthorInfo,
  NavigationButtons,
  NavButton,
  TestimonialsSlider
} from '../styles/TestimonialsStyles';
import mariasilva from '../../public/mariasilva.avif' 
import joaosantos from '../../public/homem-de-camisa-verde-com-os-bracos-cruzados_23-2148401380.avif'
import foto from '../../public/pessoa-de-origem-indiana-se-divertindo_23-2150285283.avif'

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  image: string;
  course: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "O curso superou todas as minhas expectativas. A metodologia prática e o suporte dos professores foram fundamentais para minha evolução profissional. Hoje atuo na área e devo muito à formação que recebi.",
      author: "Maria Silva",
      position: "Desenvolvedora Web",
      image: mariasilva,
      course: "Desenvolvimento Web Full Stack"
    },
    {
      id: 2,
      content: "Escolher este curso foi a melhor decisão que tomei para minha carreira. O conteúdo é atualizado e os professores têm muita experiência prática. Consegui minha primeira oportunidade na área logo após a conclusão.",
      author: "João Santos",
      position: "Analista de Marketing Digital",
      image: joaosantos,
      course: "Marketing Digital"
    },
    {
      id: 3,
      content: "A qualidade do ensino é excepcional. Os projetos práticos me deram confiança para atuar no mercado. O networking com outros alunos também foi muito valioso para minha carreira.",
      author: "Ana Oliveira",
      position: "Gestora de Projetos",
      image: foto,
      course: "Gestão de Projetos"
    }
  ];

  return (
    <div id='historias'>
    <TestimonialsSection>
      <TestimonialsContainer>
        <TestimonialsHeader>
          <h2>Histórias de <span>Sucesso</span></h2>
          <p>Conheça alguns dos nossos alunos que transformaram suas carreiras através dos nossos cursos</p>
        </TestimonialsHeader>

        <TestimonialsSlider>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <TestimonialContent>
                {testimonial.content}
              </TestimonialContent>
              <TestimonialAuthor>
                <AuthorImage>
                  <img src={testimonial.image} alt={testimonial.author} />
                </AuthorImage>
                <AuthorInfo>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                  <p>{testimonial.course}</p>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsSlider>

        <NavigationButtons>
          <NavButton>
            <ChevronLeft size={20} />
          </NavButton>
          <NavButton isActive>
            <ChevronRight size={20} />
          </NavButton>
        </NavigationButtons>
      </TestimonialsContainer>
    </TestimonialsSection>'
    </div>
  );
};

export default Testimonials;