import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconBack } from '../../../assets'
import { Gap } from '../../atoms'
import { LLogo } from '../../../assets'

const Header = ({title,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
      <IconBack style={{color:'red'}}/>   
      <Text style={styles.text(title)}>
        {title}
      </Text>
      <Gap width={40}/>
    </TouchableOpacity>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems:'center',
    paddingVertical:10,
    paddingHorizontal:10,
    zIndex:9999,
    
  },
  text:(title)=>({
    textAlign:'center',
    flex:1,
    fontWeight:'800',
    fontSize:18,
    display:title ? null :'none',
    textTransform:'uppercase'
  })
})