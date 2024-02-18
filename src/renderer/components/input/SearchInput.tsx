import React, { FunctionComponent } from 'react';
import { Field } from 'react-final-form';
import classNames from 'classnames';
import s from './Input.module.css';

type SearchInputProps = {
  label?: string;
  name: string;
  placeholder?: string;
  fullWidth?: boolean;
  disabled?: boolean;
};

const SearchInput: FunctionComponent<SearchInputProps> = ({
  label,
  name,
  placeholder,
  fullWidth,
  disabled,
}) => {
  let inputFieldClass = s.input_field;
  if (!label && fullWidth) {
    inputFieldClass = classNames(
      inputFieldClass,
      s.input_field_full_width,
      s.input_grey,
    );
  }

  return (
    <Field
      name={name}
      render={({ input }) => (
        <div className={s.input_container}>
          {label && (
            <label htmlFor={input.name} className={classNames(s.input_label)}>
              {label}
            </label>
          )}
          <input
            className={inputFieldClass}
            placeholder={placeholder}
            disabled={disabled}
            {...input}
          />
        </div>
      )}
    />
  );
};

export default SearchInput;
