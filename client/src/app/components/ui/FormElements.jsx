/* eslint-disable react/prop-types */
import React from 'react';
import Loader from './Loader';

export const Form = React.forwardRef(
  ({ children, className, onSubmitHandler, ...props }, ref) => {
    return (
      <form
        ref={ref}
        onSubmit={onSubmitHandler}
        className={`${className ? className : 'p-2'}`}
        {...props}
      >
        {children}
      </form>
    );
  }
);

Form.displayName = 'Form';

export const Input = React.forwardRef(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <div>
        <label className="" htmlFor={props.id}>
          {props.label || ''}
        </label>
        <div className="">
          <input
            ref={ref}
            type={type}
            disabled={disabled}
            className={`input ${className}`}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';

export const ButtonLoader = React.forwardRef(
  ({ className, type, disabled = false, ...props }, ref) => {
    return (
      <>
        <button
          ref={ref}
          className={`flex justify-center items-center gap-3 ${className}`}
          type={`${type}`}
          disabled={disabled}
        >
          {props.value}
          {props.loader ? (
            <Loader
              width={props.loaderWidth}
              height={props.loaderHeight}
              borderColor={props.loaderColor}
              borderWidth={props.loaderBorderWidth}
            />
          ) : (
            ''
          )}
        </button>
      </>
    );
  }
);

ButtonLoader.displayName = 'ButtonLoader';
