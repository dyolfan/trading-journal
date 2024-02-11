import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  callGetAccountById,
  GetAccountByIdPayload,
} from '../../client/accountClient';
import { addToStorage, Storages } from '../../persistence/storages';
import { Account } from '../../types/model/api';

export type LoadAccountState = {
  isLoading: boolean;
  isLoaded: boolean;
  isFailed: boolean;
  account?: Account;
};

const initialState = {
  isLoading: false,
  isLoaded: false,
  isFailed: false,
  account: undefined,
};

export const loadAccountSlice = createSlice({
  name: 'loadAccount',
  initialState,
  reducers: {
    loadAccountStarted: (state: LoadAccountState) => {
      state.isLoading = true;
      state.isLoaded = false;
    },
    loadAccountSuccess: (state: LoadAccountState, action) => {
      state.isLoading = false;
      state.isLoaded = true;
      state.isFailed = false;
      state.account = action.payload;
    },
    loadAccountFailed: (state: LoadAccountState) => {
      state.isLoading = false;
      state.isLoaded = false;
      state.isFailed = true;
    },
    loadAccountClear: (state: LoadAccountState) => {
      state.isLoading = initialState.isLoading;
      state.isLoaded = initialState.isLoaded;
      state.isFailed = initialState.isFailed;
      state.account = initialState.account;
    },
  },
});

export const loadAccountById = createAsyncThunk(
  'account/load',
  async (payload: GetAccountByIdPayload, api) => {
    api.dispatch(loadAccountSlice.actions.loadAccountStarted());
    callGetAccountById(payload)
      .then(({ account }) => {
        api.dispatch(loadAccountSlice.actions.loadAccountSuccess(account));
        addToStorage(Storages.ACCOUNT_ID, account.id || '');
        return new Promise((resolve) => {
          resolve(null);
        });
      })
      .catch(() => api.dispatch(loadAccountSlice.actions.loadAccountFailed()));
  },
);

export default loadAccountSlice.reducer;
