import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { LLogo } from '../../assets'

const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout(() => {
      navigation.replace('GetStarted')
    }, 3000);
  },[])
    return (
        <View style={styles.body}>
          <LLogo/> 
          <Text style={styles.title}>Japanese Learning</Text>
        </View>
      )
}

export default Splash

const styles = StyleSheet.create({
    body:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    title:{
      fontSize:18,
      fontWeight:'600',
      color:'#D43E2A',
    }
  })