import React from 'react';
import classNames from 'classnames';
import s from './Button.module.css';

export enum ButtonStyleType {
  INLINE,
  NORMAL,
}

export enum ButtonSize {
  S,
  M,
}

type ButtonProps = {
  text: string;
  styleType?: ButtonStyleType;
  type?: 'submit' | 'button';
  disabled?: boolean;
  onClick?: () => void;
  width?: string;
  buttonSize?: ButtonSize;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  styleType = ButtonStyleType.NORMAL,
  type = 'button',
  width = '120px',
  disabled = false,
  buttonSize = ButtonSize.M,
}) => {
  let buttonClass = s.button_normal;
  if (styleType === ButtonStyleType.INLINE) {
    buttonClass = s.button_inline;
  }
  if (buttonSize === ButtonSize.S) {
    buttonClass = classNames(buttonClass, s.button_s);
  }

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={classNames(s.button, buttonClass)}
      style={{ width }}
      disabled={disabled}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {text}
    </button>
  );
};

export default Button;
