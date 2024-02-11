import classNames from 'classnames';
import React from 'react';
import { Field, FieldInputProps } from 'react-final-form';
import Select, { GroupBase } from 'react-select';
import s from './Input.module.css';

export type DropdownSelectValue<T> = {
  label: string;
  value: T;
};

type BaseSelectProps = {
  label: string;
  options: object[];
  isMulti?: boolean;
};

type DropdownSelectProps = {
  name: string;
} & BaseSelectProps;

type SelectWithLabelProps = {
  input: FieldInputProps<string, HTMLElement>;
} & BaseSelectProps;

const selectorStyles = {
  control: (baseStyle: any) => ({
    ...baseStyle,
    minHeight: '30px',
    height: '30px',
    fontSize: '16px',
  }),
  valueContainer: (baseStyle: any) => ({
    ...baseStyle,
    minHeight: '30px',
    height: '30px',
    marginTop: '0',
    paddingTop: '0',
    paddingLeft: '4px',
  }),
  indicatorsContainer: (baseStyle: any) => ({
    ...baseStyle,
    minHeight: '30px',
    height: '30px',
  }),
  singleValue: (baseStyle: any) => ({
    ...baseStyle,
    fontSize: '16px',
  }),
  input: (baseStyle: any) => ({
    ...baseStyle,
    margin: '0',
  }),
};

const SelectWithLabel: React.FunctionComponent<SelectWithLabelProps> = ({
  input,
  label,
  options,
}) => {
  return (
    <div className={s.input_container}>
      <label htmlFor={input.name} className={classNames(s.input_label)}>
        {label}
      </label>
      <Select
        inputValue=""
        className={s.dropdown_input}
        {...input}
        options={options as unknown as GroupBase<string>[]}
        styles={selectorStyles}
      />
    </div>
  );
};

const DropdownSelect: React.FunctionComponent<DropdownSelectProps> = ({
  name,
  label,
  options,
  isMulti = false,
}) => (
  <Field
    name={name}
    render={({ input }) => (
      <SelectWithLabel
        isMulti={isMulti}
        input={input}
        options={options}
        label={label}
      />
    )}
  />
);

export default DropdownSelect;
