import styled from 'styled-components';

export const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.primaryLight} 50%,
    ${({ theme }) => theme.colors.primary} 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 20% 80%,
      rgba(74, 144, 217, 0.15) 0%,
      transparent 50%
    );
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.03) 100%
    );
    pointer-events: none;
  }
`;

export const HeroInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  position: relative;
  z-index: 1;
`;

export const Badge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.accentLight};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 700px;
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.accentLight};
  position: relative;
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  max-width: 560px;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

export const CtaGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

export const CtaPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(74, 144, 217, 0.4);

  &:hover {
    background: ${({ theme }) => theme.colors.accentLight};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(74, 144, 217, 0.5);
  }
`;

export const CtaSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 2px solid rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.white};
    background: rgba(255, 255, 255, 0.05);
  }
`;
