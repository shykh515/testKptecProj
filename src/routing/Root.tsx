import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  TabBar  from './Tabbar';
import { Text } from 'native-base';
import Wheater from '../pages/Wheater';
import Home from '../pages/Protected/Home/Home';
import ProfileScreen from '../pages/Protected/Profile/Profile';
// import { Home, Weather, Settings } from '../pages/Protected';

const Tab = createBottomTabNavigator();

const Root = ({ initial }: { initial: boolean }) => {
 
  return (
    <Tab.Navigator
      initialRouteName={!initial ? 'Home' : 'Settings'}
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Weather" component={Wheater} />
      <Tab.Screen name="Settings" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default React.memo(Root);
