import styled from 'styled-components';
import clsx from 'clsx';

import { colorHandler, backgroundHandler, marginHandler, paddingHandler, typographyHandler, radiusHandler } from '../../styles/handlers';

function _Text({ className, children, sm, lg, bold, underline, italics, tagName = 'span' }: any) {
  const Tag = tagName;

  return <Tag className={clsx(className, sm && 'small', lg && 'large', bold && 'bold', underline && 'underline', italics && 'italics')}>{children}</Tag>;
}

const Text = styled(_Text)`
  font-family: Arial, sans-serif;
  font-size: 1rem;

  &.small {
    font-size: 0.85rem;
  }

  &.large {
    font-size: 1.5rem;
  }

  &.bold {
    font-weight: 700;
  }

  &.underline {
    text-decoration: underline;
  }

  &.italics {
    font-style: italic;
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
