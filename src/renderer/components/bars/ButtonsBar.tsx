import { FunctionComponent, ReactNode } from 'react';

export type ButtonsBarProps = {
  children?: ReactNode[] | ReactNode;
};

const ButtonsBar: FunctionComponent<ButtonsBarProps> = ({ children }) => {
  return (
    <div className="flex flex-row bg-main-dark pt-1 pb-1 pl-10 pr-10">
      {children}
    </div>
  );
};

export default ButtonsBar;
