import React, { FunctionComponent } from 'react';
import AccountBar from '../components/bars/AccountBar';
import MenuBar from '../components/bars/MenuBar';
import ButtonsBar from '../components/bars/ButtonsBar';
import Button, {
  ButtonSize,
  ButtonStyleType,
} from '../components/buttons/Button';
import StrategiesSidebar from '../components/sidebars/StreategiesSidebar';
import pS from './Pages.module.css';

export type StrategiesPageProps = {};
const StrategiesPage: FunctionComponent<StrategiesPageProps> = () => {
  return (
    <div>
      <AccountBar />
      <div className={pS.page_content_container}>
        <MenuBar />
        <ButtonsBar>
          <Button
            text="Add"
            width="100px"
            styleType={ButtonStyleType.INLINE}
            buttonSize={ButtonSize.S}
          />
        </ButtonsBar>
        <div className="grid grid-cols-12 h-full">
          <StrategiesSidebar />
          <div className="p-5 pl-24 pr-24 col-span-10 h-full grid">
            <div className="bg-main-white text-center">Content</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategiesPage;
