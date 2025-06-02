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
import robotica from '../assets/cursos/robotica.jpeg'

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
  price?: string;
  priceInstallment?: string;
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
      "id": 1,
      "title": "Informática Profissionalizante",
      "subtitle": "Domine a informática e amplie suas oportunidades",
      "duration": "8 meses",
      "lessons": 120,
      "level": "Básico a Intermediário",
      "image": informaticaprofissionalizante,
      "description": "Este curso oferece uma formação completa em informática, desde o básico até aplicações avançadas. Você aprenderá sobre sistemas operacionais, pacote Office, internet, segurança digital e introdução à Designer Grafico.",
      "category": "Tecnologia",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos de Informática",
          "lessons": [
            "Introdução ao Windows",
            "Pacote Office (Word, Excel, PowerPoint)",
            "Navegação Segura na Internet",
            "Introdução à Segurança Digital"
          ]
        },
        {
          "id": 2,
          "title": "Aplicações Avançadas",
          "lessons": [
            "Edição de Texto e Planilhas",
            "Criação de Apresentações Profissionais",
            "Banco de Dados Básico",
            "Introdução à Designer Grafico"
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "Desenvolvimento Full-Stack",
      "subtitle": "Aprenda a desenvolver aplicações completas",
      "duration": "8 meses",
      "lessons": 80,
      "level": "Intermediário",
      "image": desenvolvedroFullStack,
      "description": "Este curso ensina as tecnologias essenciais para o desenvolvimento web Full-Stack, incluindo frontend e backend, além de práticas modernas como APIs e bancos de dados.",
      "category": "Tecnologia",
      "modules": [
        {
          "id": 1,
          "title": "Frontend",
          "lessons": [
            "HTML, CSS e JavaScript",
            "React e Componentização",
            "Gestão de Estado com Context API"
          ]
        },
        {
          "id": 2,
          "title": "Backend",
          "lessons": [
            "Node.js e Express",
            "Banco de Dados SQL e NoSQL",
            "Autenticação e Segurança"
          ]
        }
      ]
    },
    {
      "id": 3,
      "title": "Desenvolvimento de Games",
      "subtitle": "Crie seus próprios jogos do zero",
      "duration": "8 meses",
      "lessons": 100,
      "level": "Intermediário",
      "image": desenvolvimentoGames,
      "description": "Aprenda a criar jogos 2D e 3D utilizando ferramentas como Unity e Unreal Engine, além de conceitos fundamentais de programação para jogos.",
      "category": "Tecnologia",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos de Game Design",
          "lessons": [
            "Introdução ao Desenvolvimento de Jogos",
            "Motores de Jogos: Unity e Unreal",
            "Lógica e Algoritmos para Jogos"
          ]
        },
        {
          "id": 2,
          "title": "Programação de Jogos",
          "lessons": [
            "C# para Unity",
            "Física e Animação",
            "Inteligência Artificial para Jogos"
          ]
        }
      ]
    },
    {
      "id": 4,
      "title": "Edição de Vídeo",
      "subtitle": "Crie vídeos profissionais para diversas plataformas",
      "duration": "8 meses",
      "lessons": 75,
      "level": "Iniciante a Intermediário",
      "image": edicaoVideo,
      "description": "Aprenda a editar vídeos utilizando softwares como Adobe Premiere e DaVinci Resolve, explorando técnicas de edição, transições e efeitos especiais.",
      "category": "Tecnologia",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos de Edição",
          "lessons": [
            "Introdução ao Adobe Premiere",
            "Cortes e Transições",
            "Edição de Áudio e Sincronia"
          ]
        },
        {
          "id": 2,
          "title": "Efeitos e Finalização",
          "lessons": [
            "Correção de Cor",
            "Animações e Motion Graphics",
            "Renderização e Exportação"
          ]
        }
      ]
    },
    {
      "id": 5,
      "title": "Design Gráfico",
      "subtitle": "Aprenda a criar designs incríveis",
      "duration": "8 meses",
      "lessons": 90,
      "level": "Intermediário",
      "image": designerGrafico,
      "description": "Desenvolva habilidades essenciais em design gráfico, utilizando ferramentas como Photoshop, Illustrator e CorelDRAW para criar materiais visuais impactantes.",
      "category": "Tecnologia",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos do Design",
          "lessons": [
            "Teoria das Cores e Tipografia",
            "Composição e Layout",
            "Introdução ao Adobe Photoshop"
          ]
        },
        {
          "id": 2,
          "title": "Criação Profissional",
          "lessons": [
            "Edição de Imagens",
            "Design para Redes Sociais",
            "Criação de Logotipos e Identidade Visual"
          ]
        }
      ]
    },
    {
      "id": 6,
      "title": "Marketing Digital",
      "subtitle": "Domine estratégias de marketing online",
      "duration": "8 meses",
      "lessons": 100,
      "level": "Intermediário",
      "image": marketingDigital,
      "description": "Aprenda a criar e gerenciar campanhas de marketing digital, utilizando SEO, redes sociais, anúncios pagos e estratégias de engajamento para alavancar negócios no ambiente online.",
      "category": "Tecnologia",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos do Marketing Digital",
          "lessons": [
            "Introdução ao Marketing Digital",
            "Princípios de SEO e Marketing de Conteúdo",
            "Planejamento de Campanhas Online"
          ]
        },
        {
          "id": 2,
          "title": "Redes Sociais e Tráfego Pago",
          "lessons": [
            "Gestão de Redes Sociais",
            "Anúncios no Google e Facebook Ads",
            "Copywriting para Conversão"
          ]
        },
        {
          "id": 3,
          "title": "Análise e Otimização",
          "lessons": [
            "Métricas e Ferramentas de Análise",
            "Growth Hacking e Estratégias Avançadas",
            "Automação de Marketing e CRM"
          ]
        }
      ]
    },{
      "id": 7,
      "title": "Robótica",
      "subtitle": "Construa e programe robôs do zero",
      "duration": "8 meses",
      "lessons": 120,
      "level": "Intermediário",
      "image": robotica,
      "description": "Explore o mundo da robótica, aprendendo desde a montagem de circuitos até a programação de microcontroladores como Arduino e ESP32. Desenvolva projetos práticos e adquira conhecimentos essenciais para a automação e inteligência artificial.",
      "category": "Tecnologia",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos da Robótica",
          "lessons": [
            "Introdução à Robótica e Automação",
            "Componentes Eletrônicos e Sensores",
            "Primeiros Passos com Arduino"
          ]
        },
        {
          "id": 2,
          "title": "Programação e Controle",
          "lessons": [
            "Lógica de Programação para Robôs",
            "Uso de Motores e Servomecanismos",
            "Projetos Práticos com Arduino e ESP32"
          ]
        },
        {
          "id": 3,
          "title": "Inteligência e Automação",
          "lessons": [
            "Introdução à Inteligência Artificial para Robôs",
            "Automação com Sensores e Internet das Coisas (IoT)",
            "Desenvolvimento de Robôs Autônomos"
          ]
        }
      ]
    },{
      "id": 8,
      "title": "Empreendedorismo",
      "subtitle": "Transforme ideias em negócios de sucesso",
      "duration": "8 meses",
      "lessons": 60,
      "level": "Básico",
      "image": empreendedorismo,
      "description": "Desenvolva habilidades essenciais para empreender, aprendendo sobre planejamento, finanças, marketing e inovação. Crie seu próprio negócio e descubra como transformá-lo em um sucesso no mercado.",
      "category": "Negócios",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos do Empreendedorismo",
          "lessons": [
            "O que é Empreendedorismo?",
            "Perfil do Empreendedor de Sucesso",
            "Identificação de Oportunidades de Negócio"
          ]
        },
        {
          "id": 2,
          "title": "Planejamento e Finanças",
          "lessons": [
            "Modelos de Negócio e Canvas",
            "Gestão Financeira para Pequenos Negócios",
            "Fontes de Investimento e Capital"
          ]
        },
        {
          "id": 3,
          "title": "Marketing e Vendas",
          "lessons": [
            "Estratégias de Marketing para Novos Negócios",
            "Técnicas de Vendas e Negociação",
            "Presença Digital e Posicionamento no Mercado"
          ]
        }
      ]
    },{
      "id": 9,
      "title": "Auxiliar Administrativo",
      "subtitle": "Domine as rotinas administrativas e destaque-se no mercado",
      "duration": "8 meses",
      "lessons": 80,
      "level": "Básico",
      "image": auxadm,
      "description": "Aprenda as principais funções administrativas, incluindo gestão de documentos, atendimento ao cliente, rotinas financeiras e operacionais, desenvolvendo habilidades essenciais para o ambiente corporativo.",
      "category": "Negócios",
      "modules": [
        {
          "id": 1,
          "title": "Introdução à Administração",
          "lessons": [
            "Princípios da Administração",
            "Organização e Planejamento Empresarial",
            "Comunicação Empresarial"
          ]
        },
        {
          "id": 2,
          "title": "Gestão e Processos Administrativos",
          "lessons": [
            "Rotinas Administrativas",
            "Gestão de Documentos e Arquivamento",
            "Atendimento ao Cliente e Relacionamento"
          ]
        },
        {
          "id": 3,
          "title": "Administração Financeira e RH",
          "lessons": [
            "Noções de Gestão Financeira",
            "Contas a Pagar e Receber",
            "Introdução à Gestão de Pessoas"
          ]
        }
      ]
    },{
      "id": 10,
      "title": "Atendente de Farmácia",
      "subtitle": "Aprenda a atuar no setor farmacêutico com excelência",
      "duration": "8 meses",
      "lessons": 70,
      "level": "Básico",
      "image": atendenteFarmacia,
      "description": "Desenvolva habilidades essenciais para atuar como atendente de farmácia, aprendendo sobre medicamentos, atendimento ao cliente, normas sanitárias e gestão de produtos farmacêuticos.",
      "category": "Saúde",
      "modules": [
        {
          "id": 1,
          "title": "Introdução ao Setor Farmacêutico",
          "lessons": [
            "O Papel do Atendente de Farmácia",
            "Ética e Legislação Farmacêutica",
            "Tipos de Medicamentos e Classificações"
          ]
        },
        {
          "id": 2,
          "title": "Atendimento e Gestão de Farmácia",
          "lessons": [
            "Boas Práticas no Atendimento ao Cliente",
            "Receituário e Dispensação de Medicamentos",
            "Controle de Estoque e Armazenamento"
          ]
        },
        {
          "id": 3,
          "title": "Saúde e Bem-Estar",
          "lessons": [
            "Medicamentos Isentos de Prescrição (MIPs)",
            "Noções de Primeiros Socorros",
            "Suplementos e Produtos Naturais"
          ]
        }
      ]
    },{
      "id": 11,
      "title": "Atendimento Pré-Hospitalar",
      "subtitle": "Capacite-se para atuar em emergências e salvar vidas",
      "duration": "8 meses",
      "lessons": 120,
      "level": "Intermediário",
      "image": aph,
      "description": "Desenvolva habilidades essenciais para o atendimento de urgência e emergência, aprendendo protocolos de primeiros socorros, imobilizações, suporte básico de vida e manejo de vítimas em diversas situações.",
      "category": "Saúde",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos do Atendimento Pré-Hospitalar",
          "lessons": [
            "O que é o Atendimento Pré-Hospitalar?",
            "Biossegurança e Equipamentos de Proteção Individual (EPI)",
            "Avaliação Inicial e Protocolo de Atendimento"
          ]
        },
        {
          "id": 2,
          "title": "Suporte Básico de Vida",
          "lessons": [
            "RCP (Reanimação Cardiopulmonar)",
            "Desfibrilador Externo Automático (DEA)",
            "Obstrução das Vias Aéreas e Manobras de Desobstrução"
          ]
        },
        {
          "id": 3,
          "title": "Imobilizações e Transporte de Vítimas",
          "lessons": [
            "Imobilização de Fraturas e Lesões na Coluna",
            "Uso de Maca e Pranchas Rígidas",
            "Técnicas de Transporte e Remoção de Pacientes"
          ]
        },
        {
          "id": 4,
          "title": "Atendimentos Específicos",
          "lessons": [
            "Atendimento a Vítimas de Trauma",
            "Emergências Clínicas e Convulsões",
            "Atendimento a Acidentes com Produtos Químicos"
          ]
        }
      ]
    },{
      "id": 12,
      "title": "Herói Mirim",
      "subtitle": "Ensine às crianças os primeiros passos em segurança e primeiros socorros",
      "duration": "8 meses",
      "lessons": 80,
      "level": "Básico",
      "image": heroimirim,
      "description": "Capacite crianças para lidarem com emergências de forma segura e responsável. O curso ensina noções básicas de primeiros socorros, segurança no dia a dia e como agir em situações de risco.",
      "category": "Saúde",
      "modules": [
        {
          "id": 1,
          "title": "Noções Básicas de Segurança",
          "lessons": [
            "O que é um Herói Mirim?",
            "Identificando Perigos no Dia a Dia",
            "Como Pedir Ajuda em Emergências"
          ]
        },
        {
          "id": 2,
          "title": "Primeiros Socorros para Crianças",
          "lessons": [
            "Cuidados com Pequenos Ferimentos",
            "O que Fazer em Caso de Queda",
            "Como Lidar com Engasgos e Queimaduras"
          ]
        },
        {
          "id": 3,
          "title": "Segurança em Casa e na Escola",
          "lessons": [
            "Prevenção de Acidentes Domésticos",
            "Cuidado com Produtos Perigosos",
            "Evacuação Segura em Caso de Incêndio"
          ]
        },
        {
          "id": 4,
          "title": "Comportamento Cidadão",
          "lessons": [
            "Importância do Trabalho em Equipe",
            "Como Ajudar de Forma Segura",
            "Respeito e Responsabilidade na Comunidade"
          ]
        }
      ]
    },{
      "id": 13,
      "title": "Auxiliar Veterinário",
      "subtitle": "Aprenda a cuidar e auxiliar no tratamento de animais",
      "duration": "8 meses",
      "lessons": 75,
      "level": "Básico",
      "image": auxvet,
      "description": "Capacite-se para atuar no suporte a veterinários, aprendendo sobre cuidados básicos, primeiros socorros, manejo de animais e administração de medicamentos. Torne-se um profissional essencial na área da saúde animal.",
      "category": "Saúde",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos da Medicina Veterinária",
          "lessons": [
            "O Papel do Auxiliar Veterinário",
            "Noções de Anatomia e Fisiologia Animal",
            "Bem-estar e Comportamento Animal"
          ]
        },
        {
          "id": 2,
          "title": "Cuidados e Manejo de Animais",
          "lessons": [
            "Alimentação e Hidratação",
            "Higiene e Cuidados Diários",
            "Transporte Seguro de Animais"
          ]
        },
        {
          "id": 3,
          "title": "Primeiros Socorros e Atendimento Clínico",
          "lessons": [
            "Atendimento de Emergência para Animais",
            "Curativos e Tratamentos Básicos",
            "Administração de Medicamentos"
          ]
        },
        {
          "id": 4,
          "title": "Ambiente Veterinário e Ética Profissional",
          "lessons": [
            "Organização e Higienização de Clínicas",
            "Atendimento ao Cliente e Tutores",
            "Ética e Legislação na Medicina Veterinária"
          ]
        }
      ]
    },{
      "id": 14,
      "title": "Coleta de Sangue",
      "subtitle": "Aprenda as técnicas essenciais para coleta de sangue com segurança",
      "duration": "8 meses",
      "lessons": 80,
      "level": "Intermediário",
      "image": coletaSangue,
      "description": "Capacite-se para atuar na área de análises clínicas, aprendendo técnicas de punção venosa, biossegurança, manuseio de amostras e atendimento humanizado ao paciente.",
      "category": "Saúde",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos da Coleta de Sangue",
          "lessons": [
            "Introdução à Hematologia",
            "Tipos de Exames Laboratoriais",
            "Biossegurança e Normas Sanitárias"
          ]
        },
        {
          "id": 2,
          "title": "Técnicas de Punção Venosa",
          "lessons": [
            "Materiais e Equipamentos Utilizados",
            "Técnicas de Coleta em Adultos e Crianças",
            "Identificação e Manipulação de Amostras"
          ]
        },
        {
          "id": 3,
          "title": "Atendimento e Procedimentos Especiais",
          "lessons": [
            "Atendimento Humanizado ao Paciente",
            "Coleta para Hemocultura e Testes Especiais",
            "Armazenamento e Transporte de Amostras"
          ]
        }
      ]
    },{
      "id": 15,
      "title": "Agente Comunitário de Saúde",
      "subtitle": "Capacite-se para atuar na promoção da saúde na comunidade",
      "duration": "8 meses",
      "lessons": 90,
      "level": "Básico",
      "image": agentecomunitario,
      "description": "Aprenda a atuar como Agente Comunitário de Saúde, promovendo educação em saúde, prevenção de doenças e assistência à população. Desenvolva habilidades essenciais para trabalhar junto à comunidade e equipes de saúde.",
      "category": "Saúde",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos do Trabalho Comunitário",
          "lessons": [
            "O Papel do Agente Comunitário de Saúde",
            "Sistema Único de Saúde (SUS) e Políticas Públicas",
            "Ética e Humanização no Atendimento"
          ]
        },
        {
          "id": 2,
          "title": "Promoção da Saúde e Prevenção de Doenças",
          "lessons": [
            "Educação em Saúde e Orientação Comunitária",
            "Imunização e Prevenção de Doenças",
            "Acompanhamento de Grupos de Risco"
          ]
        },
        {
          "id": 3,
          "title": "Atendimento Domiciliar e Acompanhamento",
          "lessons": [
            "Visitas Domiciliares e Registro de Informações",
            "Monitoramento de Saúde e Primeiros Socorros",
            "Encaminhamento e Integração com a Rede de Saúde"
          ]
        }
      ]
    },{
      "id": 16,
      "title": "Agente de Endemias",
      "subtitle": "Capacite-se para combater e prevenir doenças endêmicas",
      "duration": "8 meses",
      "lessons": 60,
      "level": "Básico",
      "image": agenteendemias,
      "description": "Aprenda a atuar na prevenção e controle de doenças endêmicas, desenvolvendo habilidades para identificar focos de transmissão, orientar a população e aplicar medidas de controle sanitário.",
      "category": "Saúde",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos do Controle de Endemias",
          "lessons": [
            "O Papel do Agente de Endemias",
            "Principais Doenças Endêmicas no Brasil",
            "Legislação e Políticas Públicas de Saúde"
          ]
        },
        {
          "id": 2,
          "title": "Monitoramento e Controle de Vetores",
          "lessons": [
            "Identificação e Eliminação de Focos de Mosquitos",
            "Uso de Equipamentos e Técnicas de Pulverização",
            "Prevenção de Zoonoses e Controle de Roedores"
          ]
        },
        {
          "id": 3,
          "title": "Educação e Conscientização da População",
          "lessons": [
            "Estratégias de Educação em Saúde",
            "Ações Comunitárias e Campanhas de Prevenção",
            "Integração com Equipes de Saúde e Vigilância Epidemiológica"
          ]
        }
      ]
    },{
      "id": 17,
      "title": "Agente Portuário",
      "subtitle": "Capacite-se para atuar na operação e logística portuária",
      "duration": "8 meses",
      "lessons": 80,
      "level": "Básico",
      "image": agenteportuario,
      "description": "Aprenda os fundamentos da logística portuária, gestão de cargas, segurança e regulamentação para atuar como agente portuário, garantindo eficiência e segurança nas operações marítimas.",
      "category": "Negócios",
      "modules": [
        {
          "id": 1,
          "title": "Introdução ao Setor Portuário",
          "lessons": [
            "O Papel do Agente Portuário",
            "Funcionamento dos Portos e Terminais",
            "Infraestrutura e Modalidades de Transporte"
          ]
        },
        {
          "id": 2,
          "title": "Operações e Logística Portuária",
          "lessons": [
            "Gestão de Cargas e Movimentação de Mercadorias",
            "Segurança e Normas Ambientais nos Portos",
            "Documentação e Processos Aduaneiros"
          ]
        },
        {
          "id": 3,
          "title": "Regulamentação e Segurança",
          "lessons": [
            "Legislação e Normas do Transporte Marítimo",
            "Prevenção de Acidentes e Emergências",
            "Tecnologias Aplicadas à Gestão Portuária"
          ]
        }
      ]
    },{
      "id": 18,
      "title": "Auxiliar de Necropsia",
      "subtitle": "Capacite-se para atuar na área de tanatopraxia e perícia forense",
      "duration": "8 meses",
      "lessons": 70,
      "level": "Intermediário",
      "image": auxnecropsia,
      "description": "Aprenda as técnicas de manipulação e preparação de corpos, identificação de causas mortis e normas de biossegurança para atuar como auxiliar de necropsia em institutos médico-legais e funerárias.",
      "category": "Saúde",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos da Necropsia",
          "lessons": [
            "Introdução à Tanatologia",
            "Normas e Regulamentações Legais",
            "Segurança e Higienização no Ambiente de Trabalho"
          ]
        },
        {
          "id": 2,
          "title": "Procedimentos Técnicos",
          "lessons": [
            "Manipulação e Preparação do Corpo",
            "Técnicas de Conservação e Tanatopraxia",
            "Reconstituição e Reconhecimento de Corpos"
          ]
        },
        {
          "id": 3,
          "title": "Auxílio em Perícias",
          "lessons": [
            "Identificação de Causas Mortis",
            "Atuação em Institutos Médico-Legais",
            "Noções de Medicina Legal e Criminalística"
          ]
        }
      ]
    },{
      "id": 19,
      "title": "Auxiliar de RH",
      "subtitle": "Desenvolva habilidades essenciais para gestão de pessoas",
      "duration": "8 meses",
      "lessons": 90,
      "level": "Básico",
      "image": auxRH,
      "description": "Aprenda a atuar no setor de Recursos Humanos, desenvolvendo habilidades em recrutamento, folha de pagamento, benefícios, legislação trabalhista e desenvolvimento organizacional.",
      "category": "Negócios",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos de RH",
          "lessons": [
            "Introdução à Gestão de Pessoas",
            "Atribuições do Auxiliar de RH",
            "Ética e Comportamento Profissional"
          ]
        },
        {
          "id": 2,
          "title": "Processos Administrativos",
          "lessons": [
            "Recrutamento e Seleção de Talentos",
            "Folha de Pagamento e Benefícios",
            "Legislação Trabalhista e Normas CLT"
          ]
        },
        {
          "id": 3,
          "title": "Desenvolvimento Organizacional",
          "lessons": [
            "Gestão de Desempenho e Clima Organizacional",
            "Treinamento e Desenvolvimento de Equipes",
            "Técnicas de Motivação e Liderança"
          ]
        }
      ]
    },{
      "id": 20,
      "title": "Auxiliar de Sala",
      "subtitle": "Aprenda a apoiar professores e alunos no ambiente escolar",
      "duration": "8 meses",
      "lessons": 75,
      "level": "Básico",
      "image": auxSala,
      "description": "Capacite-se para atuar no suporte a professores e alunos, auxiliando na organização da sala de aula, desenvolvimento das atividades pedagógicas e inclusão educacional.",
      "category": "Negócios",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos da Educação",
          "lessons": [
            "O Papel do Auxiliar de Sala",
            "Ética e Responsabilidade na Educação",
            "Inclusão Escolar e Atendimento a Necessidades Especiais"
          ]
        },
        {
          "id": 2,
          "title": "Organização e Suporte Pedagógico",
          "lessons": [
            "Apoio ao Professor e Planejamento de Aulas",
            "Técnicas de Mediação Escolar",
            "Ambiente Escolar e Disciplina Positiva"
          ]
        },
        {
          "id": 3,
          "title": "Desenvolvimento Infantil e Aprendizagem",
          "lessons": [
            "Psicologia da Aprendizagem",
            "Estimulação Cognitiva e Criatividade",
            "Atividades Lúdicas e Recreação"
          ]
        }
      ]
    },{
      "id": 21,
      "title": "Auxiliar de Saúde Bucal",
      "subtitle": "Capacite-se para atuar no suporte a dentistas e na prevenção odontológica",
      "duration": "8 meses",
      "lessons": 80,
      "level": "Básico",
      "image": saudebucal,
      "description": "Aprenda as técnicas de assistência odontológica, prevenção de doenças bucais, organização de materiais e atendimento a pacientes, tornando-se um profissional essencial na saúde bucal.",
      "category": "Saúde",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos da Odontologia",
          "lessons": [
            "O Papel do Auxiliar de Saúde Bucal",
            "Ética e Legislação Odontológica",
            "Noções de Anatomia e Fisiologia Bucal"
          ]
        },
        {
          "id": 2,
          "title": "Assistência e Prevenção Odontológica",
          "lessons": [
            "Instrumentação e Técnicas de Atendimento",
            "Prevenção de Cáries e Doenças Bucais",
            "Cuidados com Higiene Oral e Profilaxia"
          ]
        },
        {
          "id": 3,
          "title": "Gestão e Atendimento ao Paciente",
          "lessons": [
            "Organização do Consultório e Materiais",
            "Atendimento Humanizado ao Paciente",
            "Biossegurança e Controle de Infecção"
          ]
        }
      ]
    },{
      "id": 22,
      "title": "Auxiliar de Segurança do Trabalho",
      "subtitle": "Aprenda a promover um ambiente de trabalho seguro",
      "duration": "8 meses",
      "lessons": 75,
      "level": "Básico",
      "image": auxSegurancaTrabalho,
      "description": "Capacite-se para atuar na prevenção de riscos ocupacionais, identificando perigos, aplicando normas de segurança e contribuindo para a saúde e bem-estar dos trabalhadores.",
      "category": "Negócios",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos da Segurança do Trabalho",
          "lessons": [
            "Introdução à Segurança do Trabalho",
            "Normas Regulamentadoras (NRs)",
            "Identificação de Riscos Ocupacionais"
          ]
        },
        {
          "id": 2,
          "title": "Prevenção e Controle de Acidentes",
          "lessons": [
            "Equipamentos de Proteção Individual (EPI)",
            "Treinamento e Conscientização dos Trabalhadores",
            "Procedimentos em Caso de Emergência"
          ]
        },
        {
          "id": 3,
          "title": "Saúde Ocupacional e Ergonomia",
          "lessons": [
            "Gestão de Saúde no Trabalho",
            "Noções de Ergonomia e Postura",
            "Prevenção de Doenças Ocupacionais"
          ]
        }
      ]
    },{
      "id": 23,
      "title": "Auxiliar de Laboratório",
      "subtitle": "Aprenda a atuar no suporte a exames laboratoriais",
      "duration": "8 meses",
      "lessons": 90,
      "level": "Intermediário",
      "image": auxLaboratorio,
      "description": "Capacite-se para auxiliar na realização de exames laboratoriais, aprendendo sobre manipulação de amostras, biossegurança e técnicas laboratoriais.",
      "category": "Saúde",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos da Análise Laboratorial",
          "lessons": [
            "Introdução à Análises Clínicas",
            "Biossegurança e Equipamentos de Proteção",
            "Coleta e Manipulação de Amostras"
          ]
        },
        {
          "id": 2,
          "title": "Técnicas Laboratoriais",
          "lessons": [
            "Processamento de Amostras",
            "Interpretação de Resultados",
            "Manutenção e Higienização de Equipamentos"
          ]
        },
        {
          "id": 3,
          "title": "Gestão e Atendimento no Laboratório",
          "lessons": [
            "Organização e Rotinas Laboratoriais",
            "Atendimento ao Paciente e Coleta Humanizada",
            "Armazenamento e Transporte de Amostras"
          ]
        }
      ]
    },{
      "id": 24,
      "title": "Cuidador de Idosos",
      "subtitle": "Capacite-se para oferecer cuidado e qualidade de vida a idosos",
      "duration": "8 meses",
      "lessons": 60,
      "level": "Básico",
      "image": cuidadorIdosos,
      "description": "Aprenda técnicas essenciais para o cuidado de idosos, incluindo administração de medicamentos, mobilidade, higiene e atendimento humanizado.",
      "category": "Saúde",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos do Cuidado ao Idoso",
          "lessons": [
            "O Papel do Cuidador de Idosos",
            "Envelhecimento e Qualidade de Vida",
            "Ética e Respeito na Assistência"
          ]
        },
        {
          "id": 2,
          "title": "Saúde e Mobilidade",
          "lessons": [
            "Higiene e Cuidados Diários",
            "Prevenção de Quedas e Mobilidade",
            "Administração de Medicamentos"
          ]
        },
        {
          "id": 3,
          "title": "Aspectos Psicológicos e Sociais",
          "lessons": [
            "Saúde Mental e Emoções na Terceira Idade",
            "Comunicação com Idosos e Familiares",
            "Atividades e Estímulos Cognitivos"
          ]
        }
      ]
    },{
      "id": 25,
      "title": "Defesa Civil",
      "subtitle": "Prepare-se para atuar na gestão de desastres e emergências",
      "duration": "8 meses",
      "lessons": 120,
      "level": "Intermediário",
      "image": defesaCivil,
      "description": "Aprenda a atuar na prevenção e resposta a desastres naturais e emergências, desenvolvendo habilidades para planejar ações de segurança e resgate.",
      "category": "Saúde",
      "modules": [
        {
          "id": 1,
          "title": "Introdução à Defesa Civil",
          "lessons": [
            "O que é Defesa Civil?",
            "Planejamento e Gestão de Riscos",
            "Normas e Regulamentações de Segurança"
          ]
        },
        {
          "id": 2,
          "title": "Ações de Prevenção e Resgate",
          "lessons": [
            "Técnicas de Salvamento e Resgate",
            "Primeiros Socorros e Atendimento Emergencial",
            "Atuação em Desastres Naturais"
          ]
        },
        {
          "id": 3,
          "title": "Gestão de Crises e Recuperação",
          "lessons": [
            "Monitoramento de Áreas de Risco",
            "Apoio às Vítimas e Reabilitação Pós-Desastre",
            "Comunicação e Coordenação de Equipes"
          ]
        }
      ]
    },{
      "id": 26,
      "title": "Fiscal do Meio Ambiente",
      "subtitle": "Aprenda a fiscalizar e proteger o meio ambiente",
      "duration": "8 meses",
      "lessons": 60,
      "level": "Básico",
      "image": fiscalMeioAmbiente,
      "description": "Capacite-se para atuar na fiscalização ambiental, identificando crimes ambientais e promovendo a sustentabilidade e preservação do meio ambiente.",
      "category": "Saúde",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos da Fiscalização Ambiental",
          "lessons": [
            "O Papel do Fiscal Ambiental",
            "Legislação Ambiental Brasileira",
            "Identificação de Impactos Ambientais"
          ]
        },
        {
          "id": 2,
          "title": "Técnicas de Fiscalização",
          "lessons": [
            "Monitoramento de Áreas de Preservação",
            "Prevenção e Controle de Poluição",
            "Educação e Conscientização Ambiental"
          ]
        },
        {
          "id": 3,
          "title": "Gestão e Sustentabilidade",
          "lessons": [
            "Licenciamento e Regularização Ambiental",
            "Planejamento de Ações Sustentáveis",
            "Cooperação com Órgãos Ambientais"
          ]
        }
      ]
    },{
      "id": 27,
      "title": "Gestão Hospitalar",
      "subtitle": "Aprenda a administrar unidades de saúde com eficiência",
      "duration": "8 meses",
      "lessons": 80,
      "level": "Intermediário",
      "image": gestaoHospitalar,
      "description": "Desenvolva habilidades para gerenciar hospitais, clínicas e unidades de saúde, abordando planejamento estratégico, gestão financeira e qualidade no atendimento.",
      "category": "Saúde",
      "modules": [
        {
          "id": 1,
          "title": "Fundamentos da Gestão Hospitalar",
          "lessons": [
            "Introdução à Administração Hospitalar",
            "Legislação e Políticas de Saúde",
            "Ética e Humanização no Atendimento"
          ]
        },
        {
          "id": 2,
          "title": "Gestão de Recursos e Serviços",
          "lessons": [
            "Planejamento e Logística Hospitalar",
            "Gestão Financeira e Custos na Saúde",
            "Controle de Qualidade e Segurança do Paciente"
          ]
        },
        {
          "id": 3,
          "title": "Tecnologia e Inovação na Saúde",
          "lessons": [
            "Prontuário Eletrônico e Informatização",
            "Novas Tecnologias em Saúde",
            "Sustentabilidade na Gestão Hospitalar"
          ]
        }
      ]
    },{
      "id": 28,
      "title": "Guarda Municipal",
      "subtitle": "Prepare-se para atuar na segurança pública municipal",
      "duration": "8 meses",
      "lessons": 100,
      "level": "Intermediário",
      "image": guardamunicipal,
      "description": "Capacite-se para atuar como Guarda Municipal, desenvolvendo habilidades em segurança pública, defesa pessoal, legislação e atendimento comunitário.",
      "category": "Saúde",
      "modules": [
        {
          "id": 1,
          "title": "Introdução à Segurança Pública",
          "lessons": [
            "Função e Responsabilidades da Guarda Municipal",
            "Legislação e Direitos Humanos",
            "Técnicas de Abordagem e Condução"
          ]
        }
      ]
    },                                                                                            
  ];

  // Simulação de instrutores para cada curso
  const instructors: { [key: number]: Instructor } = {
    1: {
      id: 1,
      name: "Mariana Silva",
      role: "Professora",
      bio: "Com ampla experiência em sua área de atuação, Mariana é dedicada a oferecer uma formação prática e alinhada às exigências do mercado de trabalho.",
      image: "/images/instructor-mariana.jpg"
    },
    2: {
      id: 2,
      name: "Ricardo Oliveira",
      role: "Professor",
      bio: "Com ampla experiência em sua área de atuação, Ricardo é dedicado a oferecer uma formação prática e alinhada às exigências do mercado de trabalho.",
      image: "/images/instructor-ricardo.jpg"
    },
    3: {
      id: 3,
      name: "Juliana Mendes",
      role: "Professora",
      bio: "Com ampla experiência em sua área de atuação, Juliana é dedicada a oferecer uma formação prática e alinhada às exigências do mercado de trabalho.",
      image: "/images/instructor-juliana.jpg"
    },

    // Adicione mais instrutores conforme necessário...
  };

  // Depoimentos genéricos que podem ser usados para todos os cursos
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Este curso transformou minha vida! Em pouco meses, consegui meu primeiro emprego na área, triplicando meu salário anterior.",
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
      question: "O certificado é reconhecido em todo territorio nacional?",
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