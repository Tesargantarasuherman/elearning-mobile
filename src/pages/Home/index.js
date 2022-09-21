import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from '../../utils'

const Home = () => {
  return (
    <View style={styles.body}>
      <View>
        <Text>Hello</Text>
        <Text style={styles.profileName}>Tesar Gantara Suherman</Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    padding: 40
  },
  profileName: {
    fontSize: 18,
    fontFamily: fonts.primary[900]
  }
})