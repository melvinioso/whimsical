import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { intersection } from 'lodash';
import { darken } from 'polished';

import { marginHandler, paddingHandler } from '../../styles/handlers';

function handleButtonProps({ theme, ...props }: any) {
  const themeKeys = Object.keys(theme.colors.whimsical);
  const propsKeys = Object.keys(props);
  const sharedKeys = intersection(themeKeys, propsKeys);

  const css = [];

  if (props.outline) {
    css.push(`color: ${theme.colors.whimsical.indigo};`);
    css.push(`border-color: ${theme.colors.whimsical.indigo};`);
    css.push(`background-color: transparent;`);
    css.push(
      `&:hover { background-color: ${darken(
        0.05,
        theme.colors.whimsical.white
      )}; }`
    );
  }

  if (props.link) {
    css.push(`background-color: transparent;`);
    css.push(`color: ${theme.colors.whimsical.indigo};`);
    css.push(
      `&:hover { background-color: transparent; text-decoration: underline; }`
    );
  }

  if (sharedKeys && sharedKeys.length) {
    const lastKey = sharedKeys[sharedKeys.length - 1];
    const color = theme.colors.whimsical[lastKey];
    const outlineFontColor = ['white', 'smoke'].includes(lastKey)
      ? theme.colors.whimsical.gray
      : theme.colors.whimsical[lastKey];

    if (['white', 'smoke', 'yellow'].includes(lastKey)) {
      css.push(`color: ${theme.colors.whimsical.black};`);
    }

    if (props.outline) {
      css.push(`color: ${outlineFontColor};`);
      css.push(`border-color: ${outlineFontColor};`);
      css.push(`background-color: transparent;`);
      css.push(
        `&:hover { background-color: ${darken(
          0.05,
          theme.colors.whimsical.white
        )}; }`
      );
    } else if (props.link) {
      css.push(`color: ${outlineFontColor};`);
    } else {
      css.push(`background-color: ${color};`);
      css.push(`&:hover { background-color: ${darken(0.1, color)}; }`);
    }
  }

  if (props.sm) {
    css.push('height: 32px;');
    css.push('font-size: 0.75rem;');
  }

  if (props.lg) {
    css.push('height: 48px;');
    css.push('font-size: 1.25rem;');
  }

  return css.join('\n');
}

function _Button(
  {
    className,
    onClick,
    children,
    style,
    disabled,
    href,
    type,
    target = '_blank',
  }: any,
  ref: any
) {
  if (href) {
    return (
      <a
        ref={(r) => (ref = r)}
        className={className}
        style={style}
        href={href}
        target={target}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      className={className}
      style={style}
      onClick={onClick}
      disabled={disabled}
      type={type}
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

const Button = styled(forwardRef(_Button))`
  font-family: 'Assistant', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  background: none;
  outline: none;
  border: solid 1px transparent;
  border-radius: 4px;
  height: 40px;
  padding: 0 1em;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.whimsical.white};
  background-color: ${({ theme }) => theme.colors.whimsical.indigo};
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: ${({ theme }) =>
      darken(0.1, theme.colors.whimsical.indigo)};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  > * {
    margin: 0 0.35rem;
  }

  > :first-child {
    margin-left: 0;
  }

  > :last-child {
    margin-right: 0;
  }

  ${(props) => handleButtonProps(props)}
  ${(props) => marginHandler(props)}
  ${(props) => paddingHandler(props)}
`;

export default Button;
