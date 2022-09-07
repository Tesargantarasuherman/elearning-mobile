import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Background, LLogo } from '../../assets'
import { Button } from '../../components'

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={Background} style={styles.page}>
            <View>
                <LLogo />
                <Text style={styles.title}>Belajar Bahasa Jepang jadi Lebih Mudah dan Fleksibel</Text>
            </View>
            <View style={styles.containerButton}>
                <Button title="Login" onPress={() => navigation.navigate('SignIn')}/>
                <Button type="secondary" title="Get Started" onPress={() => navigation.navigate('Blog')}/>
            </View>
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent:'space-between',
        flex:1,
        backgroundColor:'white'
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: '#D43E2A',
        marginTop: 91,
        textShadowColor:'white',
        textShadowOffset: {width: 0, height: 5},
        textShadowRadius:5

    },
    containerButton:{
        justifyContent:'space-between',
        flexDirection:'row'
    }
    
})