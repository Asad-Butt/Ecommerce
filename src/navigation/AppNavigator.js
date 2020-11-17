import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SplashScreen from '../screens/initialsScreens/SplashScreen';
import LoginScreen from '../screens/initialsScreens/LoginScreen';
import SignUpScreen from '../screens/initialsScreens/SignUpScreen';
import HomeScreen from '../screens/DrawerScreens/HomeScreen';
import OrderScreen from '../screens/DrawerScreens/OrderScreen';
import AccountsScreen from '../screens/DrawerScreens/AccountsScreen';
import ChatsScreen from '../screens/DrawerScreens/ChatsScreen';
import DrawerComponent from '../components/navigation/DrawerComponent';
import {Colors} from '../utils/colors';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function LoginStack() {
  return (
    <Stack.Navigator
      headerMode={false}
      initialRouteName={'LoginScreen'}
      screenOptions={{
        gestureEnabled: true,
        headerBackTitleVisible: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: Colors.primary,
        width: 240,
      }}
      initialRouteName="HomeScreen"
      overlayColor={10}
      drawerContent={(props) => <DrawerComponent {...props} />}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="OrderScreen" component={OrderScreen} />
      <Drawer.Screen name="ChatsScreen" component={ChatsScreen} />
      <Drawer.Screen name="AccountsScreen" component={AccountsScreen} />
    </Drawer.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={false}
        initialRouteName={'SplashScreen'}
        screenOptions={{
          gestureEnabled: true,
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginStack" component={LoginStack} />
        <Stack.Screen name="DrawerStack" component={DrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
