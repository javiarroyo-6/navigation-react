// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import HomeScreen from './src/Screens/HomeScreen';
import MenuScreen from './src/Screens/MenuScreen';
import Ionicons from '@expo/vector-icons';
// import ProfileScreen from './src/Screens/ProfileScreen';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const Tab = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Menu: MenuScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

export default createAppContainer(Tab);

// const Tab = createBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeScreen
//     },
//     Menu: {
//       screen: MenuScreen
//     },
//     Profile: {
//       screen: ProfileScreen
//     }
//   },
//   {
//     tabBarPosition: 'bottom',
//     swipeEnabled: true,
//     tabBarOptions: {

//       activeTintColor: '#f2f2f2',
//       activeBackgroundColor: '#2EC4B6',
//       inactiveTintColor: '#666',
//       labelStyle: {
//         fontSize: 20,
//         padding: 5
//       }
//     }
//   }
// );

// export default createAppContainer(Tab);
