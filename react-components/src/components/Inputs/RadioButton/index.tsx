import React, { Children, isValidElement, cloneElement } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

import Error from '../Error';

export function Option({ groupName, name, value, register }: any) {
  return (
    <div>
      <input
        name={groupName}
        {...register(groupName)}
        type="radio"
        value={value}
      />
      <span></span>
      <label className="option-label">{name}</label>
    </div>
  );
}

function _RadioButton({
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
        <label>{label}</label>
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

const RadioButton = styled(_RadioButton)`
  font-family: 'Assistant', sans-serif;
  display: flex;
  flex-direction: column;

  > label {
    min-width: 100px;
    font-weight: 600;
  }

  > div > div {
    margin: 8px 0;
    display: flex;
    align-items: center;
    position: relative;

    input {
      margin-right: 15px;
      z-index: 9999;
      opacity: 0;
      cursor: pointer;
      width: 16px;
      height: 16px;
    }

    span {
      position: absolute;
      width: 16px;
      height: 16px;
      top: 2px;
      left: 2px;
      border: solid 2px ${({ theme }) => theme.colors.whimsical.smoke};
      border-radius: 50%;
    }

    input:checked ~ span {
      background-color: ${({ theme }) => theme.colors.whimsical.indigo};
      border-color: ${({ theme }) => theme.colors.whimsical.indigo};

      &:after {
        content: '';
        position: absolute;
        border: solid 2px white;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        top: 1px;
        left: 1px;
      }
    }
  }

  &.small {
    > label {
      font-size: 0.7rem;
    }

    .option-label {
      font-size: 0.8rem;
    }

    > div > div {
      margin: 8px 0;
      display: flex;
      align-items: center;
      position: relative;
  
      input {
        margin-right: 20px;
        z-index: 9999;
        opacity: 0;
        cursor: pointer;
        width: 12px;
        height: 12px;
      }
  
      span {
        position: absolute;
        width: 12px;
        height: 12px;
        top: 2px;
        left: 2px;
        border: solid 2px ${({ theme }) => theme.colors.whimsical.smoke};
        border-radius: 50%;
      }
  
      input:checked ~ span {
        background-color: ${({ theme }) => theme.colors.whimsical.indigo};
        border-color: ${({ theme }) => theme.colors.whimsical.indigo};
  
        &:after {
          content: '';
          position: absolute;
          border: solid 2px white;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          top: 1px;
          left: 1px;
        }
      }
    }
  }

  &.large {
    .option-label {
      font-size: 1.2rem;
    }

    > div > div {
      margin: 8px 0;
      display: flex;
      align-items: center;
      position: relative;
  
      input {
        margin-right: 20px;
        z-index: 9999;
        opacity: 0;
        cursor: pointer;
        width: 20px;
        height: 20px;
      }
  
      span {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 2px;
        left: 2px;
        border: solid 2px ${({ theme }) => theme.colors.whimsical.smoke};
        border-radius: 50%;
      }
  
      input:checked ~ span {
        background-color: ${({ theme }) => theme.colors.whimsical.indigo};
        border-color: ${({ theme }) => theme.colors.whimsical.indigo};
  
        &:after {
          content: '';
          position: absolute;
          border: solid 3px white;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          top: 0px;
          left: 0px;
        }
      }
    }
`;

export default RadioButton;
