import { configureStore } from '@reduxjs/toolkit';
import authorizeAccountSlice, {
  AuthorizeAccountState,
} from './action/authorizeAccountState';

export type StoreState = {
  authorizeAccount: AuthorizeAccountState;
};

const store = configureStore({
  reducer: {
    authorizeAccount: authorizeAccountSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
