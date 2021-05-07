import React from 'react';
import {View} from 'react-native';

import Header from '../Header/Header';
import Content from '../Content/Content';

/*
 * import main layout style sheet
 *
 */
//import style from '../screens/Layout/MainLayout/style';

const MainLayout = ({navigation, children}) => {
  return (
    <View>
      <Header />
      <Content>{children}</Content>
    </View>
  );
};

export default MainLayout;
