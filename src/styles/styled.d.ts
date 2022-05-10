import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    brandColors: {
      brand: string;
      brandHover: string;
      textOnBrand: string;
    };
    colors: {
      surfacePrimary: string;
      surfaceSecondary: string;
      surfaceSecondaryHover: string;
      stroke: string;
      tooltip: string;
      textPrimary: string;
      textSecondary: string;
      textOnTooltip: string;
    };
  }
}
