import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '../../atoms'

const Card = ({title,body,id}) => {
  return (
    <View style={styles.container} key={id}>
            <Image source=
                {{ uri: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" }}
                style={{ width: '100%', height: 140 }}
            />
            <View style={styles.content}>
                <Text style={styles.title}>{title.substring(1, 10)}</Text>
                <Text>{body.substring(1, 50)}</Text>
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
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
        overflow:'hidden'
    },
    content:{
        flex: 1,
        padding:10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    buttonDetail: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop:5
    }
})