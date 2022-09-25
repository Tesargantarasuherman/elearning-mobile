import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fonts } from '../../utils'
import { Input } from '../../components'
import { IconSearch, IconSort } from '../../assets'

const Home = () => {
  return (
    <View style={styles.body}>
      <View>
        <Text>Hello,</Text>
        <Text style={styles.profileName}>Tesar Gantara Suherman</Text>
      </View>
      <View style={styles.input}>
        <IconSearch />
        <TextInput placeholder='Discover' style={styles.textInput} />
        <IconSort onPress={()=>alert('Jalan')}/>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 40
  },
  profileName: {
    fontSize: 18,
    fontFamily: fonts.primary[900],
    marginBottom:40
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#dddddd',
    borderWidth: 1,
    maxHeight: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  textInput: {
    flex: 1
  }
})