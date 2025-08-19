import styled from "styled-components";
import * as ProgressPrimitive from "@radix-ui/react-progress";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #73b809 0%, #a5d83d 100%);
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

export const FormWrapper = styled.div`
  background: #f3fbe9;
  padding: 1.5rem;
  border-radius: 0.75rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  align-items: center;
  text-align: center;
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

export const LogoContainer = styled.div``;

export const LogoInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoPlaceholder = styled.div`
  width: 60px;
  height: 60px;
  background-color: #73b809;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoText = styled.span`
  color: white;
  font-weight: bold;
`;

export const LogoCaption = styled.span`
  font-size: 0.75rem;
  color: #666;
`;

export const CompanyInfo = styled.div`
  text-align: center;
`;

export const CompanyName = styled.h1`
  font-size: 1.1rem;
  font-weight: bold;
  color: #1a1a1a;
`;

export const ProgressSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
`;

export const ProgressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
`;

export const ProgressRoot = styled(ProgressPrimitive.Root)`
  position: relative;
  height: 8px;
  width: 100%;
  background-color: #cce5b5;
  border-radius: 9999px;
  overflow: hidden;
`;

export const ProgressIndicator = styled(ProgressPrimitive.Indicator)`
  height: 100%;
  background-color: #73b809;
  transition: width 0.3s ease-in-out;
`;

export const FormCard = styled.div``;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const StepHeader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const IconContainer = styled.div`
  background-color: hsla(84, 93%, 37%, 0.15);
  padding: 0.5rem;
  border-radius: 50%;
`;

export const StepTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const StepDescription = styled.p`
  font-size: 0.85rem;
  color: #666;
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const StyledLabel = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
`;

export const StyledInput = styled.input`
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const StyledSelect = styled.select`
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SummaryTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  border-bottom: 1px dashed #ddd;
  padding-bottom: 0.25rem;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const NavButton = styled.button<{$variant?: string; $disabled?: boolean}>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ $variant }) =>
    $variant === "outline"
      ? "transparent"
      : $variant === "success"
      ? "#73b809"
      : "#000"};
  color: ${({ $variant }) => ($variant === "outline" ? "#000" : "#fff")};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: ${({ $variant }) => ($variant === "outline" ? "1px solid #000" : "none")};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

export const Footer = styled.footer`
  font-size: 0.7rem;
  text-align: center;
  margin-top: 1.25rem;
  color: #666;

  a {
    color: #73b809;
    text-decoration: underline;
  }
`;