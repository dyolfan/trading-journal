import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import s from './AccountBar.module.css';
import Logo from '../../../../assets/image/TJ_Logo_w_nbg.png';
import Button, { ButtonStyleType } from '../buttons/Button';
import routes from '../../routes';
import { AppDispatch } from '../../store/store';
import { authorizeAccountSlice } from '../../store/action/authorizeAccountState';

const AccountBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={s.account_bar_container}>
      <div className={s.currency_container}>USD</div>
      <div className={s.logo_container}>
        <img src={Logo} alt="logo" className={s.logo} />
      </div>
      <div className={s.account_info_container}>
        <div className="col-span-2">Big account name</div>
        <div className="col-span-3 flex justify-end">
          <Button
            text="Change account"
            width="160px"
            styleType={ButtonStyleType.INLINE}
            onClick={() => {
              dispatch(authorizeAccountSlice.actions.authorizeAccountClear());
              navigate(routes.HOME);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountBar;
