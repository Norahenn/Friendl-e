// import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignInScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SignUpScreen from '../screens/SignUpScreen';
import BridgeScreen from '../screens/BridgeScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import ChatScreen from '../screens/ChatScreen';
import UserDataScreen from '../screens/UserDataScreen';

// Implementation of all the screens declared in ./MainTabNavigator
// import MainTabNavigator from './MainTabNavigator';

const BridgeStack = createStackNavigator({Bridge: BridgeScreen});
const AuthStack = createStackNavigator({SignIn: SignInScreen, SignUp: SignUpScreen});
const DataStack = createStackNavigator({Bridge: BridgeScreen, Account: UserAccountScreen, User: UserDataScreen})
const ChatStack = createStackNavigator({Bridge: BridgeScreen, ChatLog: ChatScreen});
const CurrentlyWorkingOn = createStackNavigator({CurrentScreen: UserDataScreen});

export default createAppContainer(createSwitchNavigator(
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  {
    AuthLoading: AuthLoadingScreen,
    Bridge: BridgeStack,
    Auth: AuthStack,
    Data: DataStack,
    Chat: ChatStack,
    Current: CurrentlyWorkingOn

  },
  {
    initialRouteName: 'Auth',
    // Main: MainTabNavigator
  }
));