/**
 * @format
 */

import App from './App';
import React from 'react';

import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {AppRegistry, LogBox, StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {navigationRef} from './src/routing/Ref';
import {themes} from './src/theme/colors';
import {GestureHandlerRootView} from 'react-native-gesture-handler';


import  store  from './src/redux/store';

LogBox.ignoreAllLogs();

const theme = {
  colors: {
    background: themes.light.colors.backgroundColor,
  },
};



const Container = () => {

  return (
    <>
        <NavigationContainer theme={theme} ref={navigationRef}>
          <App />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
    </>
  );
};

function MobileApp() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          animated={true}
          barStyle={'dark-content'}
        />
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <Container />
        </SafeAreaProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

AppRegistry.registerComponent(appName, () => MobileApp);
