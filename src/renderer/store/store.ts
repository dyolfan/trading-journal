import { configureStore } from '@reduxjs/toolkit';
import authorizeAccountActions, {
  AuthorizeAccountState,
} from './action/authorizeAccountState';
import registerAccountActions, {
  RegisterAccountState,
} from './action/registerAccount';
import loadAccountActions, { LoadAccountState } from './action/loadAccount';

export type StoreState = {
  authorizeAccount: AuthorizeAccountState;
  registerAccount: RegisterAccountState;
  loadAccount: LoadAccountState;
};

const store = configureStore({
  reducer: {
    authorizeAccount: authorizeAccountActions,
    registerAccount: registerAccountActions,
    loadAccount: loadAccountActions,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
