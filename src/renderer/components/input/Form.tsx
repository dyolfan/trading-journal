import { FormApi, SubmissionErrors, ValidationErrors } from 'final-form';
import React from 'react';
import { Form } from 'react-final-form';
import { PropagateLoader } from 'react-spinners';
import classNames from 'classnames';
import s from './Input.module.css';

export type FormPropsOnSubmit<T> = (
  values: T,
  form: FormApi<T, Partial<T>>,
  callback?: (errors?: SubmissionErrors) => void,
) => SubmissionErrors | Promise<SubmissionErrors> | void;

export interface FormChildProps<T> {
  form: FormApi<T>;
}

export interface FormProps<T> {
  children: React.FunctionComponent<FormChildProps<T>>;
  onSubmit: FormPropsOnSubmit<T>;
  validate?: (values: T) => ValidationErrors | Promise<ValidationErrors>;
  formClassName?: string;
}

export interface MyFormComp<T> extends React.FunctionComponent<FormProps<T>> {}

const MyForm = <T,>({
  onSubmit,
  children,
  validate,
  formClassName,
}: FormProps<T>) => {
  return (
    <Form
      onSubmit={onSubmit}
      destroyOnUnregister
      validate={validate}
      render={({ handleSubmit, form }) => (
        <form
          className={classNames(s.form_container, formClassName)}
          onSubmit={handleSubmit}
        >
          {children({ form })}
        </form>
      )}
    />
  );
};
export const FormLoader: React.FunctionComponent = () => (
  <div className={s.form_loader_wrapper}>
    <div>
      <PropagateLoader color="white" />
    </div>
  </div>
);

export default MyForm;
