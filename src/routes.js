
import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Home from './components/home/index';
import Favorites from './components/favorites/index';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMat from 'react-native-vector-icons/MaterialIcons';

const Routes = createAppContainer(
  createBottomTabNavigator({
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ TintColor }) => (
          <IconMat name='favorite' size={24} />
        )
      }
   },

   Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-home'  size={24} />
      )
    }
  },
  })
);

export default Routes;
