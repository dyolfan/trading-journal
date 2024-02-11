import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  callRegisterAccount,
  RegisterAccountPayload,
} from '../../client/accountClient';

export type RegisterAccountState = {
  isLoading: boolean;
  isComplete: boolean;
  isFailed: boolean;
};

const initialState = {
  isLoading: false,
  isComplete: false,
  isFailed: false,
};

export const registerAccountSlice = createSlice({
  name: 'registerAccount',
  initialState,
  reducers: {
    registerAccountStarted: (state: RegisterAccountState) => {
      state.isLoading = true;
      state.isComplete = false;
    },
    registerAccountSuccess: (state: RegisterAccountState) => {
      state.isLoading = false;
      state.isComplete = true;
      state.isFailed = false;
    },
    registerAccountFailed: (state: RegisterAccountState) => {
      state.isLoading = false;
      state.isComplete = false;
      state.isFailed = true;
    },
    registerAccountClear: (state: RegisterAccountState) => {
      state.isLoading = initialState.isLoading;
      state.isComplete = initialState.isComplete;
      state.isFailed = initialState.isFailed;
    },
  },
});

export const registerAccount = createAsyncThunk(
  'account/register',
  async (payload: RegisterAccountPayload, api) => {
    api.dispatch(registerAccountSlice.actions.registerAccountStarted());
    callRegisterAccount(payload)
      .then(() => {
        api.dispatch(registerAccountSlice.actions.registerAccountSuccess());
        return null;
      })
      .catch(() =>
        api.dispatch(registerAccountSlice.actions.registerAccountFailed()),
      );
  },
);

export default registerAccountSlice.reducer;
