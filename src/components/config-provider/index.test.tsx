import { render, screen } from '@testing-library/react';
import { Button } from 'antd';
import { describe, expect, it } from 'vitest';
import { ConfigProvider } from './index';
import { wplusTheme } from '../../theme';

describe('ConfigProvider', () => {
  it('renders children with the wrapped provider', () => {
    render(
      <ConfigProvider>
        <Button>Save</Button>
      </ConfigProvider>,
    );

    expect(screen.getByText('Save')).toBeTruthy();
  });

  it('uses design spec tokens as the default enterprise theme', () => {
    const theme = wplusTheme;

    expect(theme.token?.colorPrimary).toBe('#C5A267');
    expect(theme.token?.colorLink).toBe('#1874FF');
    expect(theme.token?.borderRadius).toBe(4);
    expect(theme.components?.Button?.borderRadius).toBe(2);
    expect(theme.components?.Table?.headerBg).toBe('#F1F2F7');
  });
});
