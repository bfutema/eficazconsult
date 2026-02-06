import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.xl};
`;

export const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Brand = styled.div`
  max-width: 320px;

  @media (max-width: 768px) {
    max-width: none;
  }
`;

export const Logo = styled.div`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: -0.02em;

  span {
    color: ${({ theme }) => theme.colors.accentLight};
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
`;

export const Column = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ColumnTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.accentLight};
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinkItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const BottomBar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spacing['3xl']};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: rgba(255, 255, 255, 0.7);
`;
