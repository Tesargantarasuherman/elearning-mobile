import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { color } from '../../../utils'

const Button = ({type,title,onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container:(type)=>({
    backgroundColor:type ==='secondary' ? 'white' : '#D43E2A',
    paddingVertical:5,
    paddingHorizontal:20,
    borderRadius:10,
    borderWidth:2,
    borderColor:color.background.main
  }),
  title:(type)=>({
    textAlign:'center',
    fontSize:16,
    fontWeight:'600',
    color:type ==='secondary' ? '#D43E2A' :'white',
  })
})