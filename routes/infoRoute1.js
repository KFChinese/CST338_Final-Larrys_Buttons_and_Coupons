/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import InfoRoute1 from '../components/inforoute1';
import Header from '../components/header';

const screen = {
  Login: {
    screen: InfoRoute1,
    navigationOptions: ({ navigation }) => ({
      headerTitle: () => {
        <Header title="" navigation={navigation} />;
      },
    }),
  },
};
const infoRoute1 = createStackNavigator(screen, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
  },
});
export default infoRoute1;
