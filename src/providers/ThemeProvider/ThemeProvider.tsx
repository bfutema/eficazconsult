import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <StyledThemeProvider theme={lightTheme}>
      {children}
    </StyledThemeProvider>
  );
}
