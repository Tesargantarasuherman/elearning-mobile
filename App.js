import React from 'react'
import { StyleSheet } from 'react-native'
import { GetStarted, Splash } from './src/pages'
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

const App = () => {
  return (
    <NavigationContainer>
    
     {/* <Splash /> */}
      <Router />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

})