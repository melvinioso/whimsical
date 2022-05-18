import { css } from 'styled-components';

export const WHIMSICAL_COLORS = {
  white: '#ffffff',
  black: '#132144',
  smoke: '#c3cfd9',
  gray: '#788896',
  slate: '#4a5c6b',
  blue: '#2d87d9',
  indigo: '#6557f5',
  purple: '#720fc3',
  pink: '#bd35d1',
  mint: '#1bae9f',
  green: '#217768',
  brown: '#89795e',
  crimson: '#ac6362',
  red: '#d3455b',
  orange: '#e8823a',
  yellow: '#f7c325',
};

const h1 = css`
  letter-spacing: 1px;
  font-weight: 400;
`;

const customTitle = css`
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const bold = css`
  font-weight: 600;
`;

export const colorNames = (() => {
  return Object.keys(WHIMSICAL_COLORS).reduce((memo, key) => {
    memo[key] = key.charAt(0).toUpperCase() + key.slice(1);
    return memo;
  }, {} as any);
})();

const theme = {
  colors: {
    whimsical: WHIMSICAL_COLORS,
  },
  typography: {
    h1,
    customTitle,
    bold,
  },
};

export default theme;
