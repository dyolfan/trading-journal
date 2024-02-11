import { configureStore } from '@reduxjs/toolkit';
import authorizeAccountActions, {
  AuthorizeAccountState,
} from './action/authorizeAccountState';
import registerAccountActions, {
  RegisterAccountState,
} from './action/registerAccount';

export type StoreState = {
  authorizeAccount: AuthorizeAccountState;
  registerAccount: RegisterAccountState;
};

const store = configureStore({
  reducer: {
    authorizeAccount: authorizeAccountActions,
    registerAccount: registerAccountActions,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
