import { css } from 'styled-components';
import { darken } from 'polished';

export default css`
  outline: none;
  padding: 0.5rem 0.75rem;
  border: solid 2px ${({ theme }) => theme.colors.whimsical.smoke};
  border-radius: 4px;
  font-family: 'Assistant', sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  height: 40px;
  width: 100%;

  ::placeholder {
    color: ${({ theme }) => darken(0.2, theme.colors.whimsical.smoke)};
  }

  &:focus,
  &:active {
    border-color: ${({ theme }) => theme.colors.whimsical.indigo};
  }
`;
