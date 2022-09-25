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
        style={styles.container(isFocused)}
      >
        <Icon />
        {/* <Text style={styles.text(isFocused)}>
          {label}
        </Text> */}
      </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
    container : (isFocused)=> ({
        flex:1,
        minWidth:50,
        alignItems :'center',
        paddingHorizontal:7,
        paddingVertical:15,
        marginHorizontal:50,
        borderRadius: isFocused ? 50 : 0,
        backgroundColor: isFocused ? '#D43E2A' : 'white'
    }),
    text : (isFocused)=> ({
        fontSize : 10,
        color: isFocused ? 'white' : '#D43E2A',
    })
})