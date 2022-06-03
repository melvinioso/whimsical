import React, { Children, isValidElement, cloneElement } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

import Error from '../Error';

export function Option({ groupName, name, value, register }: any) {
  return (
    <div>
      <label className="container">
        {name}
        <input
          name={groupName}
          {...register(groupName)}
          type="checkbox"
          value={value}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

function _CheckBox({
  className,
  name,
  label,
  small,
  large,
  register = () => ({ ref: null }),
  children,
  error,
}: any) {
  const childrenOverride = Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child;
    }

    return cloneElement(child as React.ReactElement<any>, {
      groupName: name,
      register,
    });
  });

  return (
    <>
      <div className={clsx(className, small && 'small', large && 'large')}>
        <label className="label">{label}</label>
        <div>{childrenOverride}</div>
      </div>
      {error ? (
        <Error red marginT-7 marginL-5>
          {error.message}
        </Error>
      ) : null}
    </>
  );
}

const CheckBox = styled(_CheckBox)`
  font-family: 'Assistant', sans-serif;

  .label {
    font-weight: 600;
  }

  .container {
    width: -moz-fit-content;
    width: fit-content;
    display: block;
    position: relative;
    padding-left: 35px;
    margin: 8px 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    border: solid 2px ${({ theme }) => theme.colors.whimsical.smoke};
    border-radius: 20%;
  }

  .container input:checked ~ .checkmark {
    background-color: ${({ theme }) => theme.colors.whimsical.indigo};
    border: solid 2px ${({ theme }) => theme.colors.whimsical.indigo};
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 5px;
    top: 1px;
    width: 3px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.small {
    .label {
      font-size: 0.7rem;
    }

    .container {
      padding-left: 29px;
      font-size: 0.8rem;
    }

    .checkmark {
      height: 12px;
      width: 12px;
      border: solid 2px ${({ theme }) => theme.colors.whimsical.smoke};
      border-radius: 20%;
    }

    .container .checkmark:after {
      left: 4px;
      top: 1px;
      width: 2px;
      height: 6px;
      border: solid white;
      border-width: 0 2px 2px 0;
    }
  }

  &.large {
    .container {
      padding-left: 39px;
      font-size: 1.2rem;
    }

    .checkmark {
      height: 20px;
      width: 20px;
      border: solid 2px ${({ theme }) => theme.colors.whimsical.smoke};
      border-radius: 20%;
    }

    .container .checkmark:after {
      left: 6px;
      top: 1px;
      width: 5px;
      height: 11px;
      border: solid white;
      border-width: 0 3px 3px 0;
    }
  }
`;

export default CheckBox;
