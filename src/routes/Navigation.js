import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuthContext} from '../context/AuthContext';
import {DrawerContent} from './DrawerContent';

import AuthStack from '../routes/AuthStack';
import MainStack from '../routes/MainStack';

export default function NavigationRoute() {
  const {isLoggedIn} = useAuthContext();

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <AuthStack />
      ) : (
        <MainStack />
      )}
    </NavigationContainer>
  );
}
