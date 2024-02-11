import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { getFromStorage, Storages } from '../persistence/storages';
import { loadAccountById } from '../store/action/loadAccount';
import { AppDispatch, StoreState } from '../store/store';
import ROUTES from '../routes';

export type AccountPrivderProps = {
  children: ReactNode;
};

const AccountProvider: FunctionComponent<AccountPrivderProps> = ({
  children,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const loadAccountState = useSelector(
    (state: StoreState) => state.loadAccount,
  );
  const navigate = useNavigate();
  const authorizedAccountId = getFromStorage(Storages.ACCOUNT_ID);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (authorizedAccountId) {
      dispatch(loadAccountById({ accountId: authorizedAccountId }));
    }
  }, [authorizedAccountId, dispatch]);

  useEffect(() => {
    if (loadAccountState.isLoaded && loadAccountState.account) {
      navigate(ROUTES.STRATEGIES);
    } else if (!loadAccountState.isLoading || loadAccountState.isFailed) {
      navigate(ROUTES.HOME);
    }
  }, [
    loadAccountState.account,
    loadAccountState.isFailed,
    loadAccountState.isLoaded,
    loadAccountState.isLoading,
    navigate,
  ]);

  useEffect(() => {
    if (loadAccountState.isLoading) {
      setShowLoader(true);
    }
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [loadAccountState.isLoading]);

  if (showLoader || loadAccountState.isLoading) {
    return (
      <div
        style={{ height: '100vh' }}
        className="flex flex-col justify-center items-center"
      >
        <div style={{ marginLeft: '-30px' }}>
          <PropagateLoader color="#212121" size={30} />
        </div>
        <div className="mt-20 text-main-dark text-3xl">Logging in</div>
      </div>
    );
  }

  return children;
};

export default AccountProvider;
