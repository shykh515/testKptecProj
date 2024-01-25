import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const reduxStorage = {
  setItem: (key: string, value: any): Promise<boolean> => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string): Promise<string | null> => {
    const value = storage.getString(key) ?? null;
    return Promise.resolve(value);
  },
  removeItem: (key: string): Promise<void> => {
    storage.delete(key);
    return Promise.resolve();
  },
};

export default reduxStorage;
