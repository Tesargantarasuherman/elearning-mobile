import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '../../atoms'
import { fonts } from '../../../utils'

const Card = ({title,body}) => {
  return (
    <View style={styles.container}>
            <Image source=
                {{ uri: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" }}
                style={styles.image}
            />
            <View style={styles.content}>
                <Text style={styles.title}>{title.substring(1, 10)}</Text>
                <Text style={styles.description}>{body.substring(1, 50)}</Text>
                <View style={styles.buttonDetail}>
                    <Button title="Detail"/>
                </View>
            </View>
        </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        margin: 5,
        overflow:'hidden'
    },
    image:{ 
        width: '100%',
        height: 140,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    content:{
        flex: 1,
        padding:10
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    description:{
        fontSize:10,
        fontFamily:fonts.primary[600]
    },
    buttonDetail: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop:5
    }
})