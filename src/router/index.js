import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Blog, GetStarted, SignIn, SignUp, Splash } from '../pages';
import ProfilePicture from '../pages/ProfilePicture';

const Stack = createNativeStackNavigator();

const Router =()=>{
    return (
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
          <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}} />
          <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
          <Stack.Screen name="ProfilePicture" component={ProfilePicture} options={{headerShown:true}} />
          <Stack.Screen name="Blog" component={Blog} options={{headerShown:true}} />
        </Stack.Navigator>
      );
}
export default Router;