import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import BottomTransition from '@routes/Transitions/BottomTransition';
import LeftTransition from '@routes/Transitions/LeftTransition';

import Home from '@screens/Home/Home';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        detachPreviousScreen: true,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default MainStack;
