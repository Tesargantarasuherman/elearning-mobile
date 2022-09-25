import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { color, fonts } from '../../../utils'

const Button = ({type,title,onPress,height,width}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title(type,height,width)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container:(type,height,width)=>({
    backgroundColor:type ==='secondary' ? 'white' : '#D43E2A',
    paddingVertical:height ? height : 5,
    paddingHorizontal:width ? width : 10,
    borderRadius:height ? height : 5,
    borderWidth:2,
    borderColor:color.background.main
  }),
  title:(type)=>({
    textAlign:'center',
    fontSize:14,
    fontFamily:fonts.primary[600],
    color:type ==='secondary' ? '#D43E2A' :'white',
  })
})