import styled from 'styled-components';
import clsx from 'clsx';

import {
  colorHandler,
  backgroundHandler,
  marginHandler,
  paddingHandler,
  typographyHandler,
  radiusHandler,
} from '../../styles/handlers';

function _Text({
  className,
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  xl3,
  xl4,
  xl5,
  xl6,
  xl7,
  xl8,
  bold,
  underline,
  italics,
  left,
  center,
  right,
  tagName = 'span',
}: any) {
  const Tag = tagName;

  return (
    <Tag
      className={clsx(
        className,
        xs && 'xs',
        sm && 'small',
        md && 'medium',
        lg && 'large',
        xl && 'xl',
        xxl && 'xxl',
        xl3 && 'xl3',
        xl4 && 'xl4',
        xl5 && 'xl5',
        xl6 && 'xl6',
        xl7 && 'xl7',
        xl8 && 'xl8',
        bold && 'bold',
        underline && 'underline',
        italics && 'italics',
        left && 'left',
        center && 'center',
        right && 'right',
      )}
    >
      {children}
    </Tag>
  );
}

const Text = styled(_Text)`
  font-family: Arial, sans-serif;
  font-size: 1rem;

  &.bold {
    font-weight: 700;
  }

  &.underline {
    text-decoration: underline;
  }

  &.italics {
    font-style: italic;
  }

  &.xs {
    font-size: 0.5rem;
  }

  &.small {
    font-size: 0.75rem;
  }

  &.medium {
    font-size: 1rem;
  }

  &.large {
    font-size: 1.25rem;
  }

  &.xl {
    font-size: 1.75rem;
  }

  &.xxl {
    font-size: 2.5rem;
  }

  &.xl3 {
    font-size: 4rem;
  }

  &.xl4 {
    font-size: 5.5rem;
  }

  &.xl5 {
    font-size: 7rem;
  }

  &.xl6 {
    font-size: 8.5rem;
  }

  &.xl7 {
    font-size: 10rem;
  }

  &.xl8 {
    font-size: 12rem;
  }

  &.left {
    text-align: left;
    display: block;
  }

  &.center {
    text-align: center;
    display: block;
  }

  &.right {
    text-align: right;
    display: block;
  }

  ${(p) => {
    let color;
    Object.keys(p.theme.colors.whimsical).forEach((key) => {
      if (p[key]) {
        color = p.theme.colors.whimsical[key];
      }
    });

    if (color) {
      return `color: ${color};`;
    } else {
      return ``;
    }
  }}

  ${(props) => colorHandler(props)}
  ${(props) => backgroundHandler(props)}
  ${(props) => marginHandler(props)}
  ${(props) => paddingHandler(props)}
  ${(props) => radiusHandler(props)}
  ${(props) => typographyHandler(props)}
`;

export default Text;
