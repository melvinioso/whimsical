import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

import Error from '../Error';

import inputStyles from '../../../styles/inputStyles';
import { marginHandler } from '../../../styles/handlers';

function _TextAreaInput(
  { className, label, error, small, large, ...props }: any,
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
      {error ? (
        <Error red marginT-7 marginL-5>
          {error.message}
        </Error>
      ) : null}
    </div>
  );
}

const TextAreaInput = styled(React.forwardRef(_TextAreaInput))`
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
  }

  &.small {
    textarea {
      font-size: 0.8rem;
    }

    label {
      font-size: 0.7rem;
    }
  }

  &.large {
    textarea {
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
