// import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SignUpScreen from '../screens/SignUpScreen';
import BridgeScreen from '../screens/BridgeScreen';

// Implementation of all the screens declared in ./MainTabNavigator
// import MainTabNavigator from './MainTabNavigator';

const AppStack = createStackNavigator({ Home: HomeScreen, Bridge: BridgeScreen});
const AuthStack = createStackNavigator({ SignIn: SignInScreen, SignUp: SignUpScreen});

export default createAppContainer(createSwitchNavigator(
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
    // Main: MainTabNavigator
  }
));