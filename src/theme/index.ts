import type { ThemeConfig } from 'antd';
import { createGeneratedAntdTheme } from './antd-theme.generated';
import { globalDesignTokens } from './tokens.generated';

export { globalDesignTokens };
export type { GlobalDesignTokens } from './tokens.generated';

export interface EnterpriseThemeOptions {
  primaryColor?: string;
  borderRadius?: number;
}

export const createEnterpriseTheme = (options: EnterpriseThemeOptions = {}): ThemeConfig => {
  const {
    primaryColor = globalDesignTokens.color.brand[7],
    borderRadius = globalDesignTokens.radius.sm,
  } = options;
  const generatedTheme = createGeneratedAntdTheme(globalDesignTokens);

  return {
    ...generatedTheme,
    token: {
      ...generatedTheme.token,
      borderRadius,
      colorPrimary: primaryColor,
    },
    components: {
      ...generatedTheme.components,
      Button: {
        ...generatedTheme.components?.Button,
        borderRadius,
      },
    },
  };
};

export const enterpriseTheme = createEnterpriseTheme();
