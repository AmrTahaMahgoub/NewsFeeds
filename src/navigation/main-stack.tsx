import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MainAppStackTypes} from './navigation-types';
import {Home, Splash, Details} from '../screens';

const MainStack = () => {
  const Stack = createNativeStackNavigator<MainAppStackTypes>();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default MainStack;
