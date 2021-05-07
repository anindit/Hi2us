import React, {createContext, FC, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /*
   * Used to initial checking of selected theme from the AsyncStorage
   * and overrides the theme state
   */
  useEffect(() => {
    loginCheck();
  }, []);

  /**
   *
   * Method used to check login
   */
  async function loginCheck() {
    try {
      let isAuth = await AsyncStorage.getItem('isLoggedIn');

      if (isAuth === 'true') {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log('Unable to check login session');
    }
  }

  /*
   * Used to signin
   * Update the AsyncStorage with the signin value
   * and overrides the isLoggedIn state
   */
  const signIn = async () => {
    try {
      let isAuth = await AsyncStorage.getItem('isLoggedIn');
      if (isAuth === 'true') {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log('Unable to update login session');
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.setItem('isLoggedIn', '2').then(() => {
        setIsLoggedIn(false);
      });
    } catch (error) {
      console.log('Unable to update login session');
    }
  };

  return (
    <AuthContext.Provider
      value={{isLoggedIn, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
export default AuthProvider;
