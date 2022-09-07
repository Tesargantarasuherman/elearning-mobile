import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = ({label,placeholder}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container:{
    },
    label:{
        fontWeight:'bold',
        fontSize: 16,
        marginVertical:5
    },
    input:{
        borderRadius:5,
        borderWidth:1,
        borderColor:'#E9E9E9',
        paddingLeft:10
    }
})