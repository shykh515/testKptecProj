import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Root from './src/routing/Root';
import Auth from './src/routing/Auth';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themes } from './src/theme/colors';
import messaging from '@react-native-firebase/messaging';

const App: React.FC = () => {
  const {userData}  = useSelector(state => state.UserProfileSlice);
  const { access_token , user } = userData?.session || {}
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;

  useEffect(()=>{
    requestUserPermission()
  })

  
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getFcmToken()
    console.log('Authorization status:', authStatus);
  }
}


const getFcmToken = async () => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
      console.log(fcmToken);
      console.log("Your Firebase Token is:", fcmToken);
  } else {
      console.log("Failed", "No Token Recived");
  }
};

  return (
    <View style={{flex: 1}}>
    <SafeAreaView
      style={{
        width: WIDTH,
        height: HEIGHT,
        flex: 1,
      }}>
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor={themes.light.colors.lightBorderColor}
          barStyle="light-content"
        />
        {!access_token ? <Auth /> :<Root initial={false} />}
      </View>
    </SafeAreaView>
  </View>
  )
};

export default App;

const styles = StyleSheet.create({});
