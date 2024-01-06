import { Account } from '../types/model/api';
import client from './client';

export const registerAccount = async (payload: Account) => {
  const { data, status } = await client.post<Account>('/accounts/add', {
    ...payload,
  });
  return { data, status };
};

export type FetchAccountByNamePayload = {
  accountName: string;
};

export const fetchAccountByName = async (
  payload: FetchAccountByNamePayload,
) => {
  const { data, status } = await client.get<Account>('/accounts/name/id', {
    params: { ...payload },
  });
  return { account: { ...data }, status };
};

// export const fetchAccountById = async (payload: LoadAccountByIdPayload) => {
//   const { data, status } = await client.get<Account>(
//     `/accounts/${payload.accountId}`,
//     {
//       params: { ...payload },
//     },
//   );
//   return { account: { ...data }, status };
// };

export default { fetchAccountByName, registerAccount };
