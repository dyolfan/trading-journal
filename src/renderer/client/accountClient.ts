import { Account } from '../types/model/api';
import client from './client';

export type RegisterAccountPayload = {
  account: Account;
};

export const callRegisterAccount = async (payload: RegisterAccountPayload) => {
  const { data, status } = await client.post<Account>(
    '/accounts/add',
    payload.account,
  );

  return new Promise<{ data: Account; status: number }>((resolve) => {
    resolve({ data, status });
  });
};

export type FetchAccountByNamePayload = {
  accountName: string;
};

export const callGetAccountByName = async (
  payload: FetchAccountByNamePayload,
) => {
  const { data, status } = await client.get<Account>('/accounts/name/id', {
    params: { ...payload },
  });

  return new Promise<{ account: Account; status: number }>((resolve) => {
    resolve({ account: { ...data }, status });
  });
};

export type GetAccountByIdPayload = {
  accountId: string;
};

export const callGetAccountById = async (payload: GetAccountByIdPayload) => {
  const { data, status } = await client.get<Account>(
    `/accounts/${payload.accountId}`,
  );

  return new Promise<{ account: Account; status: number }>((resolve) => {
    resolve({ account: { ...data }, status });
  });
};

export default { callGetAccountByName, callRegisterAccount };
