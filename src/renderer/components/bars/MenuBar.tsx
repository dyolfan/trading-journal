import { FunctionComponent, ReactNode } from 'react';
import s from './MenuBar.module.css';

type MenuTabProps = {
  children: ReactNode;
  onClick: () => void;
};

const MenuTab: FunctionComponent<MenuTabProps> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      onKeyUp={() => {}}
      tabIndex={0}
      role="button"
      className={s.tab}
    >
      {children}
    </div>
  );
};

const MenuBar = () => {
  return (
    <div className="bg-main-dark mt-1.5 mb-0.5 h-10 grid grid-cols-5 border-t-2 border-b-2 border-main-dark">
      <div className="col-span-4 grid grid-cols-6">
        <MenuTab onClick={() => console.log('Click strategies')}>
          Strategies
        </MenuTab>
        <MenuTab onClick={() => console.log('Click trades')}>Trades</MenuTab>
      </div>
      <div className="col-span-1 grid">
        <MenuTab onClick={() => console.log('Click settings')}>
          Account settings
        </MenuTab>
      </div>
    </div>
  );
};

export default MenuBar;
