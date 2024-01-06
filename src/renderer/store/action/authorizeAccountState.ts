import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchAccountByName,
  FetchAccountByNamePayload,
} from '../../client/accountClient';

export type AuthorizeAccountState = {
  isLoading: boolean;
  isLoaded: boolean;
  isFailed: boolean;
  accountId?: string;
};

const initialState = {
  isLoading: false,
  isLoaded: false,
  isFailed: false,
  accountId: undefined,
};

export const authorizeAccountSlice = createSlice({
  name: 'authorizeAccount',
  initialState,
  reducers: {
    authorizeAccountStarted: (state: AuthorizeAccountState) => {
      state.isLoading = true;
      state.isLoaded = false;
    },
    authorizeAccountSuccess: (state: AuthorizeAccountState, action) => {
      state.isLoading = false;
      state.isLoaded = true;
      state.isFailed = false;
      state.accountId = action.payload;
    },
    authorizeAccountFailed: (state: AuthorizeAccountState) => {
      state.isLoading = false;
      state.isLoaded = false;
      state.isFailed = true;
    },
    authorizeAccountClear: (state: AuthorizeAccountState) => {
      state.isLoading = initialState.isLoading;
      state.isLoaded = initialState.isLoaded;
      state.isFailed = initialState.isFailed;
      state.accountId = initialState.accountId;
    },
  },
});

export const loadAccountByName = createAsyncThunk(
  'account/authorize',
  async (payload: FetchAccountByNamePayload, api) => {
    api.dispatch(authorizeAccountSlice.actions.authorizeAccountStarted());
    fetchAccountByName(payload)
      .then(({ account }) => {
        api.dispatch(
          authorizeAccountSlice.actions.authorizeAccountSuccess(account.id),
        );
        // eslint-disable-next-line promise/no-return-wrap
        return Promise.resolve();
      })
      .catch(() =>
        api.dispatch(authorizeAccountSlice.actions.authorizeAccountFailed()),
      );
  },
);

export default authorizeAccountSlice.reducer;
