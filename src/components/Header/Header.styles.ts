import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 20px rgba(10, 37, 64, 0.08);
  transition: box-shadow 0.3s ease, background 0.3s ease;

  &.scrolled {
    box-shadow: 0 4px 24px rgba(10, 37, 64, 0.12);
  }
`;

export const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  letter-spacing: -0.02em;

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a<{ $active?: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.text)};
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  ${({ $active, theme }) =>
    $active &&
    `
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 2px;
      background: ${theme.colors.accent};
      border-radius: ${theme.borderRadius.full};
    }
  `}
`;
