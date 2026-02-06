import { colors } from './colors';
import { spacing } from './spacing';
import { fontSize } from './fontSize';
import { fontWeight } from './fontWeight';
import { borderRadius } from './borderRadius';

export const lightTheme = {
  colors,
  spacing,
  fontSize,
  fontWeight,
  borderRadius,
};

export type Theme = typeof lightTheme;
