import styled from 'styled-components';

export const FooterSection = styled.footer`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  padding: 3rem 1rem 1.5rem;
  
  @media (min-width: 768px) {
    padding: 4rem 2rem 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2373b809' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (min-width: 969px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

export const FooterColumn = styled.div`
  h3 {
    color: #000000;
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 1.25rem;
    
    @media (min-width: 768px) {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
    }
  }

  p {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.6;
    
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.6rem;
    
    @media (min-width: 768px) {
      margin-bottom: 0.75rem;
    }
  }

  a {
    color: #666;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 0.95rem;
    
    @media (min-width: 768px) {
      font-size: 1rem;
    }

    &:hover {
      color: #73b809;
      padding-left: 5px;
    }
  }
`;

export const ContactInfo = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 0.8rem;
    color: #666;
    font-size: 0.95rem;
    
    @media (min-width: 768px) {
      gap: 0.75rem;
      margin-bottom: 1rem;
      font-size: 1rem;
    }

    svg {
      color: #73b809;
      min-width: 18px;
      
      @media (min-width: 768px) {
        min-width: 20px;
      }
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  
  @media (min-width: 768px) {
    gap: 1rem;
  }

  a {
    color: #666;
    transition: all 0.3s ease;
    font-size: 1.25rem;
    
    @media (min-width: 768px) {
      font-size: 1.4rem;
    }

    &:hover {
      color: #73b809;
      transform: translateY(-3px);
    }
  }
`;

export const FooterBottom = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(115, 184, 9, 0.1);
  text-align: center;
  color: #666;
  font-size: 0.85rem;
  
  @media (min-width: 768px) {
    margin-top: 3rem;
    padding-top: 2rem;
    font-size: 0.9rem;
  }
`;