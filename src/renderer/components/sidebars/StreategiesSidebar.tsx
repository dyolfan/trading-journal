import { Form } from 'react-final-form';
import classNames from 'classnames';
import React, { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';
import SearchInput from '../input/SearchInput';
import s from '../../page/StrategiesPage.module.css';
import PencilIcon from '../icons/PencilIcon';
import { Strategy } from '../../../types/model/api';
import { StoreState } from '../../store/store';

type StrategyItemProps = {
  strategy: Strategy;
};

const StrategyItem: FunctionComponent<StrategyItemProps> = ({ strategy }) => {
  const [itemHovered, setItemHovered] = useState(false);
  const [editIconHovered, setEditIconHovered] = useState(false);

  return (
    <div
      className="flex flex-row justify-between hover:bg-main"
      onMouseEnter={() => setItemHovered(true)}
      onMouseLeave={() => setItemHovered(false)}
    >
      <div className="pl-3 pr-3 pt-1 pb-1">{strategy.name}</div>
      <div
        className="flex justify-center items-center pr-3 hover:cursor-pointer"
        onMouseEnter={() => setEditIconHovered(true)}
        onMouseLeave={() => setEditIconHovered(false)}
      >
        <PencilIcon
          isHovered={editIconHovered}
          isVisible={itemHovered}
          height={16}
          width={16}
        />
      </div>
    </div>
  );
};

const StrategiesSidebar = () => {
  const accountState = useSelector((state: StoreState) => state.loadAccount);
  const strategiesList = accountState.account?.strategies || [];

  return (
    <div className="bg-main-dark text-main-white text-center col-span-2 flex border-main-dark border-solid border-r-2 flex-col items-center">
      <div className="w-3/4 flex flex-col">
        <Form<{ strategySearch: string }> onSubmit={() => {}}>
          {() => (
            <SearchInput
              name="strategySearch"
              placeholder="Strategy..."
              fullWidth
              disabled
            />
          )}
        </Form>
      </div>
      <div
        className={classNames(
          'flex flex-col text-start w-full pt-3',
          s.strategies_list_container,
        )}
      >
        {strategiesList.map((strategy) => (
          <StrategyItem strategy={strategy} />
        ))}
        {strategiesList.length === 0 && (
          <div className="w-3/4 text-center">No strategies added</div>
        )}
      </div>
    </div>
  );
};

export default StrategiesSidebar;
