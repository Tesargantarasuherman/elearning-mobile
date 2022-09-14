import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Blog, Class, GetStarted, Home, SignIn, SignUp, Splash } from '../pages';
import ProfilePicture from '../pages/ProfilePicture';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props=><BottomNavigator{...props}/>}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Class" component={Class} />
      <Tab.Screen name="Blog" component={Blog} />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='MainApp'>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="ProfilePicture" component={ProfilePicture} options={{ headerShown: true, title: 'Profile Picture' }} />
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
export default Router;