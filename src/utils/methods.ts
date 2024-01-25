import axios, { AxiosRequestConfig } from "axios";
import { Platform } from "react-native";
import Toast from "react-native-toast-message";

export const get = (url: string) => {
  const headers = {
    'app-id': '65b02c90e5da440dfa18e83c',
  };
  
  return axios.get(url , {headers});
};

export const post = (url: string, data: any, config?: AxiosRequestConfig) => {
  return axios.post(url, data, config);
};

export const put = (url: string, data: any) => {
  return axios.put(url, data);
};

export const encodeQueryData = (data: Record<string, string | number>) => {
  const ret = [];
  for (const d in data) {
    ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
  }
  return ret.join("&");
};

export const handleCommon = (
  type: string,
  title = "",
  description = "",
  otherOptions?: any
) => {
  Toast.show({
    type: type,
    text1: title,
    text2: description || "",
    ...otherOptions,
  });
};

export const handleError = (description = "", otherOptions?: any) => {
  Toast.show({
    type: "error",
    text1: "Error",
    text2: description || "Something went wrong!",
    topOffset: Platform.OS === "ios" ? 55 : 23,
    ...otherOptions,
  });
};

export const handleSuccess = (
  message = "",
  defaultDescription = "",
  otherOptions?: any
) => {
  Toast.show({
    type: "success",
    text1: "Successfully",
    text2: message || defaultDescription,
    topOffset: Platform.OS === "ios" ? 55 : 15,
    ...otherOptions,
  });
};

export const MappedElement: React.FC<{
  data: any[];
  renderElement: (obj: any, index: number, array: any[]) => React.ReactNode;
  empty?: () => React.ReactNode;
}> = ({ data, renderElement, empty }) => {
  if (data && data.length) {
    return data.map((obj, index, array) =>
      renderElement(obj, index, array)
    );
  }
  return empty ? empty() : null;
};
