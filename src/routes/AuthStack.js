import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Auth/Login';
import Welcome from '../screens/Welcome/Welcome';
import React from 'react';
import Signup from '../screens/Auth/Signup';
import Forgetpassword from '../screens/Auth/Forgetpassword';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="Login"
        component={Login}        
      />
      <Stack.Screen
        name="Signup"
        component={Signup}       
      />
      <Stack.Screen
        name="Forgetpassword"
        component={Forgetpassword}        
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
