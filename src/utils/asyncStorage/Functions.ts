import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN, USER } from "./Constants";

export const _setDataToAsyncStorage = async (key: string, data: any) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    console.log('error', error);
  }
};

export const getValueIntoAsyncStorage = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? value : null;
  } catch (error) {
    // Error retrieving data
    return null;
  }
};

export const getTokenAndSetIntoHeaders = async (token?: string) => {
  if (token) {
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;
  } else {
    let accessToken = await getValueIntoLocalStorage(TOKEN);

    if (accessToken) {
      axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
    }
  }
};

export const removeUserDetail = async () => {
  await AsyncStorage.removeItem(TOKEN);
};

export const getValueIntoLocalStorage = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? value : null;
  } catch (error) {
    // Error retrieving data
    return null;
  }
};

export const getToken = async (value?: string): Promise<string | null> => {
  let token;

  if (value) {
    token = value;
  } else {
    token = await getValueIntoLocalStorage(TOKEN);
  }

  if (token !== null) {
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    return token;
  } else {
    return null;
  }
};
