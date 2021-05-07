/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, {useEffect} from 'react';
 import RNBootSplash from 'react-native-bootsplash';

import AuthProvider from './src/context/AuthContext';
import NavigationRoute from './src/routes/Navigation';

const App= () => {

  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
    });
  }, []);
  return (
    <AuthProvider>
      <NavigationRoute />
    </AuthProvider>
  );
};


export default App;
