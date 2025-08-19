import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Mail, User, CheckCircle } from 'lucide-react';
import {
  Container,
  FormWrapper,
  Header,
  LogoSection,
  LogoContainer,
  LogoInner,
  LogoPlaceholder,
  CompanyInfo,
  CompanyName,
  ProgressSection,
  ProgressInfo,
  FormCard,
  CardContent,
  StepContainer,
  StepHeader,
  IconContainer,
  StepTitle,
  StepDescription,
  FormFields,
  FieldGroup,
  StyledLabel,
  StyledInput,
  Navigation,
  NavButton,
  Footer,
  ProgressRoot,
  ProgressIndicator
} from '../styles/Formulario.styles';
import logo from '../../public/Logotipo-vertical-normal-2.png'

interface FormData {
  email: string;
  name: string;
  phone: string;
  company: string;
  experience: string;
}

const Formulario = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    phone: '',
    company: '',
    experience: ''
  });

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatPhone = (value: string) => {
  let cleaned = value.replace(/\D/g, "");

  cleaned = cleaned.replace(/^(\d{2})(\d)/g, "($1) $2");

  cleaned = cleaned.replace(/(\d{5})(\d)/, "$1-$2");

  return cleaned;
};



  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepContainer>
            <StepHeader>
              <IconContainer>
                <Mail size={32} color="hsl(84 93% 37%)" />
              </IconContainer>
              <StepTitle>Olá!</StepTitle>
              <StepDescription>
                Precisamos de algumas informações para termos certeza qual é o programa mais adequado para o seu perfil.
              </StepDescription>
            </StepHeader>
            
            <FormFields>
              <FieldGroup>
                <StyledLabel htmlFor="email">
                  Qual é o seu email?
                </StyledLabel>
                <StyledInput
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="seu@email.com"
                />
              </FieldGroup>
            </FormFields>
          </StepContainer>
        );

      case 2:
        return (
          <StepContainer>
            <StepHeader>
              <IconContainer>
                <User size={32} color="hsl(84 93% 37%)" />
              </IconContainer>
              <StepTitle>Dados Pessoais</StepTitle>
              <StepDescription>
                Agora precisamos conhecer um pouco mais sobre você.
              </StepDescription>
            </StepHeader>
            
            <FormFields>
              <FieldGroup>
                <StyledLabel htmlFor="name">
                  Nome completo
                </StyledLabel>
                <StyledInput
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Seu nome completo"
                />
              </FieldGroup>
              
              <FieldGroup>
                <StyledLabel htmlFor="phone">
                  Telefone
                </StyledLabel>
                <StyledInput
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', formatPhone(e.target.value))}
                  placeholder="(11) 99999-9999"
                  maxLength={15}
                />
              </FieldGroup>
            </FormFields>
          </StepContainer>
        );

      case 3:
        return (
          <StepContainer>
            <StepHeader>
              <IconContainer>
                <CheckCircle size={32} color="hsl(142 76% 36%)" />
              </IconContainer>
              <StepTitle>Tudo Pronto!</StepTitle>
              <StepDescription>
                Obrigado pelas informações. Em breve entraremos em contato com você.
              </StepDescription>
            </StepHeader>
          </StepContainer>
        );

      default:
        return null;
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Header>
          <LogoSection>
            <LogoContainer>
              <LogoInner>
                <LogoPlaceholder>
                  <img src={logo} alt="Logo" style={{ width: '65%', height: '65%' }} />
                </LogoPlaceholder>
              </LogoInner>
            </LogoContainer>
            <CompanyInfo>
              <CompanyName>Infinity Cursos Profissionalizantes</CompanyName>
            </CompanyInfo>
          </LogoSection>
          
          <ProgressSection>
            <ProgressInfo>
              <span>Etapa {currentStep} de {totalSteps}</span>
              <span>{Math.round(progress)}%</span>
            </ProgressInfo>
            <ProgressRoot value={progress}>
              <ProgressIndicator style={{ width: `${progress}%` }} />
            </ProgressRoot>
          </ProgressSection>
        </Header>

        <FormCard>
          <CardContent>
            {renderStep()}
            
            <Navigation>
              <NavButton
                $variant="outline"
                onClick={handlePrevious}
                $disabled={currentStep === 1}
              >
                <ChevronLeft size={16} />
                Anterior
              </NavButton>
              
              {currentStep < totalSteps ? (
                <NavButton onClick={handleNext}>
                  Próximo
                  <ChevronRight size={16} />
                </NavButton>
              ) : (
                <NavButton
                  $variant="success"
                  onClick={() => alert('Formulário enviado!')}
                >
                  Finalizar
                  <CheckCircle size={16} />
                </NavButton>
              )}
            </Navigation>
          </CardContent>
        </FormCard>

        <Footer>
          Ao clicar em Confirmar você automaticamente aceita os nossos{' '}
          <a href="#">termos de uso</a> e{' '}
          <a href="#">política de privacidade</a>.
        </Footer>
      </FormWrapper>
    </Container>
  );
};

export default Formulario;