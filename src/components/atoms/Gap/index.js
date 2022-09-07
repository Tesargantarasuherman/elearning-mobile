import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Gap = ({height,width}) => {
  return (
    <View style={styles.container(height,width)}>
    </View>
  )
}

export default Gap

const styles = StyleSheet.create({
    container:(height,width)=>({
        height:height,
        width:width
    })
}) 