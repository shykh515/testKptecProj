import { useNavigationContainerRef } from "@react-navigation/native";
import { NavigationContainerRef } from "@react-navigation/native";

export const navigationRef: NavigationContainerRef | null = useNavigationContainerRef();

export function navigate(name: string, params?: any) {
  if (navigationRef && navigationRef.isReady()) {
    if (navigationRef.getCurrentRoute()?.name !== name) {
      navigationRef.navigate(name, params);
    }
  }
}

export function navigationReset(obj: { index?: number; routes: { name: string }[] }) {
  if (navigationRef && navigationRef.isReady()) {
    if (navigationRef.getCurrentRoute()?.name !== obj.routes[0].name) {
      navigationRef.current?.reset(obj);
    }
  }
}
