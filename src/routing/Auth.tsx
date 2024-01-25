import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { getValueIntoAsyncStorage } from '../utils/asyncStorage/Functions';
import { Text } from 'react-native';
import CButton from '../components/cButton/cButton';
import { Login, Register } from '../pages/Auth';

interface AuthProps {
}

export const Stack = createStackNavigator();

const Auth: React.FC<AuthProps> = () => {
  const dispatch = useDispatch();

  

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />

      {/* Add other screens as needed */}
    </Stack.Navigator>
  );
};

export default React.memo(Auth);
