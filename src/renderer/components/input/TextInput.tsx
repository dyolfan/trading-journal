import React from 'react';
import { Field } from 'react-final-form';
import classNames from 'classnames';
import s from './Input.module.css';

interface InputProps {
  label?: string;
  value?: string | number | readonly string[] | undefined;
  name: string;
}

const TextInput: React.FC<InputProps> = ({ label, name }) => {
  return (
    <Field
      name={name}
      render={({ input }) => (
        <div className={classNames(s.input_container)}>
          {label && (
            <label htmlFor={input.name} className={classNames(s.input_label)}>
              {label}
            </label>
          )}
          <input className={classNames(s.input_field)} {...input} />
        </div>
      )}
    />
  );
};

export default TextInput;
