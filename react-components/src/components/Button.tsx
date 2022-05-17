import styled from 'styled-components';
import clsx from 'clsx';
import { darken, lighten } from 'polished';

import { marginHandler } from '../styles/marginHandler';

import { COLORS } from './colors';

function outlineFontColor(color: string) {
  if (!COLORS[color]) {
    return COLORS.gray;
  }

  if (color === 'white' || color === 'smoke') {
    return COLORS.gray;
  } else {
    return COLORS[color];
  }
}

function borderColor(color: string) {
  if (!COLORS[color]) {
    return lighten(0.125, COLORS.gray);
  }

  if (color === 'white' || color === 'smoke') {
    return lighten(0.125, COLORS.gray);
  } else {
    return lighten(0.125, COLORS[color]);
  }
}

function fontColor(color: string) {
  if (!COLORS[color]) {
    return COLORS.black;
  }

  if (color === 'white' || color === 'smoke' || color === 'yellow') {
    return COLORS.black;
  } else {
    return COLORS.white;
  }
}

function backgroundColor(color: string) {
  if (!COLORS[color]) {
    return COLORS.white;
  }

  return COLORS[color];
}

function _Button({
  className,
  color,
  sm,
  md,
  lg,
  outline,
  link,
  type = 'submit',
  style,
  disabled,
  children,
  onClick,
}: any) {
  return (
    <button
      type={type}
      className={clsx(
        className,
        sm && 'sm',
        md && 'md',
        lg && 'lg',
        outline && 'outline',
        link && 'link'
      )}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children instanceof Array && children.map
        ? children.map((child, i) => {
            if (typeof child === 'string') {
              return <span key={i}>{child}</span>;
            }
            return child;
          })
        : children}
    </button>
  );
}

const Button = styled(_Button)`
  outline: none;
  background-color: ${({ color }) => backgroundColor(color)};
  font-size: 16px;
  padding: 0 1em;
  margin: 0;
  color: ${({ color }) => fontColor(color)};
  font-weight: 600;
  height: 36px;
  border-radius: 4px;
  border: none;
  -webkit-user-select: none;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: ${({ color }) => fontColor(color)} !important;
    background-color: ${({ color }) => darken(0.05, backgroundColor(color))};
  }

  &.outline {
    background-color: transparent;
    color: ${({ color }) => outlineFontColor(color)};
    border: solid 2px ${({ color }) => borderColor(color)};

    &:hover {
      color: ${({ color }) => outlineFontColor(color)} !important;
      background-color: ${darken(0.05, COLORS.white)};
    }
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &.link {
    background: transparent;
    color: ${({ color }) => outlineFontColor(color)} !important;

    &:hover {
      background: transparent;
      color: ${({ color }) => outlineFontColor(color)} !important;
      text-decoration: underline;
    }
  }

  > svg:first-child {
    margin-right: 0.7em;
  }

  > svg:last-child {
    margin-left: 0.7em;
  }

  > svg:only-child {
    margin: 0;
  }

  &.sm {
    height: 26px;
    font-size: 13px;
  }

  &.md {
    height: 36px;
    font-size: 16px;
  }

  &.lg {
    height: 50px;
    font-size: 20px;
  }

  ${(props) => marginHandler(props)}
`;

export default Button;
