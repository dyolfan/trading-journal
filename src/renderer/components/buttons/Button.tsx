import React from 'react';
import classNames from 'classnames';
import s from './Button.module.css';

export enum ButtonStyleType {
  INLINE,
  NORMAL,
}

type ButtonProps = {
  text: string;
  styleType?: ButtonStyleType;
  type?: 'submit' | 'button';
  disabled?: boolean;
  onClick?: () => void;
  width?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  styleType = ButtonStyleType.NORMAL,
  type = 'button',
  width = '120px',
  disabled = false,
}) => {
  let buttonClass = s.button_normal;
  if (styleType === ButtonStyleType.INLINE) {
    buttonClass = s.button_inline;
  }

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={classNames('button', buttonClass)}
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
