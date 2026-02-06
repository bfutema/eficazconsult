import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing['5xl']} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background};
`;

export const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const SectionLabel = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 4px 24px rgba(10, 37, 64, 0.06);
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(10, 37, 64, 0.12);
    border-color: ${({ theme }) => theme.colors.accentLighter};
  }
`;

export const CardIcon = styled.div`
  width: 56px;
  height: 56px;
  background: ${({ theme }) => theme.colors.accentLighter};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;
