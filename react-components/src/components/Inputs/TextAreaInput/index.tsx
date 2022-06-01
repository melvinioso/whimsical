import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

import Error from '../Error';

import inputStyles from '../../../styles/inputStyles';
import { marginHandler } from '../../../styles/handlers';

function _TextAreaInput(
  { className, label, error, small, large, icon, iconPosition, ...props }: any,
  ref: React.LegacyRef<HTMLInputElement> | undefined
) {
  return (
    <div
      className={clsx(
        className,
        small && 'small',
        large && 'large',
        error && 'error'
      )}
    >
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea ref={ref} {...props} />
      {icon ? <span className="icon">{icon}</span> : null}
      {error ? (
        <Error red marginT-7 marginL-5>
          {error.message}
        </Error>
      ) : null}
    </div>
  );
}

const TextAreaInput = styled(React.forwardRef(_TextAreaInput))`
  position: relative;

  label {
    font-family: 'Lato', sans-serif;
    font-size: 0.9rem;
    display: block;
    font-weight: 600;
    margin-bottom: 0.35rem;
    margin-left: 7px;
    color: ${({ theme }) => theme.colors.whimsical.gray};
  }

  textarea {
    ${inputStyles}

    ${({ icon, iconPosition }) => {
      if (!icon) {
        return '';
      }

      if (iconPosition === 'right') {
        return 'padding-right: 30px;';
      }

      return 'padding-left: 30px;';
    }}
  }

  .icon {
    position: absolute;

    ${({ iconPosition }) => {
      let css = ['top: 50%;', 'transform: translateY(-50%);'];
      if (iconPosition === 'right') {
        css.push('right: 10px;');
      } else {
        css.push('left: 10px;');
      }

      return css.join('\n');
    }}
  }

  &.small {
    label {
      font-size: 0.7rem;
    }

    textarea {
      font-size: 0.8rem;

      ${({ icon, iconPosition }) => {
        if (!icon) {
          return '';
        }

        if (iconPosition === 'right') {
          return 'padding-right: 26px;';
        }

        return 'padding-left: 26px;';
      }}
    }

    .icon {
      font-size: 0.8rem;
    }
  }

  &.large {
    textarea {
      font-size: 1.2rem;

      ${({ icon, iconPosition }) => {
        if (!icon) {
          return '';
        }

        if (iconPosition === 'right') {
          return 'padding-right: 34px;';
        }

        return 'padding-left: 34px;';
      }}
    }

    .icon {
      font-size: 1.2rem;
    }
  }

  &.error {
    textarea {
      border-color: ${({ theme }) => theme.colors.whimsical.red};
    }
  }

  ${(props) => marginHandler(props)}
`;

export default TextAreaInput;
