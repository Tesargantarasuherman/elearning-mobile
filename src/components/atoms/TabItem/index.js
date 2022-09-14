import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconBack, IconBlog, IconBlogActive, IconClass, IconClassActive, IconHomeActive, IconHomeNotActive, IconPlus } from '../../../assets'

const TabItem = ({isFocused,onPress,onLongPress,label}) => {
    const Icon = () => {
        if (label === "Home"){
            return isFocused ? <IconHomeActive/> : <IconHomeNotActive />
        } 
        if (label === "Class"){
            return isFocused ?  <IconClassActive /> : <IconClass/>
        } 
        if (label === "Blog"){
            return isFocused ?  <IconBlogActive /> : <IconBlog/> 
        } 
        
    }
    return (
    <TouchableOpacity
        accessibilityRole="button"
        accessibilityStates={isFocused ? ['selected'] : []}
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.container}
      >
        <Icon />
        <Text style={styles.text(isFocused)}>
          {label}
        </Text>
      </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems :'center',
    },
    text : (isFocused)=> ({
        fontSize : 13,
        color: isFocused ? 'black' : 'white',
        marginTop:2
    })
})