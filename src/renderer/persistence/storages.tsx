export enum Storages {
  ACCOUNT_ID = 'account-id',
}

export const addToStorage = (name: Storages, value: string) => {
  window.electron.store.set(name, value);
};

export const getFromStorage = (name: Storages) => {
  return window.electron.store.get(name);
};

export const resetFromStorage = (name: Storages) => {
  return window.electron.store.reset(name);
};
