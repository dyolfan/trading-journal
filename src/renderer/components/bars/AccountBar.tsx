import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from './AccountBar.module.css';
import Logo from '../../../../assets/image/TJ_Logo_w_nbg.png';
import Button, { ButtonStyleType } from '../buttons/Button';
import routes from '../../routes';
import { AppDispatch, StoreState } from '../../store/store';
import { authorizeAccountSlice } from '../../store/action/authorizeAccountState';
import { loadAccountSlice } from '../../store/action/loadAccount';

const AccountBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const loadAccountState = useSelector(
    (state: StoreState) => state.loadAccount,
  );

  return (
    <div className={s.account_bar_container}>
      <div className={s.currency_container}>
        {loadAccountState.isLoaded && loadAccountState.account?.currency}
      </div>
      <div className={s.logo_container}>
        <img src={Logo} alt="logo" className={s.logo} />
      </div>
      <div className={s.account_info_container}>
        {loadAccountState.isLoaded && (
          <>
            <div className="col-span-2">{loadAccountState.account?.name}</div>
            <div className="col-span-3 flex justify-end">
              <Button
                text="Change account"
                width="160px"
                styleType={ButtonStyleType.INLINE}
                onClick={() => {
                  dispatch(
                    authorizeAccountSlice.actions.authorizeAccountClear(),
                  );
                  dispatch(loadAccountSlice.actions.loadAccountClear());
                  navigate(routes.HOME);
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AccountBar;
